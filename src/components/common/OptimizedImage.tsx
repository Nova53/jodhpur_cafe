import { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height, 
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2YzZjRmNiIvPjwvc3ZnPg=='
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
  };

  // Generate optimized src with WebP support and proper sizing
  const getOptimizedSrc = () => {
    if (error) return src; // Fallback to original if WebP fails
    
    // Check if browser supports WebP
    const supportsWebP = typeof window !== 'undefined' && 
      window.createImageBitmap && 
      window.createImageBitmap(new Blob([''], { type: 'image/webp' }));
    
    if (supportsWebP && src.includes('.')) {
      const baseName = src.substring(0, src.lastIndexOf('.'));
      return `${baseName}.webp`;
    }
    
    return src;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{
            backgroundImage: `url(${placeholder})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Main Image */}
      <img
        ref={imgRef}
        src={getOptimizedSrc()}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto'
        }}
      />
      
      {/* Fallback for WebP errors */}
      {error && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? 'eager' : 'lazy'}
          style={{
            width: width ? `${width}px` : '100%',
            height: height ? `${height}px` : 'auto'
          }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;

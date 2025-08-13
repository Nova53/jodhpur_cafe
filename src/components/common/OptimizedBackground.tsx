import { useState, useEffect } from 'react';

interface OptimizedBackgroundProps {
  src: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  fallbackColor?: string;
}

const OptimizedBackground = ({ 
  src, 
  alt = '', 
  className = '', 
  children, 
  priority = false,
  fallbackColor = '#f3f4f6'
}: OptimizedBackgroundProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
    }
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setError(true);
  };

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.onload = handleImageLoad;
    img.onerror = handleImageError;
    img.src = src;
  }, [src]);

  return (
    <div 
      className={`relative ${className}`}
      style={{
        backgroundColor: fallbackColor
      }}
    >
      {/* Background Image */}
      {!error && (
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          role="img"
          aria-label={alt}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default OptimizedBackground;

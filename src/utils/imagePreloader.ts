export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (imageUrls: string[]): Promise<void> => {
  const promises = imageUrls.map(url => preloadImage(url));
  await Promise.allSettled(promises);
};

export const preloadCriticalImages = async (): Promise<void> => {
  const criticalImages = [
    './headerBanner.png',
    './headerBanner.jpg',
    './img1.jpg',
    './img2.png',
    './icon.png'
  ];
  
  try {
    await preloadImages(criticalImages);
    console.log('Critical images preloaded successfully');
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

export const preloadGalleryImages = async (): Promise<void> => {
  const galleryImages = [
    './Gallaryimg1.jpg',
    './Gallaryimg2.jpg',
    './Gallaryimg3.jpg',
    './Gallaryimg4.jpg',
    './Gallaryimg5.jpg',
    './Gallaryimg6.jpg',
    './Gallaryimg7.jpg',
    './Gallaryimg8.jpg'
  ];
  
  try {
    await preloadImages(galleryImages);
    console.log('Gallery images preloaded successfully');
  } catch (error) {
    console.warn('Some gallery images failed to preload:', error);
  }
};

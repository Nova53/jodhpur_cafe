import { useState } from "react";
import { OptimizedImage } from "./common";

const images = [
  "./Gallaryimg1.jpg",
  "./Gallaryimg2.jpg",
  "./Gallaryimg3.jpg",
  "./Gallaryimg4.jpg",
  "./Gallaryimg5.jpg",
  "./Gallaryimg6.jpg",
  "./Gallaryimg7.jpg",
  "./Gallaryimg8.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Masonry layout using CSS columns */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setSelectedImage(src)}
          >
            <OptimizedImage
              src={src}
              alt={`Gallery ${idx}`}
              className="w-full h-auto hover:scale-105 transition-transform duration-500"
              width={400}
              height={300}
            />
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-3xl max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </div>
  );
}
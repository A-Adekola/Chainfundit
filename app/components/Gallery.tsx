"use strict";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/image1.png", "/image2.png", "/image3.png", "/image4.png"];

export default function DescriptionGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev !== null && prev < images.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev !== null && prev > 0 ? prev - 1 : images.length - 1
    );
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="md:col-span-3 order-3 pt-7">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full h-32 md:h-40 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeModal}
            >
              <X size={30} />
            </button>

            {/* Image Display */}
            <img
              src={images[selectedImage]}
              alt="Expanded View"
              className="max-w-[90vw] max-h-[80vh] object-contain"
            />

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>
          </div>

          {/* Click outside to close */}
          <div className="absolute inset-0" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
}

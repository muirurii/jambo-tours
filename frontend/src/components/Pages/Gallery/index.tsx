import React from "react";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2704910/pexels-photo-2704910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 1",
    aspectRatio: 1, // 1:1 aspect ratio
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/2704910/pexels-photo-2704910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 2",
    aspectRatio: 0.8, // 5:4 aspect ratio
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2704910/pexels-photo-2704910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 3",
    aspectRatio: 1.2, // 5:6 aspect ratio
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/2704910/pexels-photo-2704910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 4",
    aspectRatio: 0.8, // 5:4 aspect ratio
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/2704910/pexels-photo-2704910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 5",
    aspectRatio: 1.2, // 5:6 aspect ratio
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/2704910/pexels-photo-2704910.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Image 6",
    aspectRatio: 1, // 1:1 aspect ratio
  },
];

function Gallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
          style={{ aspectRatio: image.aspectRatio }}
        />
      ))}
    </div>
  );
}

export default Gallery;

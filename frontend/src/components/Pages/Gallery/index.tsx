import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Heading from "../../Heading";

const images = [
  { src: "https://images.pexels.com/photos/4404524/pexels-photo-4404524.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Image 1", key: "img1" },
  { src: "https://images.pexels.com/photos/14629414/pexels-photo-14629414.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Image 2", key: "img2" },
  { src: "https://images.pexels.com/photos/13033070/pexels-photo-13033070.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Image 3", key: "img3" },
  { src: "https://images.pexels.com/photos/6164790/pexels-photo-6164790.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Image 4", key: "img4" },
  { src: "https://images.pexels.com/photos/10265648/pexels-photo-10265648.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Image 5", key: "img5" },
  { src: "https://images.pexels.com/photos/16073298/pexels-photo-16073298.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Image 6", key: "img6" },
  { src: "https://media.istockphoto.com/id/586942490/photo/elephants-and-kilimanjaro.jpg?b=1&s=612x612&w=0&k=20&c=4MfOiEwDoVFINArGInlim1Ws-QmxVl5UbY27CozdmEo=", alt: "Image 7", key: "img7" },
  { src: "https://media.istockphoto.com/id/149020257/photo/african-flamingos-on-sunset.jpg?b=1&s=612x612&w=0&k=20&c=WZy65slTZ1A8_AQCrOQlj6KPL4u8QseevOewH4Bs7kQ=", alt: "Image 8", key: "img8" },
  { src: "https://media.istockphoto.com/id/470248962/photo/tea-plantations-sunset.jpg?b=1&s=612x612&w=0&k=20&c=XTTAv7U1kXVTokA19lDyofR-p6_n3cEYjgecJodJHxo=", alt: "Image 9", key: "img9" },
  { src: "https://media.istockphoto.com/id/1170775456/photo/guts-bridge-mombasa.jpg?b=1&s=612x612&w=0&k=20&c=fvKg2SEogMBGpDk4yS4WgyQOF90K5nqLOecqvhWYgyk=", alt: "Image 9", key: "img15" },
  { src: "https://media.istockphoto.com/id/605758940/photo/fort-jesus-in-mombasa-kenya.jpg?b=1&s=612x612&w=0&k=20&c=u9gKkmnY2rumQRbUuqk_bHoZ2zfn-H7qrnU7VdHJEKQ=", alt: "Image 9", key: "img16" },
  { src: "https://media.istockphoto.com/id/607281390/photo/beach-with-palms-in-kenya.jpg?b=1&s=612x612&w=0&k=20&c=jUvmZGtEdfGHqPUb7xK793BNyJ4ZtRZLAWmeeGosg-A=", alt: "Image 9", key: "img17" },
  {
    src: "https://media.istockphoto.com/id/483871951/photo/giraffe-in-savannah.jpg?b=1&s=612x612&w=0&k=20&c=MJzhwKuvGHdTt0R1BwPiSIRQv3WqdtDxLT7oP6r8ahI=",
    alt: "Image 10",
    key: "img10",
  },
];

const Gallery = () => {

  return (
    <main className="py-8 mt-12 mb-16">
      <Heading text="Gallery" />
      <ResponsiveMasonry
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry
        gutter = "1rem"
        >
          {images.map((image) => (
            <img
              src={image.src}
              alt={image.alt}
              key={image.key}
              className="masonry-grid_item"
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </main>
  );
};

export default Gallery;

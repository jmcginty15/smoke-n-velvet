import smoke from "~/assets/center-smoke.mov";
import photo1 from "~/assets/gallery/photo-1.jpeg";
import photo2 from "~/assets/gallery/photo-2.jpeg";
import photo3 from "~/assets/gallery/photo-3.jpeg";
import photo4 from "~/assets/gallery/photo-4.jpeg";
import photo5 from "~/assets/gallery/photo-5.jpeg";
import photo6 from "~/assets/gallery/photo-6.jpeg";
import photo7 from "~/assets/gallery/photo-7.jpeg";
import { useLayoutEffect, useRef, useState } from "react";

export default function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setIsVisible(true));
    });

    if (domRef.current) {
      observer.observe(domRef.current);
      return () => {
        if (domRef.current) observer.unobserve(domRef.current);
      };
    }
  }, []);

  return (
    <div className="gallery">
      <div className="galleryContent">
        <video src={smoke} autoPlay muted className="galleryVideo" />
        <h2 className={`galleryTitle ${isVisible && "isVisible"}`} ref={domRef}>
          <span className="galleryTitleStart">G</span>allery
        </h2>
        <p className="galleryText">Check out some of my work!</p>
        <p className="galleryText">
          All of my smoking jackets are handcrafted and custom made to fit your
          preferences.
        </p>
      </div>
      <div className="galleryContent galleryContainer">
        <img id="photo1" className="galleryPhoto" src={photo1} />
        <img id="photo7" className="galleryPhoto" src={photo7} />
        <img id="photo6" className="galleryPhoto" src={photo6} />
        <img id="photo2" className="galleryPhoto" src={photo2} />
        <img id="photo3" className="galleryPhoto" src={photo3} />
        <img id="photo4" className="galleryPhoto" src={photo4} />
      </div>
    </div>
  );
}

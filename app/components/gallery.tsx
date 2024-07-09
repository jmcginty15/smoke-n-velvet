import { useLayoutEffect, useRef, useState } from "react";

// import GalleryOverlay from "./galleryOverlay";

import smoke from "~/assets/center-smoke.mov";
import photo2 from "~/assets/gallery/jacket-1.jpg";
import photo3 from "~/assets/gallery/jacket-2.jpg";
import photo1 from "~/assets/gallery/jacket-3.jpg";
import photo4 from "~/assets/gallery/jacket-4.jpg";

export default function Gallery() {
  //   props: {
  //   scrollTo: (linkName: string) => void;
  // }
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setIsVisible(true));
    });

    const current = domRef.current;
    if (current) {
      observer.observe(current);
      return () => {
        if (current) observer.unobserve(current);
      };
    }
  }, []);

  return (
    <div className="gallery">
      {/* <GalleryOverlay scrollTo={props.scrollTo} /> */}
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
        <img
          id="photo4"
          className="galleryPhoto"
          src={photo4}
          alt={"gallery-item-4"}
        />
        <img
          id="photo1"
          className="galleryPhoto"
          src={photo1}
          alt={"gallery-item-1"}
        />
        <img
          id="photo2"
          className="galleryPhoto"
          src={photo2}
          alt={"gallery-item-2"}
        />
        <img
          id="photo3"
          className="galleryPhoto"
          src={photo3}
          alt={"gallery-item-3"}
        />
      </div>
    </div>
  );
}

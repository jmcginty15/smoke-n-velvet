import { useLayoutEffect, useRef, useState } from "react";

import smoke from "~/assets/center-smoke.mov";
import woman from "~/assets/melissa.jpg";

export default function About() {
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
    <div className="about">
      <div className="aboutContent">
        <div
          className="aboutPhoto"
          style={{ backgroundImage: `url(${woman})` }}
        />
      </div>
      <div className="aboutContent">
        <video src={smoke} autoPlay muted playsInline className="aboutVideo" />
        <h2 className={`aboutTitle ${isVisible && "isVisible"}`} ref={domRef}>
          <span className="aboutTitleStart">H</span>i, I&apos;m{" "}
          <span className="aboutTitleStart">M</span>elissa
        </h2>
        <p className="aboutText">
          Indulge in the epitome of sophistication with my handcrafted smoking
          jackets, where every stitch tells a story of unparalleled
          craftsmanship. Meticulously tailored to perfection, each jacket exudes
          a timeless elegance, blending the finest materials with my artisanal
          expertise. With a keen eye for detail and a dedication to quality, I
          infuse every garment with a personal touch, ensuring that each wearer
          feels not only enveloped in luxury but also in a unique expression of
          their refined taste. Elevate your evening ensemble to new heights of
          style and grace with my exquisite smoking jackets, where tradition
          meets modernity in a symphony of unparalleled elegance.
        </p>
      </div>
    </div>
  );
}

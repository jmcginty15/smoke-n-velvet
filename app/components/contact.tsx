import { useLayoutEffect, useRef, useState } from "react";

import smoke from "~/assets/center-smoke.mov";

const email = "melissa.h@smokenvelvet.com";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const domRefLeft = useRef<HTMLHeadingElement>(null);
  const domRefRight = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setIsVisible(true));
    });

    const current = domRefLeft.current;
    if (current) {
      observer.observe(current);
      return () => {
        if (current) observer.unobserve(current);
      };
    }
  });

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && setIsVisible(true));
    });

    const current = domRefRight.current;
    if (current) {
      observer.observe(current);
      return () => {
        if (current) observer.unobserve(current);
      };
    }
  }, []);

  return (
    <div className="contact">
      <div className="contactContent contactContentLeft">
        <video
          src={smoke}
          autoPlay
          muted
          playsInline
          className="contactVideo"
        />
        <h2
          className={`contactTitle ${isVisible && "isVisible"}`}
          ref={domRefLeft}
        >
          <span className="contactTitleStart">C</span>ontact{" "}
          <span className="contactTitleStart">M</span>e
        </h2>
        <p className="contactText">
          Get your own high quality handcrafted smoking jacket today!
        </p>
      </div>
      <div className="contactContent">
        <h3 className="contactSubtitle contactTopSubtitle">
          <span className="contactSubtitleStart">P</span>hone
        </h3>
        <p className="contactSubtext">
          <a className="contactLink" href="tel:5807490398">
            (580) 749-0398
          </a>
        </p>
        <h3 className="contactSubtitle">
          <span className="contactSubtitleStart">E</span>mail
        </h3>
        <p className="contactSubtext">
          <a className="contactLink" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
      </div>
      <div className="contactContent contactContentRight">
        <video
          src={smoke}
          autoPlay
          muted
          playsInline
          className="contactVideo"
        />
        <h2
          className={`contactTitle ${isVisible && "isVisible"}`}
          ref={domRefRight}
        >
          <span className="contactTitleStart">C</span>ontact{" "}
          <span className="contactTitleStart">M</span>e
        </h2>
        <p className="contactText">
          Get your own high quality handcrafted smoking jacket today!
        </p>
      </div>
    </div>
  );
}

import smoke from "~/assets/center-smoke.mov";
import { useLayoutEffect, useRef, useState } from "react";

const email = "smokenvelvet@gmail.com";

export default function Contact() {
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
    <div className="contact">
      <div className="contactContent">
        <h3 className="contactSubtitle contactTopSubtitle">
          <span className="contactSubtitleStart">P</span>hone
        </h3>
        <p className="contactSubtext">(123) 456-7890</p>
        <h3 className="contactSubtitle">
          <span className="contactSubtitleStart">E</span>mail
        </h3>
        <p className="contactSubtext">
          <a className="contactLink" href={`mailto:${email}`}>
            {email}
          </a>
        </p>
        <p className="contactText">
          (Or this could be a form that sends you an email)
        </p>
      </div>
      <div className="contactContent">
        <video src={smoke} autoPlay muted className="contactVideo" />
        <h2 className={`contactTitle ${isVisible && "isVisible"}`} ref={domRef}>
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
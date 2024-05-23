import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import Navbar from "~/components/navbar";
import Landing from "~/components/landing";
import About from "~/components/about";
import Gallery from "~/components/gallery";
import Contact from "~/components/contact";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const menuLinks = ["About", "Gallery", "Contact"];

  const scrollTo = (linkName: string) => {
    const ref =
      linkName === "About"
        ? aboutRef
        : linkName === "Gallery"
          ? galleryRef
          : contactRef;
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main>
      <Navbar menuLinks={menuLinks} scrollTo={scrollTo} />
      <Landing />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={galleryRef}>
        <Gallery />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

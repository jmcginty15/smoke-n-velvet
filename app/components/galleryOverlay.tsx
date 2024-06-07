import { useState } from "react";

export default function GalleryOverlay(props: {
  scrollTo: (linkName: string) => void;
}) {
  const [panelOpen, setPanelOpen] = useState<boolean | null>(null);
  const [hoveringOpen, setHoveringOpen] = useState(false);

  const toggleHoveringOpen = (newState: boolean) => {
    if (hoveringOpen !== newState) setHoveringOpen(newState);
  };

  const togglePanel = (newState: boolean) => {
    if (panelOpen !== newState) {
      setPanelOpen(newState);
      if (newState) props.scrollTo("Gallery");
    }
  };

  return (
    <div
      className={`galleryOverlay${panelOpen !== null ? (panelOpen ? " galleryOverlayOpen" : " galleryOverlayClose") : ""}`}
    >
      <div className="galleryButtonContainer">
        <button
          className="galleryButton galleryButtonClose"
          onMouseEnter={() => toggleHoveringOpen(true)}
          onMouseLeave={() => toggleHoveringOpen(false)}
          onMouseDown={() => toggleHoveringOpen(true)}
          onMouseUp={() => toggleHoveringOpen(false)}
          onClick={() => togglePanel(false)}
        >
          <i className="fa fa-arrow-left galleryIconStaticLeft" />
          Close
        </button>
        <button
          className="galleryButton galleryButtonOpen"
          onMouseEnter={() => toggleHoveringOpen(true)}
          onMouseLeave={() => toggleHoveringOpen(false)}
          onMouseDown={() => toggleHoveringOpen(true)}
          onMouseUp={() => toggleHoveringOpen(false)}
          onClick={() => togglePanel(true)}
        >
          See More
          <i
            className={`fa fa-arrow-right ${hoveringOpen ? "galleryIconStatic" : "galleryIconAnimated"}`}
          />
        </button>
      </div>
    </div>
  );
}

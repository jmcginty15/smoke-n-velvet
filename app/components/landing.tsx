import background from "~/assets/background-black-and-white.jpeg";

export default function Landing() {
  return (
    <div className="landing" style={{ backgroundImage: `url(${background})` }}>
      <div className="title">
        <span className="titleStart">S</span>moke &apos;n{" "}
        <span className="titleStart">V</span>elvet
      </div>
      <div className="subtitle">by Melissa H.</div>
    </div>
  );
}

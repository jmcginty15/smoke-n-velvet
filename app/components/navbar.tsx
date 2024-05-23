import { Link } from "@remix-run/react";

import Logo from "~/assets/logo";

export default function Navbar(props: {
  menuLinks: string[];
  scrollTo: (linkName: string) => void;
}) {
  const { menuLinks, scrollTo } = props;

  return (
    <header className="header">
      <div className="navContainer">
        <Link className="link" title="logo" to="/">
          <Logo scale={0.2} />
        </Link>
        <nav className="nav">
          {menuLinks.map((link, index: number) => (
            <span
              role="button"
              tabIndex={index}
              className="navLink"
              key={link}
              onClick={() => scrollTo(link)}
              onKeyDown={() => scrollTo(link)}
            >
              {link}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

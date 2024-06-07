import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesAbout from "~/components/about.css";
import stylesContact from "~/components/contact.css";
import stylesFooter from "~/components/footer.css";
import stylesGallery from "~/components/gallery.css";
import stylesGalleryOverlay from "~/components/galleryOverlay.css";
import stylesLanding from "~/components/landing.css";
import stylesNavbar from "~/components/navbar.css";
import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";

import stylesFA from "../node_modules/font-awesome/css/font-awesome.min.css";

import stylesRoot from "./root.css";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap",
  },
  { rel: "stylesheet", href: stylesFA },
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: stylesRoot },
  { rel: "stylesheet", href: stylesNavbar },
  { rel: "stylesheet", href: stylesLanding },
  { rel: "stylesheet", href: stylesAbout },
  { rel: "stylesheet", href: stylesGallery },
  { rel: "stylesheet", href: stylesGalleryOverlay },
  { rel: "stylesheet", href: stylesContact },
  { rel: "stylesheet", href: stylesFooter },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({ user: await getUser(request) });
};

export default function App() {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full" style={{ backgroundColor: "black" }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

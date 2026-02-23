import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_TITLE =
  "AlethraLink | Network Engineering Services for ISPs & Enterprises";

const TITLES = {
  "/": DEFAULT_TITLE,
  "/services": "Services | AlethraLink",
  "/why": "Why AlethraLink | AlethraLink",
  "/about": "About | AlethraLink",
  "/contact": "Contact | AlethraLink",
};

export default function ScrollToTopAndTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    // smooth scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // set title
    document.title = TITLES[pathname] || DEFAULT_TITLE;
  }, [pathname]);

  return null;
}

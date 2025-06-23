import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { prefix } from "@/utils/path";

/**
 * Galaxy3 – Navigation bar (v9)
 * ------------------------------------------------------------
 * •   Fix: tapping ✕ on mobile reliably closes the menu (stopPropagation)
 * •   Keeps burger → open / X → close pattern
 * •   All other behaviour unchanged
 */
export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const homeAnchors = ["/#hero", "/#features", "/#solutions", "/#trends", "/#contact"];
  const inHomeSection = homeAnchors.includes(router.asPath);

  // Click‑outside closes mobile panel
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  /* ---------------- helpers ---------------- */
  const linkClass = (href: string, extra = "") => [
    "relative px-3 py-1 transition",
    router.asPath === href || (href === "/#hero" && inHomeSection)
      ? "text-blue-400 font-semibold"
      : "text-white hover:text-blue-300",
    extra,
  ].join(" ");

  const dropdownLinkClass = (href: string) => [
    "block px-4 py-2 text-gray-800 hover:bg-gray-100 transition",
    router.asPath === href ? "text-blue-400 font-semibold" : "",
  ].join(" ");

  /* ---------------- JSX ---------------- */
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-md text-white px-4 py-3">
      {/* Logo + desktop nav */}
      <div className="flex items-center justify-between">
        <Link href="/" className="pl-2 flex items-center">
          <img src={`${prefix}/images/logo.png`} alt="Galaxy3 Logo" className="h-10 w-auto object-contain transition hover:opacity-90" />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm font-medium pr-2">
          {/* Home dropdown */}
          <div className="relative group">
            <Link href="/#hero" className={linkClass("/#hero", "flex items-center")}>Home
              <svg className="ml-1 h-3 w-3 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.08z" clipRule="evenodd" />
              </svg>
            </Link>
            <div className="absolute left-0 top-full z-50 w-48 origin-top rounded bg-white shadow-lg opacity-0 invisible transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <ul className="flex flex-col divide-y divide-gray-100">
                <li><Link href="/#features"  className={dropdownLinkClass("/#features") }>Features</Link></li>
                <li><Link href="/#solutions" className={dropdownLinkClass("/#solutions")}>Solutions</Link></li>
                <li><Link href="/#trends"    className={dropdownLinkClass("/#trends")   }>Trends</Link></li>
                <li><Link href="/#contact"   className={dropdownLinkClass("/#contact")  }>Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Static pages */}
          <Link href="/about"    className={linkClass("/about")}>About</Link>
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
          <Link href="/contact"  className={linkClass("/contact")}>Contact</Link>
        </div>

        {/* Mobile toggle buttons */}
        {menuOpen ? (
          <button
            aria-label="Close menu"
            onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <button
            aria-label="Open menu"
            onClick={(e) => { e.stopPropagation(); setMenuOpen(true); }}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

      {/* Mobile slide‑down */}
      {menuOpen && (
        <div ref={menuRef} className="mt-3 space-y-2 rounded bg-gray-800 px-4 py-3 text-sm font-medium md:hidden">
          <Link href="/#hero"      className={linkClass("/#hero", "block py-1")}          onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#features"  className="block py-1 pl-4 text-gray-300"             onClick={() => setMenuOpen(false)}>↳ Features</Link>
          <Link href="/#solutions" className="block py-1 pl-4 text-gray-300"             onClick={() => setMenuOpen(false)}>↳ Solutions</Link>
          <Link href="/#trends"    className="block py-1 pl-4 text-gray-300"             onClick={() => setMenuOpen(false)}>↳ Trends</Link>
          <Link href="/#contact"   className="block py-1 pl-4 text-gray-300"             onClick={() => setMenuOpen(false)}>↳ Contact CTA</Link>
          <Link href="/about"      className={linkClass("/about", "block py-1") }       onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services"   className={linkClass("/services", "block py-1") }    onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/projects"   className={linkClass("/projects", "block py-1") }    onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact"    className={linkClass("/contact", "block py-1") }     onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

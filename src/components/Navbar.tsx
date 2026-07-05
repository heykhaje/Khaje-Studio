"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "LAYANAN", path: "/layanan" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "TEAM", path: "/team" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full fixed top-0 left-0 bg-background z-50 border-b-4 border-on-surface shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <nav className="flex justify-between items-center px-4 sm:px-margin-mobile md:px-margin-desktop py-base max-w-[1280px] mx-auto relative z-20 bg-background">
        <Link href="/" onClick={closeMenu} className="font-headline-md text-2xl md:text-headline-md font-black text-on-surface">
          KHAJE&apos;STUDIO
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`font-body-md text-body-md uppercase tracking-widest transition-all duration-75 hover:translate-x-[2px] hover:translate-y-[2px] ${
                  isActive
                    ? "text-secondary underline decoration-4 underline-offset-8"
                    : "text-on-surface"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        
        <div className="hidden lg:block">
          <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" className="inline-block brutalist-border bg-primary-container px-6 py-2 font-label-bold uppercase neo-shadow-sm hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all">
            START A PROJECT
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="lg:hidden brutalist-border p-2 bg-primary-container neo-shadow-sm active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col gap-1 w-6">
            <span className={`block h-1 w-full bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-1 w-full bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-1 w-full bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background border-b-4 border-on-surface flex flex-col z-10 overflow-hidden shadow-[0px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={closeMenu}
                    className={`font-headline-md text-2xl uppercase tracking-widest ${
                      isActive ? "text-secondary pl-4 border-l-4 border-secondary" : "text-on-surface"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a href="https://wa.me/message/CCBS3IH7YETTC1" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="inline-block text-center brutalist-border bg-primary-container px-6 py-4 font-headline-md text-xl uppercase neo-shadow mt-4 hover-lift">
                START A PROJECT
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

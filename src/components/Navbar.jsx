import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#skills", label: "Yetenekler" },
  { href: "#experience", label: "Tecrübeler" },
  { href: "#languages", label: "Y.Diller" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];
const Navbar = () => {
  const [mobileMenuOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-gray-200/85 backdrop-blur supports-[backdrop-filter]:bg-gray-200/5 px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-center relative">
        <div className="flex flex-col item-center space-y-2 md:flex-row md:space-y-0 md:space-x-36">
          <a href="#" className="flex items-center space-x-2">
            <p className="text-green-900 text-3xl font-bold">FATİH CANBAY</p>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <button
          className="absolute right-4 inline-flex items-center justify-center rounded-md md:hidden"
          onClick={() => setMobileOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle main menu</span>
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pd-3 pt-2 text-center ">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-green-800 hover:bg-slate-50 hover:text-green-900"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

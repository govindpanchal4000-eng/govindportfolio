import React, { useEffect, useState } from "react";
import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
  FiGithub,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
    { name: "Peoject", id: "Project" },
  ];

  // Detect which section is currently visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

        {/* Logo */}
        <a
          href="#home"
          className="rounded-md p-3 text-xl font-bold text-slate-900 dark:text-white"
        >
          Govind<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition ${
                active === link.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 hover:text-blue-600 dark:text-slate-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-slate-300"
          >
            <FiGithub size={19} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:text-slate-300"
          >
            <FaLinkedinIn size={18} />
          </a>

          {/* Dark Mode */}
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2.5 text-slate-600 hover:bg-blue-600 hover:text-white dark:text-slate-300"
          >
            {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2.5 text-slate-700 dark:text-white md:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium ${
                active === link.id
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
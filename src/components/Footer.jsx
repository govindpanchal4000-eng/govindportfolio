import React from "react";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-6xl px-5 py-12">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo & About */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white">
              Govind<span className="text-blue-500">.</span>
            </h2>

            <p className="mt-2 max-w-sm text-sm text-slate-400">
              MERN Stack Developer passionate about building
              modern and responsive web applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <FiGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <FiLinkedin size={20} />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="rounded-lg border border-slate-700 p-3 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
            >
              <FiMail size={20} />
            </a>

          </div>

          {/* Back To Top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <FiArrowUp size={18} />
            Back to Top
          </button>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © 2026 Govind.dev. All Rights Reserved.
          </p>

          <p>
            Built with <span className="text-blue-500">React</span> &{" "}
            <span className="text-blue-500">Tailwind CSS</span>
          </p>

        </div>

      </div>
    </footer>
  );
}
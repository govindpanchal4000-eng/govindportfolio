import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-5 pt-20">
        <div className="w-full text-center">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex justify-center"
          >
            <div className="rounded-full border-4 border-blue-600 p-1">
              <img
                src="https://res.cloudinary.com/yeqfmgur/image/upload/v1786469638/WhatsApp_Image_2026-08-11_at_10.23.43_PM_1_dkzwch.jpg"
        
                className="h-32 w-32 rounded-full object-cover object-top sm:h-36 sm:w-36"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Role */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              MERN Stack Developer
            </p>

            {/* Heading */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Govind Kumar
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              I build modern, responsive and user-friendly web applications
              using React.js, JavaScript, Tailwind CSS, Node.js and MongoDB.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">

              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700"
              >
                View Projects
                <FiArrowRight />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                Contact Me
              </motion.a>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-3">

              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                aria-label="GitHub"
                className="rounded-lg border border-slate-200 p-3 text-slate-600 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
              
            
          

              
                whileHover={{ y: -3 }}
                href="#"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-200 p-3 text-slate-600 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
              
                whileHover={{ y: -3 }}
                href="Govind-Kumar-Resume.pdf"
               download="Govind-Kumar-Resume.pdf"
                className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                <FiDownload />
                Resume
              </motion.a>

            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="mt-14 text-sm text-slate-400"
          >
            ↓ Scroll to explore
          </motion.div>

        </div>
      </div>
    </section>
  );
}
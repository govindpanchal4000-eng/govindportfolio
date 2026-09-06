import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiCode,
} from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern and responsive developer portfolio built with React and Tailwind CSS.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "#",
      live: "#",
    },
    {
  title: "Keychain Store",
  description:
    "A responsive e-commerce website for browsing and exploring different keychain products.",
  tech: ["React", "JavaScript", "Tailwind"],
  github: "#",
  live: "https://key-front.vercel.app/",
},
    {
      title: "Random User App",
      description:
        "A React application that fetches and displays user data from a public API.",
      tech: ["React", "Axios", "API"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-50 py-20 text-slate-900 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-6xl px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-xl text-white">
            <FiCode />
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            My Work
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            view Projects
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Here are some projects I have built using modern web
            technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Project Image */}
              <div className="flex h-44 items-center justify-center bg-slate-100 dark:bg-slate-800">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-3">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
                  >
                    <FiGithub  />
                    GitHub
                    
                  </a>

                  <a
                    href={project.live}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    Live Demo
                    <FiExternalLink />
                  </a>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
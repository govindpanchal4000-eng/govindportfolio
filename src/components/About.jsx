import React from "react";
import { motion } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiLayers,
  FiDatabase,
} from "react-icons/fi";

export default function About() {
  const skills = [
    {
      icon: <FiCode />,
      title: "Frontend",
      text: "React.js, JavaScript, HTML, CSS and Tailwind CSS",
    },
    {
      icon: <FiDatabase />,
      title: "Backend",
      text: "Node.js, Express.js and MongoDB",
    },
    {
      icon: <FiLayers />,
      title: "Development",
      text: "Responsive, clean and user-friendly web applications",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white py-20 text-slate-900 dark:bg-slate-950 dark:text-white"
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
            <FiUser />
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About Me
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            A Little About Me
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">
              I'm a{" "}
              <span className="text-blue-600">
                MERN Stack Developer
              </span>
            </h3>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              I enjoy building modern and responsive web applications.
              My main focus is creating clean user interfaces and
              developing applications that are simple, fast and easy to use.
            </p>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              I work with React.js on the frontend and Node.js,
              Express.js and MongoDB on the backend. I am continuously
              learning new technologies and improving my development skills.
            </p>

            {/* Small Info */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
                <p className="text-2xl font-bold text-blue-600">React</p>
                <p className="mt-1 text-sm text-slate-500">
                  Frontend
                </p>
              </div>

              <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-800">
                <p className="text-2xl font-bold text-blue-600">MERN</p>
                <p className="mt-1 text-sm text-slate-500">
                  Full Stack
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-500 dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xl text-white">
                  {skill.icon}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {skill.title}
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {skill.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
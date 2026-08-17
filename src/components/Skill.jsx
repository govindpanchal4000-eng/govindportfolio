import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiGitBranch,
  FiLayers,
} from "react-icons/fi";

export default function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FiCode />,
      level: "90%",
    },
    {
      name: "CSS",
      icon: <FiLayers />,
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <FiCode />,
      level: "80%",
    },
    {
      name: "React.js",
      icon: <FiLayers />,
      level: "85%",
    },
    {
      name: "Tailwind CSS",
      icon: <FiLayers />,
      level: "85%",
    },
    {
      name: "Node.js",
      icon: <FiCode />,
      level: "70%",
    },
    {
      name: "MongoDB",
      icon: <FiDatabase />,
      level: "70%",
    },
    {
      name: "Git & GitHub",
      icon: <FiGitBranch />,
      level: "75%",
    },
  ];

  return (
    <section
      id="skills"
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
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            My Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            These are the technologies and tools I use to build modern
            and responsive web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-xl text-white">
                  {skill.icon}
                </div>

                <h3 className="font-semibold">
                  {skill.name}
                </h3>
              </div>

              {/* Progress */}
              <div className="mt-5">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="text-slate-500">
                    Skill Level
                  </span>

                  <span className="font-medium text-blue-600">
                    {skill.level}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2,
                    }}
                    className="h-full rounded-full bg-blue-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
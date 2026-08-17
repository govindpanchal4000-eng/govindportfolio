import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
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
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Contact
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-600 dark:text-slate-400">
            Have a project or an idea? Feel free to get in touch with me.
            I would be happy to connect with you.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">
              Get In Touch
            </h3>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              I'm always open to discussing new projects, ideas or
              opportunities. You can reach me through the details below.
            </p>

            <div className="mt-7 space-y-4">

              {/* Email */}
              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-500 dark:border-slate-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <FiMail />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Email
                  </p>
                  <p className="font-medium">
                    govindkumar4000@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+910000000000"
                className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-500 dark:border-slate-800"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <FiPhone />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Phone
                  </p>
                  <p className="font-medium">
                    +91 87084-29080
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 dark:border-slate-800">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <FiMapPin />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Location
                  </p>
                  <p className="font-medium">
                    India
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="grid gap-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-950"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
                <FiSend />
              </button>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
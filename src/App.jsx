import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";

import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="contact">
          <Contact />
        </section>

         <section id="Project">
          <Project />
        </section>

        <section id="">
          <Footer />
        </section>
      </main>
    </>
  );
}
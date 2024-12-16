import React from "react";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      {/** Navbar above */}
      <div id="home" className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
        <div className="text-center">
          {/** Replace with your name or content */}
          <h1 className="text-5xl font-bold">Hi, I'm Ibrahim</h1>
          <p className="mt-4 text-lg">A passionate developer creating beautiful web experiences.</p>
          <a href="#projects" className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">View My Work</a>
        </div>
      </div>
      <section id="about" className="bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          {/** Replace with your content */}
          <p className="text-gray-600 leading-relaxed">
            Hello! I'm a web developer passionate about building functional<br/> and visually appealing web applications.
            <br/>I specialized in front-end technologies like React, TailwindCSS,<br/> and Node.js for the backend.
          </p>
        </div>
      </section>
      {/** Add your github links here and add your own contents */}
      <div id="projects" className="bg-gray-100 py-12">
        <h2 className="text-center text-3xl font-bold mb-8">My Projects</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard title="Portfolio Website" description="A modern portfolio built with React and Tailwind." link="https://github.com/Your-portfolio-link"/>
          <ProjectCard title="E-commerce App" description="A simple e-commerce app using React and Node.js" link="https://github.com/your-project-link"/>
        </div>
      </div>
      <div id="contact" className="bg-white py-12">
        <h2 className="text-center text-3xl font-bold mb-8">Contact Me</h2>
        <div className="container mx-auto max-w-md">
          {/** Replace form action with your formspree id if you have a formspree account or your backend file */}
          <form action="http://formspree.io/f/your-form-id" method="POST" className="bg-gray-100 p-6 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" required className="w-full mt-2 p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" name="email" id="email" required className="w-full mt-2 p-2 border border-gray-300 rounded" />
          </div>
          <div className="mb4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea name="message" id="message" rows="4" required className="w-full mt-2 p-2 border border border-gray-300 rounded"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
          </form>
        </div>
      </div>
      {/** Footer below */}
      <Footer />
    </div>
  );
};

export default App;

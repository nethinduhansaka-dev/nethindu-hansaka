import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import Card from '../Components/card'


export default function Projects() {

  const sectionRefs = useRef([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);


  return (
    <div className='dark-blue-bg' style={{ scrollBehavior: 'smooth' }}>
      <header>
        <Navbar />
      </header>

      <section>
        <div className="h-32">   </div>
        <div className="flex  justify-center mb-5 ">
          <h1  ref={(el) => (sectionRefs.current[0] = el)} className='p-5 text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold font-mono eading-none tracking-tight text-gray-900  dark:text-white   ...' >
            Cutting-Edge Project Showcase
          </h1>
        </div>
        <div  className=" flex justify-center">
          <p  ref={(el) => (sectionRefs.current[1] = el)} className='p-10 pt-0 mb-3 text-center text-gray-500 dark:text-gray-400  text-gray-500 dark:text-gray-400'>
          Welcome to my portfolio! As a dedicated software engineering student, I am eager to share the projects I've completed during my university journey. Here, you'll find a collection of my work, showcasing my growth, creativity, and technical skills. Though these projects are small, each one represents a significant step in my learning process and my commitment to excellence in software development. Explore my projects and witness the foundation I'm building for a future in technology.
          </p>
        </div>


        <section>
          <div className="flex justify-center flex-wrap ">
            <Card img="src/assets/project/Cal_Js.jpg" title="Simple JavaScript Calculator" details="This mini project was done by me to develop my html, css, javascript knowledge, first I watched a youtube video and then it was made with my knowledge. Here the styles section is made by me with my knowledge." />
            <Card img="src/assets/project/Bank_ms.jpg" title="Bank Management System" details="This mini project is a project given to me by the university. This mini project is made with the content of python programming language only" />
            <Card img="src/assets/project/website_project.jpg" title="Green Planet Living Unity" details="This mini project is a project given to me by the university. This mini project is a website created using HTML, CSS, JS (vue) language." />
            <Card img="src/assets/project/portfilo.jpg" title="Portfolio Website" details="If I mention this mini project, this is my portfilo website. This is made using react which is a javascript framework and styled using Tailwind Css which is a css framework." />
            <Card img="" title="" details="" />
            <Card img="" title="" details="" />



          </div>

        </section>
      </section>

      <footer>
        <Footer />

      </footer>


    </div>
  )
}

// src/pages/About.js

import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../Components/navbar";
import Footer from "../Components/footer";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {

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
    <div
      className="dark-blue-bg min-h-screen flex flex-col"
      style={{ scrollBehavior: "smooth" }}
    >
      <header>
        <Navbar />
      </header>

      <main  className="">
        <div className="h-28"  ></div>

        <card ref={(el) => (sectionRefs.current[0] = el)} className="flex-grow  flex flex-col items-center text-center mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ...">
            <img
              class="w-32 h-32 rounded-full mb-4 "
              src="src/assets/pro-img.jpg"
              alt=""
            />
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hi! I'm Nethindu Hansaka
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              I am an undergraduate software engineer studying at the Open
              University of Sri Lanka. With a solid foundation in various
              programming languages and web development technologies, I am
              passionate about creating innovative solutions. I have hands-on
              experience with Python, JavaScript (including React and Vue),
              HTML, CSS (including Bootstrap and Tailwind), and C. I am eager to
              expand my skill set to include C++, and C# in the near future.
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[1] = el)} className="flex-grow  flex flex-col text-center mb-8">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Career Objectives
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              My goal is to become an active and proficient software engineer
              with a deep understanding of both theoretical concepts and
              practical applications. I am particularly interested in artificial
              intelligence, web development, and mobile applications. I aim to
              continuously improve my skills and contribute to impactful
              projects
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[2] = el)} className="flex-grow  flex flex-col items-center  mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Education
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <strong>Bachelor's in Software Engineering</strong> (Ongoing)
            </p>
            <li class="flex items-center">
              <svg
                height="22"
                viewBox="0 0 72 72"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M36,72 L36,72 C55.882251,72 72,55.882251 72,36 L72,36 C72,16.117749 55.882251,-3.65231026e-15 36,0 L36,0 C16.117749,3.65231026e-15 -2.4348735e-15,16.117749 0,36 L0,36 C2.4348735e-15,55.882251 16.117749,72 36,72 Z"
                    fill="#0097D1"
                  />
                  <path
                    d="M24.6484375,44.2125036 C24.3859375,45.8218786 24.3046875,46.6234411 26.1796875,46.5859411 C27.26875,46.5625036 28.615625,46.2203161 29.6421875,45.9796911 C35.4671875,44.6140661 38.29375,45.0562536 43.9484375,46.2828161 C47.890625,47.1375036 47.875,46.2390661 47.1109375,42.7015661 L46.6015625,39.2000036 C47.4296875,39.1171911 52.53125,36.4968786 53.5734375,36.3093786 L53.5609375,37.7046911 C53.2765625,37.9609411 53.0515625,37.9593786 53.040625,38.4734411 C53.0296875,38.9359411 53.2390625,39.0296911 53.45625,39.2343786 C53.4765625,39.8375036 53.3453125,39.7562536 53.265625,40.2171911 C53.0703125,41.3703161 52.553125,47.7484411 52.6640625,47.9750036 C52.921875,48.5093786 54.5421875,48.6609411 54.8453125,48.0015661 C55.0765625,47.5046911 54.415625,40.9359411 54.1515625,39.7625036 C53.953125,38.8828161 54.45,39.2031286 54.5140625,38.5750036 C54.5671875,38.0546911 54.2625,37.9656286 53.965625,37.7046911 L53.96875,36.0968786 C55.25625,35.4359411 59.2578125,33.8968786 60,33.4156286 C59.290625,32.9687536 55.2078125,31.3093786 54.0609375,30.7984411 C52.025,29.8890661 50.078125,29.0500036 48.0421875,28.1828161 C46.7421875,27.6281286 36.384375,23.0078161 36.009375,23.0000036 C35.734375,22.9953161 25.2234375,27.6234411 23.9703125,28.1781286 C21.9765625,29.0593786 19.9859375,29.9375036 17.95,30.7859411 C17.171875,31.1093786 12.3546875,33.1578161 12,33.4312536 C13.546875,34.2484411 25.16875,39.1906286 25.3984375,39.1906286 L24.6484375,44.2125036 Z"
                    fill="#FFF"
                  />
                </g>
              </svg>
              <p class="p-2 font-normal text-gray-700 dark:text-gray-400">
                Open University of Sri Lanka
              </p>
            </li>

            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg
                class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Relevant Coursework: Software Development, Data Structures,
                Algorithms, Web Development, Artificial Intelligence
              </p>
            </li>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[3] = el)} className=" flex-grow  flex flex-col   mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Professional Experience
            </h5>
            <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              <li>
                <strong className="flex items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Project 1: Web-Based Application
                </strong>
                <p className="text-center">
                  Developed a responsive web application using React, Bootstrap,
                  and Python for backend processing.
                </p>
              </li>
              <li>
                <strong class="flex items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Project 2: Mobile Application Prototype
                </strong>
                <p className="text-center">
                  Created a mobile app prototype using JavaScript and Vue,
                  focusing on user experience and performance.
                </p>
              </li>
              <li>
                <strong class="flex items-center">
                  <svg
                    class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  Project 3: AI Chatbot
                </strong>
                <p className="text-center">
                  Built a basic AI chatbot with Python, exploring natural
                  language processing and machine learning fundamentals.
                </p>
              </li>
            </ul>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[4] = el)} className="flex-grow  flex flex-col items-center  mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Skills
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <strong>
                <li>Technical Skills:</li>
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="p-5 pb-0">
                    {" "}
                    Programming Languages:{" "}
                    <span class="font-semibold text-white-900 dark:text-white">
                      Python, JavaScript (React, Vue), HTML, CSS (Bootstrap,
                      Tailwind), C
                    </span>
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="p-5 pt-0 pb-0">
                    Future Learning Goals:{" "}
                    <span class="font-semibold text-white-900 dark:text-white">
                      C++, C#{" "}
                    </span>
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="p-5 pb-0 pt-0">
                    Tools & Technologies:{" "}
                    <span class="font-semibold text-gray-900 dark:text-white">
                      Git, GitHub, VS Code, Node.js
                    </span>{" "}
                  </span>
                </li>

                <li className="pt-6">Soft Skills:</li>
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span className="p-5 pb-0 pt-0">
                    {" "}
                    Problem-Solving, Communication, Team Collaboration,
                    Adaptability
                  </span>
                </li>
              </strong>
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[5] = el)} className="flex-grow  flex flex-col  mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Languages and Tools:
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <div className="flex flex-wrap ">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg"
                  className="w-12 h-auto m-2"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
                  className="w-12 h-auto m-2"
                />
              </div>
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[6] = el)} className="flex-grow  flex flex-col items-center  mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Projects
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <li>
                <strong>Web Application Projects:</strong>
                <br />
                Developed dynamic and responsive web applications with React and
                Vue, showcasing my ability to handle front-end development
                efficiently.
              </li>

              <li>
                <strong>AI Projects:</strong>
                <br />
                Created prototypes and basic implementations of AI models,
                illustrating my interest and foundational skills in artificial
                intelligence.
              </li>

              <li className="mt-2">
                <strong>Code Repositories:</strong>
                <br />
                Check out my GitHub{" "}
                <a
                  href="https://github.com/nethinduhansaka-dev"
                  className="text-blue-500"
                >
                  here
                </a>{" "}
                for a look at my coding style and projects.
              </li>
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[7] = el)} className="flex-grow  flex flex-col   mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Personal Attributes
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              I am driven by a strong work ethic and a passion for continuous
              learning. My dedication to coding and development is not just a
              professional pursuit but a personal interest that motivates me to
              stay updated with the latest technologies and trends in the
              software industry.
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[8] = el)} className="flex-grow  flex flex-col items-center  mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Testimonials
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              <li>
                <em>
                  "A highly motivated individual with a knack for
                  problem-solving and innovation."
                </em>{" "}
                - Colleague(chathura)
                <a
                  href="#"
                  class=" p-5 pb-0 text-blue-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
                    className="w-12 h-auto m-2 mb-0"
                  />
                  <span class="sr-only">Facebook page</span>
                </a>
              </li>
              <li>
                <em>
                  "Shows great potential and dedication to mastering new
                  technologies."
                </em>{" "}
                - Professor
              </li>
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[9] = el)} className="flex-grow  flex flex-col   mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Hobbies and Interests
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Outside of my professional interests, I enjoy spending time coding
              and exploring new development frameworks and technologies. Coding
              is not just my profession but also my hobby, which keeps me
              constantly engaged and enthusiastic about my work.
            </p>
          </div>
        </card>

        <card ref={(el) => (sectionRefs.current[10] = el)} className="flex-grow  flex flex-col items-center  mb-8 ">
          <div class="max-w-screen-md p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Contact Information
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Feel free to reach out to me for potential collaborations, job
              opportunities, or networking:
              <br />
              <strong>Email:</strong>nethinduhansaka6113@gmail.com
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/nethinduhansaka-a752072b4"
                className="text-blue-500"
              >
                LinkedIn Profile
              </a>
              <div className="flex justify-center mt-3">
                <a
                  href="https://github.com/nethinduhansaka-dev"
                  className="text-white-700 mx-2"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nethinduhansaka-a752072b4"
                  className="text-blue-700 mx-2"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </p>
          </div>
        </card>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;

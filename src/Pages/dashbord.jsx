import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';


export default function Dashboard() {
    const [isMobile, setIsMobile] = useState(false);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000);
        };

        // Initial call to set initial state
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
            <div className="h-20"></div>

           

            
            <section ref={(el) => (sectionRefs.current[0] = el)} class="bg-[url('/src/assets/pro-img.jpg')]  bg-no-repeat bg-center  bg-cover   ">
                <div className="bg-clip-border p-6 border-y-white ...">
                <h1
                    style={{ fontSize: isMobile ? '50px' : '' }}
                    className=" p-12 ml-6  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
                    
                >
                    <span className='block'>I'M</span> <span >Nethindu Hansaka</span>
                </h1>
               

                <div
                    style={{
                        margin: isMobile ? '0' : '',
                        width: isMobile ? '95%' : ''
                    }}
                    className="w-3/4"
                >
                    <p
                        style={{
                            fontSize: isMobile ? '1rem' : '',
                            marginBottom: isMobile ? '0' : ''
                        }}
                        className="p-5 mb-10 font-mono text-black text-sm font-semibold  lg:text-base p-bg"
                    >
                        I am an undergraduate software engineer studying at the Open University of Sri Lanka. With a solid foundation in various programming languages and web development technologies, I am passionate about creating innovative solutions.<br /> I have hands-on experience with Python, JavaScript (including React and Vue), HTML, CSS (including Bootstrap and Tailwind), and C. I am eager to expand my skill set to include C++, and C# in the near future.<br />
                    </p>
                </div>
                </div>
            </section>

            <section ref={(el) => (sectionRefs.current[1] = el)}   >
                <div className="ml-9">
                    <div
                        style={{
                            margin: isMobile ? '0' : '',
                            width: isMobile ? '95%' : '',
                            padding: isMobile ? '5px' : '',
                        }}
                        className="content flex flex-col lg:flex-row py-2"
                    >
                        <figure className="mt-10 flex justify-center lg:justify-right pt-20 relative max-w-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <a href="projects">
                                <img className="rounded-lg" src="src/assets/Project/Bank_ms.jpg" alt="Project" />
                            </a>
                            <figcaption className="absolute px-4 text-lg text-white bottom-15">
                                <p>Click this image to go to my project page</p>
                            </figcaption>
                        </figure>

                        <div
                            style={{ fontSize: isMobile ? '1rem' : '' }}
                            className="w-full lg:w-2/4 mt-5 lg:mt-0 lg:ml-12 p-12 text-sm font-normal text-gray-500 lg:text-base dark:text-gray-400 item-body px-2"
                        >
                            <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
                                <svg
                                    className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 14"
                                >
                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                </svg>
                                <p>
                                    "The above picture shows a bank management system that I made as a mini project in the university using python. Click the image above to see my self project and university Mini project"
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

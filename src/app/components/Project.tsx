"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFirebase, SiAxios, SiJavascript, SiNpm, SiYarn } from "react-icons/si";
import Link from "next/link";

const projects = [
    {
        name: "Pievcore",
        description:
            "Pievcore is a learning forum app designed to share creative ideas, ask questions, and participate in polls. This open-source platform is accessible to students, professionals, and engineers alike. I contributed to the frontend using React, Next.js with TypeScript, styled with Tailwind CSS, and managed API integration using Axios.",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "Axios", icon: <SiAxios className="text-purple-600" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            { name: "NPM", icon: <SiNpm className="text-red-500" /> },
            { name: "Yarn", icon: <SiYarn className="text-sky-500" /> }
        ],
        link: "https://pievcore.com",
    },
    {
        name: "Pieduet",
        description:
            "Pieduet is an Online LMS Project that offers top-notch Embedded Automotive System Training by PiestSystems. The platform features user authentication, secure video content for enrolled users, and a payment gateway similar to Udemy. I developed the frontend using Next.js, Tailwind CSS, and Axios for proper API integration, and contributed to the backend with Node.js for authentication or video content protection using high quality video hosting platform and Firebase for secure social logins.",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
            { name: "Axios", icon: <SiAxios className="text-purple-600" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
            { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
            { name: "NPM", icon: <SiNpm className="text-red-500" /> },
            { name: "Yarn", icon: <SiYarn className="text-sky-500" /> }
        ],
        link: "https://pieduet.com",
    },
];

const Projects = () => {
    return (
        <section className="min-h-screen bg-black p-10">
            <motion.h1
                className="text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="bg-black shadow-md border rounded-xl p-6 border-l-4 border-blue-500 hover:scale-[1.02] transition"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-semibold text-green-500 mb-2">
                            {project.name}
                        </h2>
                        <p className="text-white mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-3 mb-4">
                            {project.technologies.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-2 bg-white border text-black px-3 py-1 text-sm rounded-md"
                                >
                                    {tech.icon}
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Visit Website
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

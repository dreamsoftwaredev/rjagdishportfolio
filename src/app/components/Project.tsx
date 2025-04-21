"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFirebase,
    SiAxios,
    SiJavascript,
    SiNpm,
    SiYarn,
    SiRedux,
} from "react-icons/si";
import Link from "next/link";
import ProjectDescription from "./ProjectDescription";

const projects = [
    {
        name: "Pieduet",
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
            { name: "Yarn", icon: <SiYarn className="text-sky-500" /> },
            { name: "Redux", icon: <SiRedux className="text-red-500" /> },
        ],
        link: "https://pieduet.com",
    },
];

const Projects = () => {
    return (
        <section className="w-full min-h-screen bg-black p-10">
            <motion.h1
                className="text-4xl font-bold text-center text-white mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My Projects
            </motion.h1>

            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    className="grid md:grid-cols-2 gap-10 items-start bg-zinc-900 p-8 rounded-2xl border-l-4 border-blue-500"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                    {/* Left Side - Description */}
                    <div>
                        <h2 className="text-3xl font-semibold text-green-300 mb-4">
                            {project.name}
                        </h2>
                        <div className="text-white text-base leading-relaxed mb-6">
                            <ProjectDescription />
                        </div>
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
                        >
                            Visit Website
                        </Link>
                    </div>

                    {/* Right Side - Technologies */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {project.technologies.map((tech, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-2 bg-white text-black px-3 py-2 rounded-lg shadow-sm"
                            >
                                <span className="text-xl">{tech.icon}</span>
                                <span className="text-sm font-medium">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default Projects;

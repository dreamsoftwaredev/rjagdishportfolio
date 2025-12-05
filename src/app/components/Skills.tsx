import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFirebase,
    SiJavascript,
    SiNpm,
    SiYarn,
    SiRedux,
    SiMongodb,
    SiAxios,
    SiExpress
} from 'react-icons/si';

const skillsData = [
    { name: "React", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-700 text-4xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> },
    { name: "Redux", icon: <SiRedux className="text-red-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-4xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300 text-4xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "Axios / REST API", icon: <SiAxios className="text-purple-600 text-4xl" /> },
    { name: "NPM", icon: <SiNpm className="text-red-500 text-4xl" /> },
    { name: "Yarn", icon: <SiYarn className="text-sky-500 text-4xl" /> },
];

const Skills = () => {
    return (
        <section className='min-h-screen bg-black p-10'>
            <h1 className='text-4xl text-center text-white font-bold mb-10'>Full-Stack MERN Skills</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>
                {skillsData.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg w-44 transform hover:scale-110 transition-transform duration-300"
                    >
                        {skill.icon}
                        <p className='text-white mt-2 font-medium text-center'>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;

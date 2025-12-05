"use client"; // Required for Framer Motion animations in Next.js App Router
import { motion } from "framer-motion";
import Image from "next/image";
import SocialIcons from "./SocialIcon";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-black text-white min-h-screen">

            {/* Left Content Section */}
            <motion.div
                className="flex-1 space-y-6 ml-5"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl font-bold leading-tight">
                    Hi, I&apos;m <span className="text-yellow-400">P Jagdish Rao</span> 👋
                </h1>
                <p className="text-lg max-w-lg">
                    I&apos;m a passionate
                    <span className="font-semibold text-green-500 p-1">Full-Stack MERN Developer</span>
                    skilled in building end-to-end modern web applications using MongoDB, Express.js, React.js, and Node.js.
                    I craft responsive UI using HTML, CSS, Tailwind CSS, JavaScript, TypeScript, and React.js with the Next.js framework.
                    On the backend, I build scalable APIs with Node.js & Express.js, integrate databases using MongoDB, and handle authentication, state management, and API communication with Redux and Axios.
                </p>
                <div className="flex gap-4">
                    <Link
                        href="/projects"
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition"                    >
                        View Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-500 transition"
                    >
                        Contact Me
                    </Link>
                    <Link
                        href="/attachment/P_Jagdish_Rao_CV_2026.pdf"
                        download="P_Jagdish_Rao_CV.pdf"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        Download CV
                    </Link>
                </div>
                {/* Social Icons Section */}
                <SocialIcons />
            </motion.div>

            {/* Right Photo Section */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <Image
                    src="/image/jagdishrao.jpg"
                    alt="Profile Picture"
                    width={350}
                    height={350}
                    className="rounded-full border-4 border-yellow-400 shadow-lg"
                />
            </motion.div>
        </section>
    );
}

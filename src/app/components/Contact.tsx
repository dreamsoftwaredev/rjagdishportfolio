"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import SocialIcons from "./SocialIcon";
import { collection } from "firebase/firestore";
import { db, addDoc, serverTimestamp } from "../utils/firebase.config";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: serverTimestamp(),
            });

            setSuccess("Message sent successfully");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Failed to send message:", error);
            setSuccess("Message not sent");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-black p-10 flex flex-col items-center text-white">
            <motion.h1
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Contact Me
            </motion.h1>

            {success && (
                <motion.div
                    className={`mb-4 text-center ${success.includes("Failed") ? "text-red-500" : "text-green-500"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {success}
                </motion.div>
            )}

            {/* Contact Form */}
            <motion.form
                onSubmit={handleSubmit}
                className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <label className="block text-lg font-semibold mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-lg font-semibold mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-lg font-semibold mb-2">Message</label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <motion.button
                    type="submit"
                    className={`w-full p-3 bg-blue-500 text-white rounded-md ${loading ? "opacity-50 cursor-not-allowed" : "hover-bg-blue-600"}`}
                    disabled={loading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {loading ? "Sending..." : "Send Message"}
                </motion.button>
            </motion.form>

            {/* Social Icons Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <SocialIcons />
            </motion.div>
        </section>
    );
};

export default Contact;

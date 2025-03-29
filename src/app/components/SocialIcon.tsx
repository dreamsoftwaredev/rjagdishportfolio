import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
    const socialLinks = [
        { icon: <FaFacebook />, url: "https://www.facebook.com/jagdish.rao.731/" },
        { icon: <FaInstagram />, url: "https://www.instagram.com/_jagdissh_/?hl=en" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/jagdish-rao-080931244/" },
        { icon: <FaEnvelope />, url: "mailto:myselfjagdish.r@gmail.com" },
        { icon: <FaWhatsapp />, url: "https://wa.me/7008763557" },
        { icon: <FaGithub />, url: "https://github.com/dreamsoftwaredev" }
    ];

    return (
        <div className="flex gap-4 mt-6">
            {socialLinks.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-yellow-400 transition"
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialIcons;

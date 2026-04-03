import Link from "next/link";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { profile } from "../data/portfolio";

const socialLinks = [
  { icon: <FaLinkedin />, label: "LinkedIn", url: profile.linkedin },
  { icon: <FaGithub />, label: "GitHub", url: profile.github },
  { icon: <FaEnvelope />, label: "Email", url: `mailto:${profile.email}` },
  { icon: <FaWhatsapp />, label: "WhatsApp", url: `https://wa.me/${profile.phone.replace(/\D/g, "")}` },
  { icon: <FaPhoneAlt />, label: "Call", url: `tel:${profile.phone.replace(/\s/g, "")}` },
];

export default function SocialIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-300/30 hover:bg-white/10 hover:text-white"
        >
          <span className="text-amber-300">{link.icon}</span>
          {link.label}
        </Link>
      ))}
    </div>
  );
}

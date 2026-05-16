import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/juanMercier", label: "GitHub profile" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/joao-mercier/", label: "LinkedIn profile" },
];

export default function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return <Link key={index} href={social.path} className={iconStyles} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                </Link>
            })}
        </div>
    );
}


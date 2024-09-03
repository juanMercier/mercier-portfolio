import Link from "next/link";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/juanMercier" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/joao-mercier/" },
];

export default function Socials({ containerStyles, iconStyles }) {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return <Link key={index} href={social.path} className={iconStyles}>
                    {social.icon}
                </Link>
            })}
        </div>
    );
}


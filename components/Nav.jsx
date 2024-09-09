"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    // {
    //     name: "services",
    //     path: "/services",
    // },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "projects",
        path: "/projects",
    },
]



export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <Link
                    href={link.path}
                    className={`${link.path === pathname && "text-accent border-b-2 border-accent"} 
                    capitalize font-medium hover:text-accent transition-all`}
                    key={index}>
                    {link.name}
                </Link>
            })}
        </nav>
    );
}
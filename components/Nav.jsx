"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/lib/navigation";



export default function Nav() {
    const pathname = usePathname();

    return (
        <nav className="flex gap-8">
            {navigationLinks.map((link, index) => {
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
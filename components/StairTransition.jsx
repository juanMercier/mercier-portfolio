"use client";

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import Stairs from "./Stairs";

export default function StairTransition() {
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (pathname !== "/") return;
        const seen = sessionStorage.getItem("introSeen");
        if (!seen) {
            setShow(true);
            sessionStorage.setItem("introSeen", "true");
        }
    }, []);

    if (!show) return null;

    return (
        <div>
            <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
                <Stairs />
            </div>
            <motion.div
                className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                }}
            />
        </div>
    );
}
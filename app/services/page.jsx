"use client";

import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: "01",
        title: "Full Stack Web Development",
        description:
            "End-to-end web applications built with Next.js and Node.js. Responsive frontends, REST APIs, database design, and seamless deployment — from MVP to production.",
        href: "/contact",
    },
    {
        num: "02",
        title: "Cloud Architecture & AWS",
        description:
            "Scalable, serverless infrastructure on AWS — Lambda, API Gateway, S3, RDS, and Amplify. Designed for reliability, security, and cost efficiency at any scale.",
        href: "/contact",
    },
    {
        num: "03",
        title: "API Design & Data Pipelines",
        description:
            "RESTful API development and ELT data pipelines in Python. Clean integrations between systems built to handle enterprise-grade data volumes and real-time processing.",
        href: "/contact",
    },
    {
        num: "04",
        title: "Enterprise & Low-Code Solutions",
        description:
            "Business process automation with Appian and low-code platforms. Rapid delivery of complex workflows without sacrificing scalability or maintainability.",
        href: "/contact",
    },
];

export default function Services() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-white/10 group-hover:text-accent transition-all duration-500">
                                    {service.num}
                                </div>
                                <Link
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white/5 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                >
                                    <BsArrowDownRight className="text-white group-hover:text-primary text-3xl transition-colors duration-300" />
                                </Link>
                            </div>
                            <h2 className="text-[28px] xl:text-[36px] font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                                {service.title}
                            </h2>
                            <p className="text-white/60">{service.description}</p>
                            <div className="border-b border-white/20 w-full" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

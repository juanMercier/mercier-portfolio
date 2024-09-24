"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Link from 'next/link';
import Image from 'next/image';

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import WorkSliderButtons from '@/components/WorkSliderButtons';

const projects = [
    {
        num: "01",
        category: "Project Management",
        title: "Project Management App",
        description: "Fullstack project and task web app fully scalable using the lastest technologies, with auth user system",
        stack: [
            { name: "Next.js" },
            { name: "AWS" },
            { name: "Node.js" },
            { name: "Postgres" },
        ],
        image: "/assets/pm/photoShowOff.png",
        live: "https://main.d1hr0wf5bahyjd.amplifyapp.com/",
        github: "https://github.com/juanMercier/proj-management",
    },
    {
        num: "02",
        category: "Lynxai",
        title: "Lynxai",
        description: "As a key member of the technical team at Lynxai, I played a crucial role in building and managing the fullstack infrastructure of our platform.",
        stack: [{ name: "React.js" }, { name: "AWS" }],
        image: "/assets/landingPageCrop.png",
        live: "https://lynxai.tech",
        github: "",
    },
    {
        num: "03",
        category: "Cifra Uke Mercier",
        title: "Cifra Uke Mercier",
        description: "Developed two websites with React.js and Express.js hosted in Firebase for a music teaching school",
        stack: [{ name: "React.js" }, { name: "Vite" }, { name: "Firebase" }],
        image: "/assets/project1.png",
        live: "https://cifra-uke-mercier.web.app/",
        github: "https://github.com/juanMercier/cifra-uke-mercier.git",
    },

]

export default function Projects() {
    const [project, setProject] = useState(projects[0])


    function handleSlideChange(swiper) {
        const currentIndex = swiper.activeIndex;

        setProject(projects[currentIndex]);
    }
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl leading-none font-extrabold text-white'>
                                {project.num}
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                                    {project.category}
                                </h2>
                                <p className='text-white/60'>{project.description}</p>
                                <ul className='flex gap-4'>
                                    {project.stack.map((item, index) => {
                                        return <li key={index} className='text-xl text-accent'>{item.name}{index !== project.stack.length - 1 && ","}</li>
                                    })}
                                </ul>
                                <div className="border border-white/20"></div>
                                {/*buttons*/}
                                <div className='flex items-center gap-4'>
                                    {/* Live project Button */}
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    {/* Github project Button */}
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                    <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Github Project</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className='w-full'>
                                        <div className="h-[460px] relative group justify-center items-center bg-pink-50/20 rounded-xl">
                                            {/* Overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                                            {/* Image  */}
                                            <div className='relative w-full h-full'>
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className='object-cover rounded-xl'
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                            })}
                            {/* swiper buttons */}
                            <WorkSliderButtons
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
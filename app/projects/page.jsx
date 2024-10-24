'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, useAnimation } from 'framer-motion'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const projects = [
    {
        num: "01",
        category: "UkeMercier Website",
        title: "UkeMercier Website",
        description: "Developed two websites with Next.js hosted in Vercel for a music teaching school",
        stack: [{ name: "Next.js" }, { name: "MongoDB" }, { name: "Vercel" }],
        image: "/assets/project1.png",
        live: "https://www.ukemercier.pt",
        github: "https://github.com/juanMercier/uke-mercier-website",
    },
    {
        num: "02",
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
        num: "03",
        category: "Lynxai",
        title: "Lynxai",
        description: "As a key member of the technical team at Lynxai, I played a crucial role in building and managing the fullstack infrastructure of our platform.",
        stack: [{ name: "React.js" }, { name: "AWS" }, { name: "Node" }, { name: "Serveless" }],
        image: "/assets/Image_Editor (2).png",
        live: "https://lynxai.tech",
        github: "",
    },
    {
        num: "04",
        category: "Recycular",
        title: "Recycular",
        description: "Developed a mobile app for a circular economy recycling brand where a user can scan a QR code to access all the perks of being a good samaritan",
        stack: [{ name: "React Native" }, { name: "AWS" }],
        image: "/assets/Image_Editor (1).png",
        live: "",
        github: "",
    },
]

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
      }}
      className="bg-white/5 rounded-xl p-6 flex flex-col lg:flex-row gap-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="lg:w-1/2">
        <div className="relative h-[300px] rounded-xl overflow-hidden group">
          <Image
            src={project.image}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            alt={`${project.category} project`}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex gap-4">
              <ProjectLink href={project.live} icon={BsArrowUpRight} tooltip="Live Project" />
              <ProjectLink href={project.github} icon={BsGithub} tooltip="GitHub Repository" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 flex flex-col justify-between">
        <div>
          <span className="text-6xl font-extrabold text-accent">{project.num}</span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">{project.category}</h2>
          <p className="text-white/60 mb-4">{project.description}</p>
          <ul className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((item, index) => (
              <li key={index} className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-4">
          <ProjectLink href={project.live} icon={BsArrowUpRight} tooltip="Live Project" />
          <ProjectLink href={project.github} icon={BsGithub} tooltip="GitHub Repository" />
        </div>
      </div>
    </motion.div>
  )
}

const ProjectLink = ({ href, icon: Icon, tooltip }) => (
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href} className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center group transition-colors duration-300 hover:bg-accent">
          <Icon className="text-white text-xl group-hover:text-primary transition-colors duration-300" />
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default function Projects() {
  return (
    <section className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-white text-center mb-16"
        >
          My Projects
        </motion.h1>
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
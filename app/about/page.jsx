"use client";

import { FaJs, FaAws, FaPython, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from '@/components/ui/tabs'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'


const about = {
    title: "About me",
    description: "Driven and innovative, always seeking to bridge technology with impactful solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Joao Mercier"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+351) 917 757 852"
        },
        {
            fieldName: "Experience",
            fieldValue: "3+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Portuguese"
        },
        {
            fieldName: "Email",
            fieldValue: "joaomercier@gmail.com"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Portuguese, Spanish"
        },
        {
            fieldName: "Interests",
            fieldValue: "Tech, Volunteer"
        },

    ]
}

const experience = {
    icon: "",
    title: "My Experience",
    description: "Years of hands-on expertise in dynamic and fast-paced environments.",
    items: [
        {
            company: "Freelancer",
            position: "Fullstack Developer",
            duration: "2024"
        },
        {
            company: "Lynxai",
            position: "Software Engineer",
            duration: "2022 - 2024"
        },
        {
            company: "Innowave",
            position: "Software Developer",
            duration: "2020 - 2022"
        },
        {
            company: "Recycular",
            position: "Frontend Developer",
            duration: "2019 - 2020"
        },
    ]
}

const education = {
    icon: "",
    title: "My Education",
    description: "Continuously expanding knowledge through formal education and industry certifications.",
    items: [
        {
            institution: "ISCTE",
            degree: "Computer Science",
            duration: "2016 - 2020",
        },
        {
            institution: "ISCTE",
            degree: "Business Management",
            duration: "2016 - 2020",
        },
        {
            institution: "Tallinn University",
            degree: "Erasmus+ in Computer Engineering",
            duration: "2019",
        },
        {
            institution: "AWS",
            degree: "Certified Developer",
            duration: "2020",
        },
        {
            institution: "Rumos",
            degree: "Practical Python Programming",
            duration: "2022",
        },
        {
            institution: "Appian",
            degree: "Certified Developer",
            duration: "2021",
        }
    ]
}

const skills = {
    title: "My skills",
    description: "Versatile problem-solver with a focus on efficiency and adaptability.",
    items: [
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <FaAws />,
            name: "AWS",
        },
        {
            icon: <FaPython />,
            name: "Python",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        }
    ]
}


export default function About() {
    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className='flex flex-col justify-center py-12 xl:px-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70px] w-full'>
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.items.map((item, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}> 
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{item.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{item.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return <li key={index} className='flex items-center justify-between gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            <span className='text-md text-end'>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.section>
    )
}
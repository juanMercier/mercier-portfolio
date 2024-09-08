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
    description: "Passionate software engineer with over three years of experience in backend development",
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

    ]
}

const experience = {
    icon: "",
    title: "My Experience",
    description: "Passionate software engineer with over three years of experience in backend development",
    items: [
        {
            company: "Innowave",
            position: "Software Developer",
            duration: "2020 - 2022"
        },
        {
            company: "Lynxai",
            position: "Software Engineer",
            duration: "2022 - 2024"
        },
        {
            company: "Recycular",
            position: "Frontend Developer",
            duration: "2019 - 2020"
        },
        {
            company: "Recycular",
            position: "Frontend Developer",
            duration: "2019 - 2020"
        },
        {
            company: "Recycular",
            position: "Frontend Developer",
            duration: "2019 - 2020"
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
    description: "Passionate software engineer with over three years of experience in backend development",
    items: [
        {
            institution: "ISCTE",
            position: "Bsc",
            duration: "2016 - 2020",
        },
        {
            institution: "ISCTE",
            position: "Bsc",
            duration: "2016 - 2020",
        },
        {
            institution: "ISCTE",
            position: "Bsc",
            duration: "2016 - 2020",
        },
        {
            institution: "ISCTE",
            position: "Bsc",
            duration: "2016 - 2020",
        },
        {
            institution: "ISCTE",
            position: "Bsc",
            duration: "2016 - 2020",
        }
    ]
}

const skills = {
    title: "My skills",
    description: "Passionate software engineer with over three years of experience in backend development",
    items: [
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        }
    ]
}


export default function About() {
    return (
        <motion.div initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className="fles flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70px] w-full'>
                        <TabsContent value="experience" className="w-full">
                            experience
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            education
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            skills
                        </TabsContent>
                        <TabsContent value="about" className="w-full">
                            about
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}
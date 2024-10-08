"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';

const info = [
    {
        icon: <FaPhoneAlt />,
        name: "Phone",
        value: "(+351) 917 757 852"
    },
    {
        icon: <FaEnvelope />,
        name: "Email",
        value: "joaomercier@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        name: "Location",
        value: "Lima, Peru"
    },
]

export default function Contact() {

    const [state, handleSubmit, reset] = useForm("xnnayrva");




    if (state.succeeded) {
        setTimeout(reset, 3000)
    }

    return (
        <motion.section initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* form */}
                    <div className='xl:w-[60%] order-2 xl:order-none'>
                        {state.succeeded
                            ? <motion.section className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                                <strong>Thanks for Contacting!</strong>
                                <p>Looking for forward for collaborating together</p>
                            </motion.section>
                            : <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={handleSubmit}>

                                <h3 className='text-4xl text-accent'>Let's work together</h3>
                                <p className='text-white/60'>
                                    Excited about the opportunity to collaborate and create impactful solutions together.
                                </p>
                                {/* input   */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Input type="firstname" name="firstname" placeholder="Firstname" />
                                    <Input type="lastname" name="lastname" placeholder="Lastname" />
                                    <Input type="email" name="email" placeholder="Email address" />
                                    <Input type="phone" name="phone" placeholder="Phone number" />
                                </div>
                                {/* select */}
                                <Select name="service">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Select a service</SelectLabel>
                                            <SelectItem value="webDev">Web Development</SelectItem>
                                            <SelectItem value="backend">Backend Infrastructure</SelectItem>
                                            <SelectItem value="uiux">UI/UX Design</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {/* textArea */}
                                <Textarea className="h-[200px]" name="message" placeholder="Type your message here" />
                                <Button size="md" className="max-w-40" type="submit" disabled={state.submitting}>
                                    Send message
                                </Button>

                            </form>
                        }
                    </div>
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return (
                                    <li key={index} className='flex items-center gap-6'>
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center'>
                                            <div className='text-[28px]'>{item.icon}</div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-white/60'>{item.name}</p>
                                            <h3 className='text-xl'>{item.value}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
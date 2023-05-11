"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs'


const projects = [
    {
        name: 'Fittnet Gyms',
        description: 'Fittnet is an online commercial network that allows its members access to any of the gyms in the network, through a monthly subscription. ',
        image: '/fittnet.jpeg',
        github: 'https://github.com/LuisLescano988/PF-FittNet-G11-v1.2/',
        link: 'https://fittnet-g11.vercel.app/'
    },
    {
        name: 'Fittnet Gyms',
        description: 'Fittnet is an online commercial network that allows its members access to any of the gyms in the network, through a monthly subscription. ',
        image: '/fittnet.jpeg',
        github: 'https://github.com/LuisLescano988/PF-FittNet-G11-v1.2/',
        link: 'https://fittnet-g11.vercel.app/'
    },
    {
        name: 'Fittnet Gyms',
        description: 'Fittnet is an online commercial network that allows its members access to any of the gyms in the network, through a monthly subscription. ',
        image: '/fittnet.jpeg',
        github: 'https://github.com/LuisLescano988/PF-FittNet-G11-v1.2/',
        link: 'https://fittnet-g11.vercel.app/'
    },
]

const Projects = () => {
    return (
        <section id='projects' className='md:mt-16'>
            <h1 className='text-center font-bold text-4xl mb-10'>
                Projects
                <hr className="w-16 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-12'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <div className='flex flex-col md:flex-row md:space-x-10'>
                                <div className='md:w-1/2'>
                                    <Link href={project.link} target='_blank'>
                                        <Image
                                            src={project.image}
                                            alt=''
                                            width={400}
                                            height={400}
                                            className='rounded-xl shadow-xl hover:opacity-70' />
                                    </Link>
                                </div>
                                <div className='md:w-1/2 flex flex-col justify-between'>
                                    <h2 className='text-4xl mb-4'>
                                        {project.name}
                                    </h2>
                                    <p className='text-xl'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-row w-full mt-4 align-bottom space-x-3'>
                                        <Link href={project.github} target='_blank'>
                                            <BsGithub size={35}
                                                className='hover:translate-y-2 transition-transform cursor-pointer' />
                                        </Link>
                                        <Link href={project.link} target='_blank'>
                                            <BsArrowUpRightSquare size={35}
                                                className='hover:translate-y-2 transition-transform cursor-pointer' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </section>
    )
}

export default Projects
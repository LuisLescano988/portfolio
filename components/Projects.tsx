"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import { RiArrowUpCircleLine } from 'react-icons/ri'


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
        <section id='projects' className='mb-40 md:mt-20'>
            <br />
            <Link className='flex flex-col items-left text-5xl md:pt-16 pt-6 mt-0'
                to='home'                
                activeClass="active"                
                spy={true}
                smooth={true}
                offset={1}
                duration={700}>
                <RiArrowUpCircleLine                
                />
            </Link>
            <h1 className='text-center font-bold text-4xl mb-10'>
                Projects
            </h1>
            <div className='flex flex-col space-y-12'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <div className='flex flex-col md:flex-row md:space-x-10'>
                                <div className='md:w-1/2'>
                                    <Image
                                    src={project.image}
                                    alt=''
                                    width={400}
                                    height={400}
                                    className='rounded-xl shadow-xl hover:opacity-70'/>
                                </div>
                                <div className='md:w-1/2'>
                                    <h2 className='text-4xl mb-4'>
                                        {project.name}
                                    </h2>
                                    <p className='text-xl'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>)
                })}
            </div>
        </section>
    )
}

export default Projects
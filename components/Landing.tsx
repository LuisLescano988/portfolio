"use client"
import React from 'react'
import Image from 'next/image'
import { RiArrowDownCircleLine } from 'react-icons/ri'
import { Link } from 'react-scroll'


const Landing = () => {
    return (
        <section id='home'>
            <div className='flex flex-col text-center items-center justify-center  md:py-40 pt-28 pb-10 md:flex-row md:space-x-4 md:text-left'>
                <div className='md:w-1/3 md:mt-3'>
                    <Image className='rounded-full' src='/headshot.png' priority={true} alt='' width={290} height={290} />
                </div>
                <div className="md:mt-2 md:w-3/5 py-20">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">Hi, I&#39;m Luis Lescano!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-bold text-teal-600">
                            Front End Oriented Full Stack developer{" "}
                        </span>
                        Writing code to find simple solutions for complex problems.
                    </p>
                </div>
            </div>
            <Link className='flex flex-col hover:translate-y-1 transition-transform cursor-pointer items-left text-5xl mt-0 pb-20'
                to='projects'                
                activeClass="active"                
                spy={true}
                smooth={true}
                offset={1}
                duration={700}>
                <RiArrowDownCircleLine                
                />
            </Link>
        </section>
    )
}

export default Landing
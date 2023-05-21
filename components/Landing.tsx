"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'


const Landing = () => {
    return (
        <section id='home'>
            <div className='flex flex-col dark:text-stone-400 text-center items-center justify-center  md:py-36 pt-28 md:mb-36 md:flex-row md:space-x-4 md:text-left'>
                <div className='md:w-1/3 md:mt-3'>
                    <Image className='rounded-full' src='/headshot.jpg' priority={true} alt='' width={290} height={290} />
                </div>
                <div className="md:mt-2 md:w-3/5 py-20">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">Hi, I&#39;m Luis Lescano!</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I&#39;m a{" "}
                        <span className="font-bold text-teal-600">
                            Full Stack developer{" "}
                        </span>
                        Writing code to find simple solutions for complex problems.
                    </p>
                </div>
            </div>            
        </section>
    )
}

export default Landing
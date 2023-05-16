"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { useTheme } from 'next-themes'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'About',
        page: 'about',
    },
    {
        label: 'Projects',
        page: 'projects',
    },
    {
        label: 'Home',
        page: 'home',
    },
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)


    return (
        <header className='w-full px-20 shadow fixed z-50 dark:bg-[#121212] bg-white dark:text-stone-400'>
            <div className='md:items-center md:flex'>
                <div className='flex items-center justify-between px-6 py-0'>
                    <div className='md:py-5 md:block'>
                        <h2 className='text-2xl font-[1000]'>Luigi Dev</h2>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setNavbar(!navbar)}>
                            {navbar ? (<IoMdClose size={30} />) : (<IoMdMenu size={30} />)}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 px-6 pb-4 justify-self-center mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                    }`}>
                    <div className='items-center md:space-x-1 md:flex md:justify-end text-xl'>
                        {NAV_ITEMS.map((item, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    to={item.page}
                                    className={'block max-w-fit pr-3 lg:inline-block cursor-pointer hover:text-neutral-600'}
                                    activeClass='active'
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}
                                >{item.label}</Link>
                            )
                        }).reverse()}
                        {
                            <div>
                                <button
                                    onClick={() => setTheme("dark")}
                                    className='bg-slate-600 text-neutral-200 p-2 rounded-xl dark:invisible'
                                >
                                    <RiMoonLine size={25} />
                                </button>                                
                                <button
                                    onClick={() => setTheme("light")}
                                    className='bg-slate-200 text-neutral-600 p-2 rounded-xl invisible dark:visible'
                                    >
                                    <RiSunLine size={25} />

                                </button>                                    
                            </div>
                        }
                        {/* {currentTheme === 'dark'&&
                                <button
                                    onClick={() =>  setTheme("light") }
                                    className='bg-slate-100 text-neutral-900 p-2 rounded-xl'
                                >
                                    <RiSunLine size={25} />
                                    
                                </button>
                            } */}
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Navbar
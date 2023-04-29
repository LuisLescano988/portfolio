"use client"
import React, { useState } from 'react'
import { Link } from 'react-scroll/modules'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdMenu, IoMdClose } from 'react-icons/io'

interface NavItem {
    label: string;
    page: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        page: 'home',
    },
    {
        label: 'About',
        page: 'about',
    },
    {
        label: 'Projects',
        page: 'projects',
    }
]

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)

    return (
        <header className='w-full mx-auto px-4 ligth:bg-white shadow fixed top-0 z-50 dark:bg-slate-900 dark:border-b dark:border-stone-600'>
            <div className='justify-between md:items-center md:flex'>
                <div className='flex items-center justify-between py-3'>
                    <div className='md:py-5 md:block'>
                        <h2 className='text-2xl font-extrabold'>Luis Lescano</h2>
                    </div>
                    <div className='md:hidden'>
                        <button>
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                    navbar?"block":"hidden"
                    }`}>
                    <div className='md:flex md:space-x-7 text-xl'>
                        {NAV_ITEMS.map((item, idx) => {
                            return <a key={idx}>{item.label}</a>
                        })}
                        {currentTheme === 'dark' ? (
                            <button
                                onClick={() => { setTheme('ligth') }}
                                className='bg-slate-100 p-2 rounded-xl'>
                                <RiSunLine size={30} color='black' />
                            </button>
                        ) : (
                            <button
                                onClick={() => { setTheme('dark') }}
                                className='bg-slate-100 p-2 rounded-xl'>
                                <RiMoonFill size={30} />
                            </button>
                        )
                        }
                    </div>
                </div>
            </div>
        </header>
    )

}

export default Navbar
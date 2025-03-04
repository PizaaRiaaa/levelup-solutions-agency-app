import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../assets/images/level.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import profileImage from '../../assets/images/profile.png'

export const Navigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="max-w-screen h-fit z-50 bg-zinc-300 overflow-x-hidden font-poppins">
            <nav className="bg-gray-900 fixed px-2 sm:h-auto sm:w-full w-screen z-20 lef-0 right-0 top-0 border-b border-gray-400">
                {/* desktop nav */}
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto sm:p-4 pb-2">
                    <Link to="/about" className="flex flex-row gap-6 items-center">
                        <img
                            src={Icon}
                            alt="Icon"
                            className="hidden sm:block sm:w-[35px] sm:-h-[35px]"
                        />
                        <span className="ml-2 mt-2 sm:mt-0 text-white font-semibold text-xl">
                            LevelUp Solutions
                        </span>
                    </Link>

                    {/* mobile menu */}
                    <div className="flex">
                        <ul className="sm:flex justify-center hidden">
                            <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex text-sm">
                        <button
                            type="button"
                            className="bg-blue-600 px-2 py-2 text-white hidden sm:block rounded-xl mr-2 hover:bg-blue-500 hover:cursor-pointer"
                        >
                            Get Started
                        </button>
                        <button
                            type="button"
                            className="hidden sm:block text-white border font-medium rounded-lg ml-2 text-sm px-4 hover:bg-blue-300/10 hover:cursor-pointer mr-4"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setOpen(!open)}
                            className="block sm:hidden"
                        >
                            <GiHamburgerMenu className="mt-2 mr-2 text-white/70 w-8 h-auto" />
                        </button>
                    </div>
                </div>
                {/* desktop nav end */}
                <div
                    className={`transition-all duration-500 delay-300 ${open ? 'h-[19rem] opacity-100' : 'h-0 opacity-0'
                        } overflow-hidden`}
                >
                    <ul>
                        <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="p-2 text-white hover:text-blue-400 hover:cursor-pointer">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    {/* profile section */}
                    <div className="bg-gray-200/50 h-[1px] w-full mt-2">
                        <div className="flex cursor-pointer">
                            <img
                                src={profileImage}
                                alt="profileImage"
                                className="w-14 ml-8 mt-4 flex"
                            />
                            <p className="my-auto ml-4 text-white font-semibold">
                                Sam
                            </p>
                            <p className="my-auto ml-2 text-white font-semibold">
                                Smith
                            </p>
                        </div>
                        <p className="my-auto ml-[103px] mt-[-27px] text-xs font-light text-gray-200/60">
                            samsmith@gmail.com
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <div className="mt-[6%] mr-4">
                            <button className="text-white font-semibold border rounded-xl py-2 px-4 hover:bg-gray-100/20">
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <p className="mt-[25px] text-gray-100/30 text-sm">
                            All Rights Reserved - LevelUP Solutions
                        </p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

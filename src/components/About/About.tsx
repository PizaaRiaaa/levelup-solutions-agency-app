import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../../assets/images/Team/team1.png"
import image2 from "../../assets/images/Team/teamMember1.jpeg"
import image3 from "../../assets/images/Team/team2.jpg"
import { BiNavigation, BiMap, BiPhone, BiChevronDown } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";

export const About = () => {
    const [showDirections, setShowDirections] = useState(false)
    const [activeTab, setActiveTab] = useState("main")

    const locations = [
        {
            id: "main",
            name: "Main Office",
            address: "123 Main Street, Quezon City, Metro Manila",
            phone: "+63 2 8123 4567",
            email: "levelup@agency.solutions",
            hours: "Monday - Friday: 9AM - 6PM",
            coordinates: "14.6760, 121.0437",
        },
        {
            id: "branch",
            name: "Branch Office",
            address: "456 Secondary Road, Quezon City, Metro Manila",
            phone: "+63 2 8765 4321",
            email: "branch@example.com",
            hours: "Monday - Saturday: 10AM - 7PM",
            coordinates: "14.6500, 121.0500",
        },
    ]
    return (
        <>
            <section className="font-poppins h-screen overflow-hidden pt-20Sarah pb-12 lg:pt-[120px] lg:pb-[90px] bg-white dark:bg-dark">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4 hover:scale-105 transition duration-150 delay-150">
                                        <motion.img
                                            variants={{
                                                visible: { opacity: 1, y: 0 },
                                                hidden: { opacity: 0, y: 10 }
                                            }}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                delay: 0.5,
                                                transition: 0.25,
                                            }}
                                            src={image1}
                                            alt=""
                                            className="w-full rounded-2xl"
                                        />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <motion.img
                                            variants={{
                                                visible: { opacity: 1, y: 0 },
                                                hidden: { opacity: 0, y: -10 }
                                            }}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                delay: 0.8,
                                                transition: 0.28,
                                            }}
                                            src={image2}
                                            alt=""
                                            className="w-full rounded-2xl hover:scale-105"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <motion.div
                                        variants={{
                                            visible: { opacity: 1, x: 0 },
                                            hidden: { opacity: 0, x: 10 }
                                        }}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{
                                            delay: 0.12,
                                            transition: 0.30,
                                        }}
                                        className="relative z-10 my-4">
                                        <img
                                            src={image3}
                                            alt=""
                                            className="w-full rounded-2xl hover:scale-105"
                                        />
                                        <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            <svg
                                                width={134}
                                                height={106}
                                                viewBox="0 0 134 106"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="1.66667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 31 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3334"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3334 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 103 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy={104}
                                                    r="1.66667"
                                                    transform="rotate(-90 132 104)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="89.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 89.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="89.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 89.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="74.6673"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 74.6673)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="31.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 31.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="74.6668"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 74.6668)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="30.9998"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 30.9998)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="60.0003"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 60.0003)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="16.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 16.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="1.66667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 1.66667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="16.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 16.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={31}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 31 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="45.3333"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 45.3333)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="45.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 45.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="60.3333"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 60.3333 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="88.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 88.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="117.667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 117.667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx="74.6667"
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 74.6667 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={103}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 103 1.66683)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="45.3338"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 45.3338)"
                                                    fill="#3056D3"
                                                />
                                                <circle
                                                    cx={132}
                                                    cy="1.66683"
                                                    r="1.66667"
                                                    transform="rotate(-90 132 1.66683)"
                                                    fill="#3056D3"
                                                />
                                            </svg>
                                        </span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            variants={{
                                initial: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 }
                            }}
                            initial="hidden"
                            animate="initial"
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg uppercase font-bold  text-violet-700/70">
                                    Who are we?
                                </span>
                                <motion.h2
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: 10 }
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.15
                                    }}
                                    className="mb-5 text-3xl text-transparent bg-clip-text font-bold bg-gradient-to-r from-violet-500 to-teal-600 sm:text-[40px]/[48px]">
                                    Empowering Businesses with Smart Digital Solutions
                                </motion.h2>
                                <p
                                    className="mb-5 text-base text-zinc-600 dark:text-dark-6">
                                    We help businesses scale by delivering cutting-edge digital solutions tailored to their needs. From seamless user experiences to data-driven strategies, we ensure your brand stays ahead in a competitive market.
                                </p>
                                <p className="mb-8 text-base text-zinc-600 dark:text-dark-6">
                                    Whether you need a high-performing website, an intuitive mobile app, or a full-scale digital transformation, our expert team is here to bring your vision to life. Let's build something remarkable together.
                                </p>
                                <a
                                    href="_blank"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-gradient-to-l from-blue-500 to-violet-600 hover:bg-opacity-90 hover:scale-105 duration-105"
                                >
                                    Get Started
                                </a>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-900 text-white my-52">
                <div className="container mx-auto flex flex-col items-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="text-4xl font-bold sm:text-5xl mb-4">Meet Our Team</motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="max-w-2xl text-gray-400 mb-8">
                        Our team consists of passionate professionals dedicated to delivering exceptional digital solutions.
                        With expertise in design, development, and strategy, we transform ideas into reality.
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-10">
                        {[
                            { name: "Alice Johnson", role: "Lead Designer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Mark Thompson", role: "Software Engineer", img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Mike Lee", role: "Project Manager", img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "David Brown", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Emily Davis", role: "Marketing Specialist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                            { name: "Michael Smith", role: "Full Stack Developer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
                        ].map((member, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.25 }}
                                key={index} className="flex flex-col items-center text-center w-36">
                                <img
                                    alt={member.name}
                                    className="w-24 h-24 mb-4 rounded-full shadow-lg object-cover aspect-square"
                                    src={member.img}
                                />
                                <p className="text-lg font-semibold">{member.name}</p>
                                <p className="text-gray-400">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50 font-poppins">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">WHERE TO FIND US</motion.h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Visit our office in Quezon City, Metro Manila. We're conveniently located and ready to assist you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-1 space-y-6">
                            {/* Tabs */}
                            <div className="w-full">
                                <div className="w-full grid grid-cols-2 rounded-lg overflow-hidden border border-gray-200">
                                    <button
                                        onClick={() => setActiveTab("main")}
                                        className={`py-2.5 text-sm font-medium transition-colors ${activeTab === "main" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        Main Office
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("branch")}
                                        className={`py-2.5 text-sm font-medium transition-colors ${activeTab === "branch" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                    >
                                        Branch Office
                                    </button>
                                </div>

                                {locations.map((location) => (
                                    <div key={location.id} className={`space-y-6 ${activeTab === location.id ? "block" : "hidden"}`}>
                                        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
                                            <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
                                            <ul className="space-y-4">
                                                <li className="flex items-start">
                                                    <BiMap className="h-5 w-5 text-zinc-600 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span>{location.address}</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BiPhone className="h-5 w-5 text-zinc-600 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span>{location.phone}</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BsMailbox className="h-5 w-5 text-zinc-600 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span>{location.email}</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <CgLock className="h-5 w-5 text-blue-zinc mr-3 mt-0.5 flex-shrink-0" />
                                                    <span>{location.hours}</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BiNavigation className="h-5 w-5 text-zinc-600 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span>{location.coordinates}</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="space-y-3">
                                            <button
                                                className="w-full bg-zinc-900 hover:bg-zinc-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors flex items-center justify-center"
                                                onClick={() => setShowDirections(!showDirections)}
                                            >
                                                Get Directions
                                                <BiChevronDown
                                                    className={`ml-2 h-4 w-4 transition-transform ${showDirections ? "rotate-180" : ""}`}
                                                />
                                            </button>

                                            <a
                                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-md border border-gray-300 transition-colors flex items-center justify-center"
                                            >
                                                Open in Google Maps
                                                <FaExternalLinkAlt className="ml-2 h-4 w-4" />
                                            </a>
                                        </div>

                                        {showDirections && (
                                            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                                <h4 className="font-medium mb-2">Directions:</h4>
                                                <ol className="list-decimal pl-5 space-y-2 text-sm">
                                                    <li>Take the MRT to Quezon Avenue Station</li>
                                                    <li>Exit towards the east side of EDSA</li>
                                                    <li>Take a tricycle or walk approximately 10 minutes</li>
                                                    <li>Look for our building with the company logo</li>
                                                </ol>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:col-span-2 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white h-[600px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123504.21022902841!2d120.97978912938885!3d14.683921220660952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ba0942ef7375%3A0x4a9a32d9fe083d40!2sQuezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1741012668040!5m2!1sen!2sph"
                                className="w-full h-full"
                                title="Our location in Quezon City, Metro Manila"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm">
                            Having trouble finding us? Call us at <span className="font-medium text-blue-600">+63 2 8123 4567</span> for
                            assistance.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

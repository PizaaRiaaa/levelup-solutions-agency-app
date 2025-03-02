import Heroimage from '../../assets/images/heroImage.jpg'
import Stars from '../../assets/images/stars.png'
import { motion } from 'framer-motion'

const SingleImage = ({ href, imgSrc }: { href: string; imgSrc: string }) => {
    return (
        <a href={href} className="flex w-full items-center justify-center">
            <img src={imgSrc} alt="brand" className="h-10 w-full" />
        </a>
    )
}

export const HeroSection = () => {
    return (
        <div className="font-poppins w-full flex justify-center overflow-x-hidden">
            <div className="relative bg-[#e0e0e0e0] w-full pb-[110px] pt-[120px] dark:bg-dark lg:pt-[150px]">
                <div className="container mx-auto px-10">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content font-medium">
                                <motion.div
                                    variants={{
                                        visible: { opacity: 1, y: 0 },
                                        hidden: { opacity: 0, y: 75 },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <h1 className="mb-5 sm:text-8xl text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600 !leading-[1.208] sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                        Here you can
                                        <br />
                                        <span className="sm:text-8xl text-6xl">
                                            Level Up Your Business
                                        </span>
                                    </h1>
                                    <p className="mb-8 max-w-[480px] text-sm sm:text-base text-body-color dark:text-dark-6">
                                        Welcome and thank you for taking your
                                        time to take a look at our solutions. We
                                        can ensure you that we will take your
                                        Business to the next level, so hang in
                                        tight and lets Level UP!
                                    </p>
                                </motion.div>
                                <motion.div
                                    variants={{
                                        visible: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -75 },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                >
                                    <ul className="flex flex-row gap-2 items-center">
                                        <li>
                                            <a
                                                href="/#"
                                                className="bg-blue-400 hover:bg-blue-400/80 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-xs sm:text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                                            >
                                                Get Started
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/#"
                                                className="bg-blue-200 hover:bg-blue-400/80 ml-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-xs sm:text-base font-medium text-black hover:bg-blue-dark lg:px-7"
                                            >
                                                Take a look
                                            </a>
                                        </li>
                                    </ul>
                                </motion.div>

                                <motion.div
                                    variants={{
                                        visible: { opacity: 1 },
                                        hidden: { opacity: 0 },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.8, delay: 0.25 }}
                                    className="clients pt-16"
                                >
                                    <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                                        Some Of Our Clients
                                        <span className="ml-3 inline-block h-px w-8 bg-body-color"></span>
                                    </h6>

                                    <div className="flex items-center space-x-4">
                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                                        />

                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/graygrids.svg"
                                        />

                                        <SingleImage
                                            href="#"
                                            imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/uideck.svg"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <motion.div
                                    variants={{
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            filter: 'blur(0px',
                                        },
                                        hidden: {
                                            opacity: 0,
                                            x: 75,
                                            filter: 'blur(5px)',
                                        },
                                    }}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="relative z-10 inline-block pt-11 lg:pt-0 mt-6"
                                >
                                    <img
                                        src={Heroimage}
                                        alt="hero"
                                        className="max-w-full lg:ml-auto rounded-l-[20%] rounded-br-[6%]"
                                    />
                                    <img
                                        src={Stars}
                                        alt="stars"
                                        className="z-20 w-28 absolute mt-[-103%] opacity-70 hover:opacity-100 right-[-8%]"
                                    />
                                    <span className="absolute -bottom-8 -left-8 z-[-1]">
                                        <svg
                                            width="93"
                                            height="93"
                                            viewBox="0 0 93 93"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="2.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="2.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="24.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="46.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="68.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="2.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="24.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="46.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="68.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                            <circle
                                                cx="90.5"
                                                cy="90.5"
                                                r="2.5"
                                                fill="#3056D3"
                                            />
                                        </svg>
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

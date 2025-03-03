import { motion } from "framer-motion";

export const CallToAction = () => {
    return (
        <section className="py-20 lg:py-[120px] bg-gray-100 mt[-10]">
            <div className="container mx-auto ">
                <div className="relative z-10 overflow-hidden bg-gradient-to-r from-teal-700 to-blue-600  rounded bg-primary py-12 px-8 md:p-[70px]">
                    <div className="flex flex-wrap items-center  -mx-4">
                        <motion.div
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="w-full px-4 lg:w-1/2 ">
                            <span className="block mb-4 text-base font-medium text-white">
                                Find the perfect team to realise your business Goals!
                            </span>
                            <h2 className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                                <div className="flex flex-col gap-1">
                                    <span>Get started Today and let us </span>
                                    <span>Take Care of the <span className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-emerald-400">Rest!</span></span>
                                </div>
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: -25 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="w-full px-4 sm:w-1/2">
                            <div className="flex text-center sm:flex-wrap sm:justify-end">
                                <a
                                    href="_blank"
                                    className="inline-flex py-3 my-1 mr-4 text-base text-white font-medium transition bg-blue-300/50 hover:bg-blue-300/70 rounded-md hover:bg-shadow-1 text-primary px-7"
                                >
                                    Get Pro Version
                                </a>
                                <a
                                    href="_blank"
                                    className="inline-flex py-3 my-1 text-base font-medium text-white bg-green-500 hover:bg-green-400 transition rounded-md bg-secondary px-7 hover:bg-opacity-90"
                                >
                                    Start Free Trial
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div>
                        <span className="absolute top-0 left-0 z-[-1]">
                            <svg
                                width="189"
                                height="162"
                                viewBox="0 0 189 162"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse
                                    cx="16"
                                    cy="-16.5"
                                    rx="173"
                                    ry="178.5"
                                    transform="rotate(180 16 -16.5)"
                                    fill="url(#paint0_linear)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-157"
                                        y1="-107.754"
                                        x2="98.5011"
                                        y2="-106.425"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" stop-opacity="0.07" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                        <span className="absolute bottom-0 right-0 z-[-1]">
                            <svg
                                width="191"
                                height="208"
                                viewBox="0 0 191 208"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse
                                    cx="173"
                                    cy="178.5"
                                    rx="173"
                                    ry="178.5"
                                    fill="url(#paint0_linear)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="-3.27832e-05"
                                        y1="87.2457"
                                        x2="255.501"
                                        y2="88.5747"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stop-color="white" stop-opacity="0.07" />
                                        <stop offset="1" stop-color="white" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </section >
    )
}

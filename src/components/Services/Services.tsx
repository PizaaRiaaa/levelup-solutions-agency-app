import { motion } from "framer-motion";

import image1 from "../../assets/images/Services/1.svg";
import image2 from "../../assets/images/Services/2.svg";
import image3 from "../../assets/images/Services/3.svg";
import image4 from "../../assets/images/Services/4.svg";

export const Services = () => {
    return (
        <div className="font-poppins mt-[490px] sm:mt-0">
            <div className="pb-16">
                <section className="max-w-8xl h-screen w-screen flex items-center justify-center font-poppins mx-auto container bg-white pt-16">
                    <div>
                        <motion.div
                            variants={{
                                initial: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 50 }
                            }}
                            initial="hidden"
                            animate="initial"
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="flex items-center flex-col px-4">
                            <p className="focus:outline-none uppercase text-center text-sm text-gray-600 leading-4">Start today</p>
                            <h1 className="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-600 lg:w-5/12 md:w-9/12 pt-4">Our Services that Help you Grow</h1>
                            <p className="text-2xl font-medium tracking-wider w-1/2 text-center text-gray-900">Level UP your business and Maximize your Company’s Income and Productivity</p>
                        </motion.div>
                        <div aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                            <div aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 grayscale rounded w-12 h-12 flex items-center justify-center mt-2 mr-3">
                                        <img src={image1} alt="drawer" />
                                    </div>
                                </div>
                                <motion.div
                                    variants={{
                                        initial: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -50 }
                                    }}
                                    initial="hidden"
                                    animate="initial"
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="w-10/12">
                                    <h2 className="focus:outline-none text-sm font-semibold leading-tight text-gray-800">Always have a clear overview</h2>
                                    <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Always have a clear overview of what's going on with your investments and how well everything is performing. We Deliver a detailed performance report on Everything Important.</p>
                                </motion.div>
                            </div>
                            <div aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 grayscale rounded w-12 h-12 flex items-center justify-center mt-2 mr-3">
                                        <img src={image2} alt="check" />
                                    </div>
                                </div>
                                <motion.div
                                    variants={{
                                        initial: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -50 }
                                    }}
                                    initial="hidden"
                                    animate="initial"
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="w-10/12">
                                    <h2 className="focus:outline-none text-sm font-semibold leading-tight text-gray-800">Always catch a rising-trend</h2>
                                    <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2">We know how important hitting your monthly marks is, this determines then the flow of work and the overall performance of the company. This is why we use Advanced algorithms and state of the art Technologies to help you achieve this.</p>
                                </motion.div>
                            </div>
                            <div aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 grayscale rounded w-12 h-12 flex items-center justify-center mt-2 mr-3">
                                        <img src={image3} alt="html tag" />
                                    </div>
                                </div>
                                <motion.div
                                    variants={{
                                        initial: { opacity: 1, x: 0 },
                                        hidden: { opacity: 0, x: -50 }
                                    }}
                                    initial="hidden"
                                    animate="initial"
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="w-10/12">

                                    <h2 className="focus:outline-none text-sm font-semibold leading-tight text-gray-800">Hit your Monthly mark! every month</h2>
                                    <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Our solutions are always personalized and tailored depending on your needs. This is why all of our clients trust us so much and 70% stay with us for as long as 5+ Years.</p>
                                </motion.div>
                            </div>
                            <div aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                                <div className="w-20 h-20 relative mr-5">
                                    <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                                    <div className="absolute text-white bottom-0 left-0 grayscale rounded w-12 h-12 flex items-center justify-center mt-2 mr-3">
                                        <img src={image4} alt="monitor" />
                                    </div>
                                </div>
                                <div className="w-10/12">
                                    <h2 className="focus:outline-none text-sm font-semibold leading-tight text-gray-800">Personalized and always on track!</h2>
                                    <p className="focus:outline-none text-base text-gray-600 leading-normal pt-2">Our solutions are always personalized and tailored depending on your needs. This is why all of our clients trust us so much and 70% stay with us for as long as 5+ Years.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="xl:px-20 px-6 py-20 mt-[360px] sm:mt-0 bg-gray-100 w-screen">
                <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    More Than 10 Years We Provide Service <br className="md:block hidden" />
                    in Real State Industry
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image2" className="w-full xl:h-full h-96 object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-fill absolute z-0" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.22 }}
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-regular text-gray-800">20K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Companies Helped</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-regular text-gray-800">8K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Companies Purchase Again</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.30 }}
                        className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-regular text-gray-800">15K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Average Performance Increase</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

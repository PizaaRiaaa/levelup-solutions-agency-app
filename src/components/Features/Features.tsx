import { motion } from 'framer-motion'
import logo1 from '../../assets/images/Features/f1.png'
import logo2 from '../../assets/images/Features/f2.png'
import logo3 from '../../assets/images/Features/f3.png'
import logo4 from '../../assets/images/Features/f4.png'
import logo5 from '../../assets/images/Features/f5.png'
import logo6 from '../../assets/images/Features/f6.png'

import image1 from '../../assets/images/Features/fb11.png'
import image2 from '../../assets/images/Features/fb22.png'

export const Features = () => {
    return (
        <div className="max-w-screen overflow-x-hidden font-poppins">
            {/* features section */}
            <section className="0 text-black">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
                            Empowering Business
                        </h2>
                        <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
                            Growth Through Advanced Technology Solutions,
                            Analytics and Professionaly Trained Personnel
                        </p>
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.22 }}
                            >
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                                    Innovation Begins Here
                                </h3>
                                <p className="mt-3 text-lg dark:text-gray-600">
                                    Unleash business growth with advanced
                                    technology solutions, optimizing
                                    operations, integrating innovative
                                    technologies, and receiving personalized
                                    support.
                                </p>
                            </motion.div>
                            <div className="mt-12 space-y-12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.25,
                                    }}
                                    className="flex"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                            <img src={logo1} alt="logo1" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
                                            Advanced Algorithmic Solutions
                                        </h4>
                                        <p className="mt-2 dark:text-gray-600">
                                            Our advanced algorithms optimize
                                            your operations, boosting
                                            efficiency and profitability.
                                            Make data-driven decisions with
                                            actionable insights.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.28,
                                    }}
                                    className="flex"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                            <img src={logo2} alt="logo2" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6">
                                            Innovative Technology
                                            Integration
                                        </h4>
                                        <p className="mt-2 dark:text-gray-600">
                                            Seamlessly integrate
                                            cutting-edge technologies like
                                            AI, IoT, and cloud computing.
                                            Automate tasks, improve
                                            communication, and unlock growth
                                            potential.
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.31,
                                    }}
                                    className="flex"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                            <img src={logo3} alt="logo3" />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6">
                                            Trained Personnel Support
                                        </h4>
                                        <p className="mt-2 dark:text-gray-600">
                                            Our trained experts ensure
                                            smooth implementation and
                                            ongoing guidance. Leverage our
                                            software effectively with
                                            personalized assistance.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 0 }}
                            whileInView={{ opacity: 1, x: -70 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            aria-hidden="true" className="mt-10 lg:mt-0">
                            <img
                                src={image1}
                                alt="image1"
                                className="hover:-translate-y-2 hover:drop-shadow-xl transition ease-in-out duration-300 mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                            />
                        </motion.div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.2,
                                        delay: 0.22,
                                    }}
                                >
                                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                                        Data-Driven Decisions, Personalized
                                        Solutions
                                    </h3>
                                    <p className="mt-3 text-lg dark:text-gray-600">
                                        Data-driven decisions. Personalized
                                        solutions. Continuous innovation.
                                        Propel your business forward with
                                        our powerful analytics, tailored to
                                        your needs, and future-proofed by
                                        our commitment to innovation.
                                    </p>
                                </motion.div>
                                <div className="mt-12 space-y-12">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.25,
                                        }}
                                        className="flex ml-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                                    <img
                                                        src={logo4}
                                                        alt="logo4"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6">
                                                {' '}
                                                Powerful Analytics
                                                Capabilities
                                            </h4>
                                            <p className="mt-2 dark:text-gray-600">
                                                Extract valuable insights
                                                from your data with
                                                comprehensive
                                                visualizations. Monitor
                                                KPIs, track trends, and
                                                identify areas for
                                                improvement.
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.28,
                                        }}
                                        className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                                <img
                                                    src={logo5}
                                                    alt="logo5"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6">
                                                Continuous Innovation and
                                                Upgrades
                                            </h4>
                                            <p className="mt-2">
                                                Stay ahead with the latest
                                                features and
                                                functionalities. Adapt to
                                                market dynamics and gain a
                                                competitive edge through
                                                continuous innovation.
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.1,
                                            delay: 0.31,
                                        }}
                                        className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                                                <img
                                                    src={logo6}
                                                    alt="logo6"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6">
                                                Personalized Solutions
                                            </h4>
                                            <p className="mt-2">
                                                Tailored software solutions
                                                to address your unique
                                                needs. Achieve sustainable
                                                growth by aligning with your
                                                business objectives.
                                            </p>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: 0 }}
                                whileInView={{ opacity: 1, x: 45 }}
                                transition={{ delay: 0.5, duration: 0.25 }}
                                className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img
                                    src={image2}
                                    alt="image2"
                                    className="hover:-translate-y-2 hover:drop-shadow-xl transition ease-in-out duration-300 mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section >
            {/* end */}
        </div >
    )
}

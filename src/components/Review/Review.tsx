import { motion } from "framer-motion";
import { MdVerified } from "react-icons/md";
import image1 from "../../assets/images/Testimonials/1.png";
import image2 from "../../assets/images/Testimonials/2.jpg";
import image3 from "../../assets/images/Testimonials/3.jpg";
import image4 from "../../assets/images/Testimonials/4.jpg";

export const Review = () => {
    return (
        <>
            <section className="font-poppins mb-10">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-2 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 shadow-md p-2 rounded-md  text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-2xl font-regular">What our customers have to say</h2>
                            <p className="dark:text-gray-600">Here are some reviews of our customers and their experience with our services and what we provide!</p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: 40 }}
                            transition={{ duration: 1, delay: 0.50 }}
                            className="p-4 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded hover:scale-105 hover:cursor-pointer duration-150 shadow-md bg-blue-200/50">
                                        <p>I recently used the services of this agency, and I am thrilled with the results. The team went above and beyond to ensure that my needs were met. From the initial consultation to the final delivery, their professionalism and attention to detail were evident. They were prompt in responding to my queries and kept me informed throughout the process. The end product exceeded my expectations, and I highly recommend their services to anyone looking for top-notch quality and exceptional customer care.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={image1} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                            <div>
                                                <p className="text-sm sm:text-lg font-semibold">Neo Smith</p>
                                                <p className="text-xs sm:text-lg dark:text-gray-600">Asus</p>
                                            </div>
                                            <MdVerified size={40} className="fill-green-500 ml-1 sm:ml-4" />
                                        </div>
                                    </div>
                                    <div
                                        className="p-6 rounded hover:scale-105 hover:cursor-pointer duration-150 shadow-md bg-blue-100/40">
                                        <p>I cannot say enough good things about this agency. The level of workmanship they displayed was truly impressive. They understood my vision perfectly and executed it flawlessly. Not only that, but their customer service was outstanding. They were patient, attentive, and always available to address any concerns I had. They delivered the project on time and within budget. I am extremely satisfied with their services and will definitely be using them again in the future.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={image2} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                            <div>
                                                <p className="text-sm sm:text-lg font-semibold">Olivia Mitchell</p>
                                                <p className="text-xs sm:text-lg dark:text-gray-600">Razer</p>
                                            </div>
                                            <MdVerified size={40} className="fill-green-500 ml-1 sm:ml-4" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div
                                        className="p-6 rounded shadow-md hover:scale-105 hover:cursor-pointer duration-150 bg-blue-100/40">
                                        <p>I have had the pleasure of working with this agency, and I can confidently say that they are a reliable and trustworthy partner. From the moment I engaged their services, they demonstrated a high level of professionalism and expertise. They listened to my requirements attentively and provided valuable insights and suggestions. The team delivered exceptional results within the agreed-upon timeframe. Their commitment to client satisfaction is commendable, and I would not hesitate to recommend them to others.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={image3} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                            <div>
                                                <p className="text-sm sm:text-lg font-semibold">Robert Johnson</p>
                                                <p className="text-xs sm:text-lg dark:text-gray-600">Microsoft</p>
                                            </div>
                                            <MdVerified size={40} className="fill-green-500 ml-1 sm:ml-4" />
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md hover:scale-105 hover:cursor-pointer duration-150 bg-blue-200/50">
                                        <p>I recently engaged this agency for their services, and I am extremely pleased with the outcome. Their attention to detail is second to none. They meticulously handled every aspect of the project, ensuring that nothing was overlooked. The level of care and precision they put into their work is truly remarkable. The team was professional, responsive, and dedicated to delivering a top-notch experience. I am grateful for their expertise and would highly recommend their services to anyone seeking excellence.</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            <img src={image4} alt="" className="w-12 h-12 bg-center bg-cover rounded-full" />
                                            <div>
                                                <p className="text-sm sm:text-lg font-semibold">Michael Davis</p>
                                                <p className="text-xs sm:text-lg dark:text-gray-600">Dell</p>
                                            </div>
                                            <MdVerified size={40} className="fill-green-500 ml-1 sm:ml-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
        </>
    );
};
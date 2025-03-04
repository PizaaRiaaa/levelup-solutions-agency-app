import React, { JSX } from "react";
import { motion } from "framer-motion";

type InputFieldProps = {
    label: string;
    type?: string;
    placeholder: string;
    className?: string;
};

type TextareaFieldProps = {
    label: string;
    placeholder: string;
    className?: string;
};

const InputField: React.FC<InputFieldProps> = ({ label, type = "text", placeholder, className = "" }) => (
    <div className={`flex-1 px-2 ${className}`}>
        <label className="block mb-2 text-sm text-gray-900">{label}</label>
        <input type={type} placeholder={placeholder} className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
    </div>
);

const TextareaField: React.FC<TextareaFieldProps> = ({ label, placeholder, className = "" }) => (
    <div className={className}>
        <label className="block mb-2 text-sm text-gray-900">{label}</label>
        <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder={placeholder}></textarea>
    </div>
);

type ContactDetail = {
    title: string;
    description: string;
    info: string;
    icon: JSX.Element;
};

export const Contact: React.FC = () => {
    const contactDetails: ContactDetail[] = [
        {
            title: "Email",
            description: "Our friendly team is here to help.",
            info: "levelup@agency.solutions",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
        },
        {
            title: "Live chat",
            description: "Our friendly team is here to help.",
            info: "Start new chat",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
        }
    ];

    return (
        <section className="bg-gray-100 my-[100px] font-poppins">
            <div className="container px-6 py-12 mx-auto">
                <motion.div
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -50 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <p className="font-medium text-blue-700/70">Contact us</p>
                    <h1 className="mt-2 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-4000 md:text-3xl">Chat to our friendly team</h1>
                    <p className="mt-3 text-gray-800/70">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </motion.div>
                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                        {contactDetails.map((detail, index) => (
                            <div key={index}>
                                <span className="inline-block p-3 text-white rounded-full bg-gradient-to-r from-indigo-500 to-blue-700">
                                    {detail.icon}
                                </span>
                                <h2 className="mt-4 text-base font-medium text-gray-800">{detail.title}</h2>
                                <p className="mt-2 text-sm text-gray-700">{detail.description}</p>
                                <p className="mt-2 text-sm text-blue-500 cursor-pointer hover:text-blue-700">{detail.info}</p>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                        <form>
                            <div className="-mx-2 md:items-center md:flex">
                                <InputField label="First Name" placeholder="" />
                                <InputField label="Last Name" placeholder="" />
                            </div>
                            <InputField label="Email address" type="email" placeholder="" className="mt-4" />
                            <TextareaField label="Message" placeholder="Message" className="w-full mt-4" />
                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-blue-600 to-indigo-400 rounded-md cursor-pointer hover:scale-105 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

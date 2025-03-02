import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaDribbbleSquare, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="overflow-x-hidden max-w-screen font-poppins">
            {/* footer top section */}
            <div className="sm:flex justify-between py-10 px-8 grid bg-gray-900">
                <div className="text-white w-1/2">
                    <h1 className="w-full text-3xl font-bold cursor-pointer text-blue-400">LevelUP Solutions</h1>
                    <p className="py-4">Welcome to LevelUp Solutions, where we transform raw information into actionable insights. With cutting-edge technology and a team of skilled analysts, we specialize in deciphering complex data sets to uncover valuable patterns and trends with which wee take your business to the Next Level.</p>
                    <div className="flex md:w-[75%] gap-2 justify-between my-6 text-blue-200">
                        {/* social media icons */}
                        <FaFacebookSquare size={30} className="cursor-pointer" />
                        <FaDribbbleSquare size={30} className="cursor-pointer" />
                        <FaInstagram size={30} className="cursor-pointer" />
                        <FaGithubSquare size={30} className="cursor-pointer" />
                        <FaTwitterSquare size={30} className="cursor-pointer" />
                    </div>
                </div>
                <div className="text-white w-full sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
                    <div className="flex flex-col gap-2 text-center">
                        <p className="text-xl sm:text-3xl text-center">Want tips & Tricks to optimize your Work flow?</p>
                        <p>Sign up to our newsletter and stay up to date.</p>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-row w-full gap-2 justify-center">
                            <input placeholder="Enter your email" className="pl-4 w-full placeholder-zinc-800 text-zinc-800 bg-white flex border border-blue-900/50 h-10 sm:h-[35px] mx-auto rounded-md text-sm" />
                            <button className="bg-blue-400 mx-auto text-sm w-1/2 hover:cursor-pointer rounded-md hover:bg-blue-500">Sign up</button>
                        </div>
                    </div>
                    <p className="text-xs mx-10 flex-col text-center pt-4">Wee care about the protection of your data. Read our <span className="underline cursor-pointer text-blue-400">Privacy Policy</span>.</p>
                </div>
            </div>
            {/* footer bottom section with end */}
            <footer className="p-6 bg-gray-300/50 w-full">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Company</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                            <a href="_blank">About Us</a>
                            <a href="_blank">Our Team</a>
                            <a href="_blank">Careers</a>
                            <a href="_blank">Testimonials</a>
                            <a href="_blank">Press & Media</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Services</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                            <a href="_blank">Web Development</a>
                            <a href="_blank">UI/UX Design</a>
                            <a href="_blank">Branding & Identity</a>
                            <a href="_blank">SEO & Marketing</a>
                            <a href="_blank">Custom Solutions</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Resources</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                            <a href="_blank">Blog</a>
                            <a href="_blank">Case Studies</a>
                            <a href="_blank">FAQs</a>
                            <a href="_blank">Support</a>
                            <a href="_blank">Privacy Policy</a>
                            <a href="_blank">Terms of Service</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium">Connect With Us</h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
                            <a href="_blank">LinkedIn</a>
                            <a href="_blank">Twitter</a>
                            <a href="_blank">Facebook</a>
                            <a href="_blank">Instagram</a>
                            <a href="_blank">YouTube</a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="dark:text-gray-600">© {new Date().getFullYear()} Your LevelUP Solutions. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    )
}

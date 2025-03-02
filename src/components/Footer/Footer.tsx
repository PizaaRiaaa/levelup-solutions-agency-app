import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaDribbbleSquare, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="overflow-x-hidden max-w-screen font-poppins">
            {/* footer top section */}
            <div className="sx:flex justify-between py-10 px-8 grid bg-gray-900">
                <div className="text-white ">
                    <h1 className="w-full text-3xl font-bold cursor-pointer text-blue-400">LevelUP Solutions</h1>
                    <p className="py-4">Welcome to LevelUp Solutions, where we transform raw information into actionable insights. With cutting-edge technology and a team of skilled analysts, we specialize in deciphering complex data sets to uncover valuable patterns and trends with which wee take your business to the Next Level.</p>
                    <div className="flex md:w-[75%] justify-between my-6 text-blue-200">
                        {/* social media icons */}
                        <FaFacebookSquare size={30} className="cursor-pointer" />
                        <FaDribbbleSquare size={30} className="cursor-pointer" />
                        <FaInstagram size={30} className="cursor-pointer" />
                        <FaGithubSquare size={30} className="cursor-pointer" />
                        <FaTwitterSquare size={30} className="cursor-pointer" />
                    </div>
                </div>
                <div className="text-white sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
                    <div>
                        <h1>Want tips & Tricks to optimize your Work flow?</h1>
                        <p>Sign up to our newsletter and stay up to date.</p>
                    </div>
                    <div className="my-4">
                        <div className="justify-center flex">
                            <input className="placeholder:pl-4 flex mr-[-50px] h-10 sm:w-[50%] sm:h-[35px] mx-auto rounded-md text-black" />

                        </div>

                    </div>
                </div>
            </div>
            {/* footer top section end */}
            {/* footer bottom section with links */}
            <div></div>
            {/* footer bottom section with end */}
        </div>
    )
}

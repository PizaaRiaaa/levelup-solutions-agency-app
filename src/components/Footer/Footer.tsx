import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaDribbbleSquare, FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="overflow-x-hidden max-w-screen font-poppins">
            {/* footer top section */}
            <div className="sm:flex justify-between py-10 px-8 grid bg-gray-900">
                <div className="text-white w-full">
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
                <div className="text-white w-full sm:w-[900px] sm:ml-[18%] sm:mr-[12%] sm:pt-0">
                    <div>
                        <h1>Want tips & Tricks to optimize your Work flow?</h1>
                        <p>Sign up to our newsletter and stay up to date.</p>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-row w-full gap-2 justify-center">
                            <input placeholder="Enter your email" className="pl-4 w-full placeholder-zinc-800 bg-white flex border border-blue-900/50 h-10 sm:h-[35px] mx-auto rounded-md text-sm" />
                            <button className="bg-blue-400 mx-auto text-sm w-1/2 hover:cursor-pointer rounded-md hover:bg-blue-500">Sign up</button>
                        </div>
                    </div>
                    <p className="text-xs mx-10 flex-col text-center pt-4">Wee care about the protection of your data. Read our Privacy <span className="underline cursor-pointer text-blue-400">Policy</span>.</p>
                </div>
            </div>
            {/* footer top section end */}
            {/* footer bottom section with links */}
            <div></div>
            {/* footer bottom section with end */}
        </div>
    )
}

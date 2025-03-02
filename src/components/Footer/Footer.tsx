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
            </div>
            {/* footer top section end */}
            {/* footer bottom section with links */}
            <div></div>
            {/* footer bottom section with end */}
        </div>
    )
}

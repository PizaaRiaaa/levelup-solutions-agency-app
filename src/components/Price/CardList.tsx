import Card from './Card'
import image1 from '../../assets/images/Price/1.png'
import image2 from '../../assets/images/Price/2.png'
import image3 from '../../assets/images/Price/3.png'
import { motion } from 'framer-motion'

export const CardList = () => {


    const Packkages = [
        {
            "image": image1,
            "packageName": "Growth Package",
            "standoutBg": "",
            "marginMiddle": "",
            "price": "$350",
            "features": [
                "Advanced Algorithmic Solutions",
                "Trained Personnel Support",
                "Innovative Technnology Integration",
                "Powerful Analytyics Capabilities",
                "Personalized Solutions",
                "Continous Innovation",

            ],
            "iconColors": [
                "text-green-500",
                "text-green-500",
                "text-green-500",
                "text-green-300/50",
                "text-green-300/50",
                "text-green-300/50",

            ],
            "buttonBg": "bg-[#4D4D4D] text-white",
            "hoverBgButton": "hover:bg-[#4D4D4D]/80",
        },
        {
            "image": image2,
            "packageName": "Standard Package",
            "standoutBg": "",
            "marginMiddle": "md:-my-2",
            "price": "$1200",
            "features": [
                "Advanced Algorithmic Solutions",
                "Trained Personnel Support",
                "Innovative Technnology Integration",
                "Powerful Analytyics Capabilities",
                "Personalized Solutions",
                "Continous Innovation",

            ],
            "iconColors": [
                "text-green-500",
                "text-green-500",
                "text-green-500",
                "text-green-500",
                "text-green-300/50",
                "text-green-300/50",

            ],
            "buttonBg": "bg-blue-700/80",
            "hoverBgButton": "hover:bg-blue-700/50",
            "buttonTextColor": "text-white",
        },
        {
            "image": image3,
            "packageName": "Enterprise Package",
            "standoutBg": "",
            "marginMiddle": "",
            "price": "$7500",
            "features": [
                "Advanced Algorithmic Solutions",
                "Trained Personnel Support",
                "Innovative Technnology Integration",
                "Powerful Analytyics Capabilities",
                "Personalized Solutions",
                "Continous Innovation",

            ],
            "iconColors": [
                "text-green-500",
                "text-green-500",
                "text-green-500",
                "text-green-500",
                "text-green-500",
                "text-green-500",

            ],
            "buttonBg": "bg-[#4D4D4D] text-white",
            "hoverBgButton": "hover:bg-[#4D4D4D]/80",
        }
    ]

    return (
        <div className="max-w-screen overflow-x-hidden font-poppins">
            <div className="w-full py-[10rem] px-4 bg-white -mt-28">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col gap-15">
                        <h2 className="text-3xl font-regular text-center sm:text-5xl mt-[6%] text-black">Some of our Packages</h2>
                        <p className='text-xl text-center mb-24'>
                            Find your Package that fits your needs, weather your a new company or a Enterprise we got you covered!
                        </p>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 0 }}
                            whileInView={{ opacity: 1, y: -50 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="flex flex-col sm:flex-row gap-8 justify-center w-full sm:w-2/3 p-1 sm:p-5"
                        >
                            {Packkages.map((pkg, index) =>
                                <Card
                                    key={index}
                                    image={pkg.image}
                                    packageName={pkg.packageName}
                                    standOutBg={pkg.standoutBg}
                                    marginMiddle={pkg.marginMiddle}
                                    price={pkg.price}
                                    feature1={pkg.features[0]}
                                    feature2={pkg.features[1]}
                                    feature3={pkg.features[2]}
                                    feature4={pkg.features[3]}
                                    feature5={pkg.features[4]}
                                    feature6={pkg.features[5]}
                                    iconColor1={pkg.iconColors[0]}
                                    iconColor2={pkg.iconColors[1]}
                                    iconColor3={pkg.iconColors[2]}
                                    iconColor4={pkg.iconColors[3]}
                                    iconColor5={pkg.iconColors[4]}
                                    iconColor6={pkg.iconColors[5]}
                                    buttonBg={pkg.buttonBg}
                                    hoverBgButton={pkg.hoverBgButton}
                                    buttonTextColor={pkg.buttonTextColor}
                                />
                            )}
                        </motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}

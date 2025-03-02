import { BsFillCheckCircleFill } from "react-icons/bs"

interface CardProps {
  standOutBg?: string
  marginMiddle: string
  packageName: string
  image: string
  price: string
  feature1: string
  feature2: string
  feature3: string
  feature4: string
  feature5: string
  feature6: string
  iconColor1: string
  iconColor2: string
  iconColor3: string
  iconColor4: string
  iconColor5: string
  iconColor6: string
  buttonBg: string;
  hoverBgButton: string;
  buttonTextColor?: string;
}

export default function Card({
  standOutBg,
  marginMiddle,
  packageName,
  price,
  image,
  feature1,
  feature2,
  feature3,
  feature4,
  feature5,
  feature6,
  iconColor1,
  iconColor2,
  iconColor3,
  iconColor4,
  iconColor5,
  iconColor6,
  buttonBg,
  hoverBgButton,
  buttonTextColor
}: Readonly<CardProps>) {
  return (
    <div
      className={`w-full shadow-xl flex flex-col p-4 my-4 ${standOutBg} ${marginMiddle} rounded-lg hover:scale-105 hover:cursor-pointer duration-300`}
    >
      <img
        src={image}
        alt="img1"
        className="w-20 mx-auto mt-[-3rem] bg-transparent rounded-md"
      />
      <h2 className="text-2xl font-medium text-center">{packageName}</h2>
      <p className="py-2 mx-8 mb-6 -mt-2 flex justify-center text-3xl font-medium">
        {price}
      </p>
      <div className="text-center font-medium text-zinc-800">
        <p className="py-2 border-b border-gray-300 mx-8 flex justify-between">
          {feature1}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor1}`} />
        </p>
        <p className="py-2 border-b border-gray-300 mx-8 flex justify-between">
          {feature2}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor2}`} />
        </p>
        <p className="py-2 border-b border-gray-300 mx-8 flex justify-between">
          {feature3}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor3}`} />
        </p>
        <p className="py-2 border-b border-gray-300 mx-8 flex justify-between">
          {feature4}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor4}`} />
        </p>
        <p className="py-2 border-b border-gray-300 mx-8 flex justify-between">
          {feature5}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor5}`} />
        </p>
        <p className="py-2 border-b border-gray-300 mx-8 flex justify-between">
          {feature6}
          <BsFillCheckCircleFill className={`ml-2 my-auto ${iconColor6}`} />
        </p>
      </div>
      <button className={`justify-center flex mx-auto w-[200px] ${buttonBg} ${hoverBgButton} ${buttonTextColor} hover:cursor-pointer rounded-md font-medium my-6 py-2`}>
        Contact Support
      </button>
    </div>
  )
}

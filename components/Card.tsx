import { FC } from "react"
import qscan from '../public/images/image-qr-code.png'
import Image from "next/image"
const Card: FC<CardProps> = ({}) => {
    return (
    <div className="flex justify-center content-center flex-col w-56 p-3 m-8 bg-white rounded-md">
        <Image src={qscan} alt="Qscan" width={300} className="rounded-md" />
        <div className="my-2 text-center">
            <h2 className="font-bold  text-[#061256] my-1">Improve your front-end  skills by building projects</h2>
            <p className=" text-[11.2px] opacity-70">
            Scan the QR code to visit Frontend Mentor and take your coding skills  to the next level</p>
        </div>
    
    </div>
    )
}

interface CardProps {}

export default Card
import { FC } from "react"
import mobile from "../../../assets/images/mobile app.png"
import { AppDownloadButtonInterface } from "../../../assets/Interfaces"
import { BsApple } from "react-icons/bs"
import { BiLogoPlayStore } from "react-icons/bi"

export const Download = () => {
    return(
        <div className="center w-full relative">
            <div className="w-11/12 lg:w-10/12 center flex-col lg:flex-row gap-[50px]">
                <div className="flex flex-col gap-6">
                    <h2 className="text-5xl font-bold text-primary xl:w-5/12">Download our App</h2>
                    <p className="leading-relaxed">
                        With intuitive search features and a curated selection of properties tailoerd to your proferences, finding your dream home has never been easier. Join thousends of satisfied users who have unlocked the key to their ideal living space with just a tap
                    </p>
                    <div className="flex items-center gap-5 lg:flex-col xl:flex-row lg:gap-9">
                        <AppDownloadButton icon={
                            <BsApple className="text-2xl"/>
                        }
                        topText={'Download on the'}
                        bottomText={"Apple Store"}
                        />

                        <AppDownloadButton icon={
                            <BiLogoPlayStore className="text-2xl"/>
                        }
                        topText={'Get in on'}
                        bottomText={"Google Play"}
                        />
                        
                    </div>
                </div>

                <img src={mobile} alt="Mockup of our app on a mobile device" />

            </div>
        </div>
    )
}


const AppDownloadButton:FC <AppDownloadButtonInterface> = ({icon, topText, bottomText}) => {
    return(
        <div className="bg-primary rounded-lg flex p-3 px-4 w-fit lg:w-full items-center text-gray-100 gap-3 cursor-pointer">
            {icon}

            <div className="border-l border-gray-400 flex flex-col pl-4">
                <p className="text-gray-300 text-sm">{topText}</p>
                <p className="">{bottomText}</p>
            </div>
        </div>
    )
}
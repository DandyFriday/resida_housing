import { PiCheck } from "react-icons/pi"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import img from "../../../assets/images/notjust.png"
import blur from "../../../assets/images/blur.png"
import experience1 from "../../../assets/images/experience 1.png"
import experience2 from "../../../assets/images/experience 2.jpg"
import experience3 from "../../../assets/images/experience 3.jpg"


export const NotjustanApp:React.FC = () => {
    return(
        <>
            <section className="center w-full relative overflow-hidden">
                <>
                    <img src={blur} alt="" className="absolute z-[-1] top-0"/>
                    <img src={blur} alt="" className="absolute z-[-1] -botom-9 -right-36 rotate-180"/>
                </>

                <div className="w-11/12 lg:w-10/12 center flex-col lg:flex-row relative gap-[10vh] lg:gap-[25px] my-[10vh]">

                    <div className="flex items-center justify-center lg:justify-between relative w-full">
                        <div className="w-10/12 relative">
                            <img src={img} alt="Resida is not just an app" className="w-full"/>

                            <div className="absolute bottom-6 -right-12">
                                <ImageExtras 
                                    icon={<PiCheck className="text-lg"/>}
                                    iconBg={"bg-green"}
                                    topText={<p className="text-gray-400">
                                        120k+ Accessible
                                    </p>}
                                    bottomText={
                                        <p className="font-bold">Homes in Lagos</p>
                                    }
                                />
                            </div>

                        </div>
                    </div>
                    

                    <div className="flex flex-col gap-5 text-primary w-full">
                        <h2 className="text-3xl font-bold">
                            Resida is Not Just an App
                        </h2>
                        <p className="text-primary text-xl">
                            We are an ecosystem with you at the center
                        </p>
                        <p className="text-black3 w-full leading-relaxed">
                            Resida aims to bridge the gap between potential tenants and available properties. This app is not just a tool; it's a solution for individuals and families who are navigating the challenging terrain of apartment hunting in a new or familiar city. 
                        </p>
                    </div>


                </div>
            </section>


            <section className="center w-full my-[10vh]">
              <div className="flex flex-col lg:flex-row w-11/12 lg:w-10/12 gap-8 lg:gap-[25px]">
                <div className="flex flex-col lg:flex-row justify-between lg:justify-start lg:items-stretch gap-3 w-full lg:h-[18vh] relative">
                    <img src="" alt="" className="absolute"/>
                    <img src={experience1} alt="Eperience Image 1" className="h-full" />
                    <img src={experience2} alt="Eperience Image 2" className="h -full"/>
                    <img src={experience3} alt="Eperience Image 3" className="h -full" />
                </div>


                <h2 className="text-2xl font-bold lg:w-8/12 text-primary">
                    Our Experience guarantees unmatched proficiency and excellence.
                </h2>
              </div>
            </section>
        </>
    )
}
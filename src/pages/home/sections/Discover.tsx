import lekki from "../../../assets/images/lekki.png"
import agege from "../../../assets/images/agege.png"
import obalende from "../../../assets/images/obalende.png"
import gbagada from "../../../assets/images/gbagada.png"
import yaba from "../../../assets/images/yaba.png"
import office from "../../../assets/images/office.png"
import { locations } from "../../../assets/Interfaces"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import blur from "../../../assets/images/blur.png"
import { Button } from "../../../assets/components/Button"
import { BsArrowRight } from "react-icons/bs"


const locationsList = [
    {
        img: lekki,
        location: 'Lekki',
        noOfProperties: 8,
    },
    {
        img: agege,
        location: 'Agege',
        noOfProperties: 2,
    },
    {
        img: obalende,
        location: 'Obalende',
        noOfProperties: 45,
    },
    {
        img: gbagada,
        location: 'Gbagada',
        noOfProperties: 11,
    },
    {
        img: yaba,
        location: 'Yaba',
        noOfProperties: 12,
    },
]
export const Discover = () => {
    return(
        <>
            <section className="w-full center flex-col bg-discover bg-center min-h-[50vh] bg-cover text-center gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-relaxed w-11/12 md:w-9/12 lg:w-5/12">
                    Discover a place you'll love to live
                </h2>
                <Button className="rounded-bl-xl bg-secondary w-fit flex items-center py-3"
                    text="Download App"
                    icon={<BsArrowRight className="ml-3 "/>}
                />
            </section>

            <section className="center w-full text-primary py-[20vh]">
                <div className="w-11/12 lg:w-10/12 flex-col flex gap-5 text-center">
                    <h2 className="text-3xl font-semibold">
                        Find homes in popular neighbourhood
                    </h2>

                    <p className="font-semibold">
                        Apartments in Lekki, Obalende, Agege & Yaba
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
                        {
                            locationsList.map((location : locations, i) =>(
                                <div key={i} className={`center rounded-2xl overflow-hidden relative ${i == 0 ? " md:row-span-2" : ""}`}>

                                    <img src={location.img} alt={location.location} className={`w-full`}/>

                                    <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-end pb-6 cursor-pointer">
                                        <div className="w-9/12 rounded-xl flex flex-col text-left bg-zinc-600 backdrop-blur-lg bg-opacity-45 p-2 px-6">
                                            <p className="text-gray-300 text-sm">{location.noOfProperties} Properties</p>
                                            <p className="font-semibold text-white tracking-wide">{location.location}</p>
                                        </div>
                                    </div>
                                </div>
                            ))  
                        }
                    </div>
                </div>
            </section>


            <section className="center w-full text-primary py-[20vh] overflow-hidden relative">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0  rotate-180"/>   
                <div className="w-11/12 lg:w-10/12 flex-col lg:flex-row center gap-[50px]">
                    <div className="w-full lg:w-5/12 center relative">
                        <img src={office} alt="Image of an office" />
                        <div className="absolute bottom-0 left-0">
                            <ImageExtras 
                                icon={<PiCheck className="text-lg"/>}
                                iconBg={"bg-green"}
                                topText={<p className="text-gray-400">600+</p>}
                                bottomText={<p className="font-bold">
                                    Spaces in modern areas
                                </p>}
                            />
                        </div>

                    </div>

                    <div className="flex flex-col gap-6 text-primary w-full lg:w-7/12">
                        <h2 className="font-bold text-3xl">Need an office space?</h2>

                        <p className="tracking-wide leading-relaxed text-gray-500 text-lg">
                            Seeking office space in Lagos? Look no further! Our accomodations offer tailoerd solutions to meet your workspace needs, ensuring productivity and comfort in the heart of Lagos
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

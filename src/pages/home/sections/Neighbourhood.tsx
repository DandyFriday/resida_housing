import { BsArrowRight } from "react-icons/bs"
import { Button } from "../../../assets/components/Button"
import map from "../../../assets/images/map.png"
import property1 from "../../../assets/images/prop 1.png"
import property2 from "../../../assets/images/prop 2.png"
import property3 from "../../../assets/images/prop 3.png"
import property4 from "../../../assets/images/prop 4.png"
import property from "../../../assets/images/property.png"
import blur from "../../../assets/images/blur.png"
import arrow from "../../../assets/images/arrow.png"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import { FaBagShopping } from "react-icons/fa6"




const propertiesImage = [
    property1, property2, property3, property4
]

export const Neighbourhood = () => {
    return(
        <>  
            <section className="w-full center">
                <div className="flex items-center w-11/12 lg:w-10/12 justify-between flex-col lg:flex-row gap-[50px]">

                    <img src={map} alt="Neighbourhood guide map" className="w-full"/>

                    <div className="flex flex-col gap-5 text-primary w-full">
                        <h2 className="text-3xl">
                            Comprehensive <br /> <span className="font-bold">
                                Neighbourhood Guides
                            </span>
                        </h2>

                        <p>
                            The 'Neighborhood Guides' in Resida are like your friendly local experts, giving you the inside scoop on the vibe, hotspots, and quirks of each area so you can find your perfect match effortlessly! 🏡✨ 
                        </p>

                        <Button 
                            className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                            text="Download our app" 
                            icon={<BsArrowRight className="ml-3 "/>}
                        />
                    </div>
                </div>

            </section>


            <section className="w-full center py-[20vh] overflow-hidden relative flex-col lg:flex-row gap-[50px]">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0 rotate-180 scale-110"/>   
                
                    <div className="w-11/12 lg:w-6/12 flex items-center justify-end">
                        <div className="flex flex-col gap-5 text-primary w-full lg:w-10/12">
                            <div className="flex items-center w-full">
                                {
                                    propertiesImage.map((prop : string, i) => (
                                        <img key={i} src={prop} alt="" className={`h-10 w-10`} style={{
                                            transform: `${i !== 0 && `translateX(-${15*i}px)`}`
                                        }}/>
                                    ))
                                }
                            </div>

                            <h2 className="text-3xl">
                                Do you have a property? <br /> <span className="font-bold">
                                    Provide accomodation here in Lagos
                                </span>
                            </h2>

                            <p>
                                Own a property in Lagos? Join our platform to effortlessly list your accomodations and connect with eager tenants seeking their perfect home in the vibrant city of Lagos.
                            </p>

                            <Button 
                                className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                                text="Download our app" 
                                icon={<BsArrowRight className="ml-3 "/>}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 relative">
                        <div className="absolute top-5 left-0 lg:-left-10">
                            <ImageExtras 
                                iconBg={'bg-purple'} 
                                icon={<FaBagShopping className="text-lg"/>}
                                topText={<p className="text-sm text-gray-400">Available apartments</p>}
                                bottomText={<p className="font-bold">300K+</p>}
                            />

                        </div>

                        <div className="absolute -bottom-5 left-[50%]">
                            <ImageExtras 
                                icon={<PiCheck className="text-lg"/>}
                                iconBg={"bg-green"}
                                topText={<p className="font-bold">1000+</p>}
                                bottomText={<p className="text-gray-400">
                                    Neighbourhoods
                                </p>}
                            />
                        </div>
                        <img src={arrow} alt="" className="absolute -top-8 left-[50%]"/>

                        <img src={property} alt="Property" className="w-full z-0"/>
                    </div>
                

            </section>
        </>
    )
}
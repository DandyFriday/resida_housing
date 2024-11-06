import { Button } from "../../../assets/components/Button"
import { BsArrowRight, BsHeartFill } from "react-icons/bs"
import lillian from "../../../assets/images/lillian.png"
import naanchin from "../../../assets/images/naanchin.png"
import horeb from "../../../assets/images/horeb.png"
import { properties } from "../../../assets/Interfaces"
import blur from "../../../assets/images/blur.png"


const propertiesList = [
    {
        img: lillian,
        title: 'Lillian Pepple Estate',
        features: ["Duplexes", "Bungalows", "Self-Contains"],
        price: '1,500,00'
    },
    {
        img: naanchin,
        title: 'Naanchin Homes',
        features: ["3 Bedrooms flats", "Bungalows", "Students Accomodations"],
        price: '500,000'
    },
    {
        img: horeb,
        title: 'Horeb Accomodations',
        features: ["Mansions", "Bungalows", "Office spaces"],
        price: '2,500,000'
    },
]

export const AfterHero : React.FC =  () => {
    return(
        <>
            <section className="w-full center py-[20vh] overflow-hidden relative">
                <img src={blur} alt="" className="absolute z-[-1] bottom-0 -right- 36 rotate-180 scale-110"/>


                <div className="w-11/12 lg:w-10/12 center flex-col text-primary gap-6">
                    <h2 className="text-4xl font-bold text-center">
                        Featured Properties
                    </h2>
                    <div className="text-center text-lg md:w-11/12 text-black3">
                        Explore our curated selection of premier properties, meticulously chosen to suit every lifestylpe and budget. From luxurious penthouses to cozy family homes, our featured listings showcase the best of Lagos living.
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-[25px] w-full">
                        {
                            propertiesList.map((property : properties, i) => (
                                <div key={i} className="flex flex-col gap-3">
                                    <img src={property.img} alt={`Image for ${property.title}`} className="w-full"/>

                                    <div className="flex items-center justify-between">
                                        <h3 className="font-bold text-black2">{property.title}</h3>

                                        <BsHeartFill className="text-gray-500"/>
                                    </div>

                                    <div className="flex items-center justify-start gap-2 flex-wrap">
                                        {
                                            property.features.map((feature: string, i) => (
                                                <p key={i} className="center text-black bg-gray-300 p-2 rounded text-[12px]">
                                                    {feature}
                                                </p>
                                            ))
                                        }
                                    </div>
                                    <p className="text-gray-500">From NGN{property.price}/year</p>
                                </div>
                            ))
                        }   
                    </div>
                </div>



            </section>

            <section className="w-full center bg-primary py-[8vh]">
                <div className="w-11/12 lg:w-10/12 flex flex-col rounded-2xl p-6 lg:p-12 text-white gap-4">
                    <div className="flex flex-col gap-2">

                        <h2 className="font-bold text-2xl tracking-wide">Resida nullifies the hassles of agents </h2>
                        <p className="">Save properties, create alerts and keep track of the enquiries you send to agents.</p>
                    </div>

                    <div className="flex lg:justify-end w-full lg:pr-8">

                    <Button 
                        className="text-primary bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                        text="Download our app" 
                        icon={<BsArrowRight className="ml-3 "/>}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
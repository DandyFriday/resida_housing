import { Button } from "../../../assets/components/Button"
import img from "../../../assets/images/dream home.png"
import lock from "../../../assets/images/dream lock.png"
import net from "../../../assets/images/dream net.png"


export const Dream = () => {
    return(
        <section className="bg-primary center w-full py-[5vh] relative overflow-hidden">
            <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row items-center h-full">
                
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute inset-0 bg-light-gradient opacity-30 z-0 drop-backdrop-lg scale-[1.2]"></div>
                    <img src={img} alt="" className="relative w-full z-10"/>
                </div>

                <div className="flex flex-col gap-2 text-3xl w-full text-white z-10">
                    <h2 className="font-semibold">
                        Your dream home is only a few clicks away
                    </h2>
                    <p>- Find your space now!</p>
                    <Button text="Download app" className="rounded-bl-xl bg-white text-primary w-fit" />
                </div>

            </div>

            <>
                <img src={lock} alt="" className="absolute left-0 h-full" />
                <img src={net} alt="" className="absolute right-0" />
            </>

        </section>
    )
}
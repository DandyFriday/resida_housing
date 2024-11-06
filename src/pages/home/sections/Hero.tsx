import { Button } from "../../../assets/components/Button"

export const Hero = () => {
    return(
        <section className="min-h-screen bg-hero bg-center bg-cover w-full center"> 
            <div className="w-11/12 lg:w-10/12 flex flex-col justify-center items-start">
                <div className="w-full flex flex-col justify-center items-center text-primary gap-6 lg:gap-8 text-center">
                

                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl md:w-11/12 lg:w-8/12 hero-text">
                        Finding the perfect home has never been this easy
                    </h1>
                    <p className="md:w-11/12 lg:w-8/12">
                    Eliminate stressful house searches. We link you with the Lagos’s finest and most affordable residences - <span className="font-bold">Zero agent fees, middle men payments & hassles.</span>
                    </p>
                    <div className="flex items-center gap-5 md:gap-9 w-11/12 lg:w-6/12">

                    <Button text="Download our app" className="bg-primary text-white font-bold w-full py-3"/>
                    <Button text="Learn more" className="bg-transparent py-3 text-primary font-bold border border-primary w-full"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
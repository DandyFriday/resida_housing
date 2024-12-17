import { Download } from "../home/sections/Download"
import {AboutNeigh} from "../home/sections/AboutNeigh"
import Frame3 from "../../assets/images/Frame3.png"
import Frame2 from "../../assets/images/Frame2.png"
import hand from "../../assets/images/hand.png"
import { ImageExtras } from "../../assets/components/ImageExtras"
import { PiCheck } from "react-icons/pi"
import { FaBagShopping } from "react-icons/fa6"



const AboutPage = () => {
  return (
    <div className="py-28">
      <div className="w-full h-[461px] flex justify-around space-x-6o py-4 px-[7rem]">
        {/* Left Div */}
        <div className="w-[525px] text-primary h-auto flex-shrink-4 lg:w-7/12 relative">
          {/* Content for the left side */}
          <h1>Who we are!</h1>            
          <p className="text-1xl">Resida encompasses the innovative minds shaping the future of urban living. From visionary developers to meticulous designers, each member brings a unique blend of creativity and expertise to the table. Together, we're revolutionizing the way people experience and engage with their living spaces, crafting an app that seamlessly integrates convenience, comfort and community. Get ready to meet your new partners in progress, driving Resida to new heights of success and satisfaction."</p>

        
          <div className="absolute top-30 right-[16rem] lg:-left-10">
            <ImageExtras 
              iconBg={'bg-purple'} 
              icon={<FaBagShopping className="text-lg"/>}
              topText={<p className="text-sm text-gray-400">Available apartments</p>}
              bottomText={<p className="font-bold">300K+</p>}
            />

          </div>

          <div className="absolute bottom-30 left-[50%]">
            <ImageExtras 
              icon={<PiCheck className="text-lg"/>}
              iconBg={"bg-green"}
              topText={<p className="font-bold">1000+</p>}
              bottomText={<p className="text-gray-400">
              Neighbourhoods
              </p>}
            />
          </div>
          
        </div>
        
        {/* Right Image Div */}
        <div className="w-[470px] h-[431px] grid gap-2 px-36">
          
          <div className="w-[450px] h-[241.91px] rounded-[10px] bg-gray-200">
          <img src={Frame3} className="w-full h-full object-fill" alt="" />
          </div>
          
          {/* Bottom Images */}
          <div className="relative grid grid-cols-2">
            <div className="w-[165.19px] h-[165.25px] bg-gray-300 rounded-[10px]  ">
              <img src={Frame2} className="w-full h-full object-fill" alt="" />
            </div>
            <div className="w-[263.97px] h-[165.25px] bg-gray-400 absolute rounded-[10px] left-[189px]">
              <img src={hand}  className="w-full h-full object-fill" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <AboutNeigh/>        
      <Download />
    </div>
  );
}

export default AboutPage;
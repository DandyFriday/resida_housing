import { BsGeoAlt, BsTelephone, BsYoutube } from "react-icons/bs"
import { FaFacebookF, FaXTwitter } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { ContactInfoInterface, FooterLinksInterface } from "../Interfaces"
import { BiEnvelope } from "react-icons/bi"
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri"

const icons = [
    <FaFacebookF />,
    <FaXTwitter />,
    <RiInstagramFill />,
    <RiLinkedinFill />,
    <BsYoutube />
]
const FooterLinks = [
    {
        header: 'Product',
        links: ["Pricing", "Case studies", "Reviews", "Updates"]
    },
    {
        header: "Company",
        links: ["Contact us", "Careers", "Culture", "Blog"]
    },
    {
        header: "Support",
        links: ["Help center", "Server status", "Report a bug", "Chat support"]
    },
    {
        header: "Legal",
        links: ["Privacy Policy", "User Terms of Use", "Payments & Pricing policy", "Cookies & Data Privacy"]
    },
]

export const ContactInfo = [
    {
        icon: <BiEnvelope />,
        contact: 'contact@company.com'
    },
    {
        icon: <BsTelephone />,
        contact: '(414) 687 - 5892'
    },
    {
        icon: <BsGeoAlt />,
        contact: '794 Mcallister St San Francisco, 94102'
    },
]


const Footer = () => {
    return(
        <footer className="w-full center bg-primary pt-[10vh] pb-[5vh] lg:py-[15vh]">
            <div className="w-11/12 lg:w-10/12 flex flex-col gap-6 text-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-9 md:gap-9">

                    <div className="flex flex-col gap-4 col-span-2">
                        <h2 className="text-3xl text-gray-100">Resida</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam.</p>
                        <div className="flex gap-3 items-center ">
                            {
                                icons.map((icon : JSX.Element, i) => (
                                    <div key={i} className="text-xl lg:text-2xl">
                                        {icon}
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    {
                        FooterLinks.map((link : FooterLinksInterface, i) => (
                            <div key={i} className="flex flex-col gap-4 w-full">
                                <h3 className="text-gray-100 font-semibold text-lg">{link.header}</h3>

                                <div className="flex flex-col gap-4 text-sm text-gray-200">
                                    {
                                        link.links.map((link : string, i) => (
                                            <Link key={i} to={''}>
                                                {link}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="flex flex-col flex-wrap md:flex-row gap-3 lg:items-center my-3 lg:my-0">
                    {
                        ContactInfo.map((info: ContactInfoInterface, i) => (
                            <div key={i} className="flex items-center gap-2">
                                {info.icon}

                                <a href="">{info.contact}</a>
                            </div>
                        ))
                    }
                </div>

                <div className="justify-between items-center flex flex-col lg:flex-row gap-3">
                    <p className="w-full lg:w-fit">Copyright © 2022 BRIX Templates</p>

                    <p className="w-full lg:w-fit">All Rights Reserved | <span className="underline">Terms and Conditions</span> | <span className="underline">Privacy Policy</span> </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
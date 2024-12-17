import { Link } from "react-router-dom"
import logo from "../images/Resida Logo.svg"
import { Button } from "./Button"
import { FC } from "react"


const Navbar:FC = () => {
        

    return(
        <>
           <>
            <header className={`fixed center w-full left-0 top-0 h-[10vh] md:h-[12vh] z-50 transition-all duration-1000 bg-white border-b border-gray-100`}>
            <div className="flex items-center justify-between w-11/12 lg:w-10/12">

                <Link to={'/'} className='w-3/12 md:w-2/12 flex items-center gap-3'>
                    <img src={logo} alt="Macmay Logo" className=''/>
                </Link>
                <div className="flex items-center justify-center text-primary w-9/12">
                  <Link to="/Contact" className="p-2 px-5">Contact</Link>
                  <Link to="/About" className="p-2 px-5">About</Link>
                  
                </div>                            
                <nav className="flex items-center text-primary gap-4 w-9/12 justify-end">
                    <Button text="Login" className="w-fit border border-primary"/>
                    <Link to="/Signup" className="p-2 text-sm px-6 rounded-t-xl rounded-br-xl w-fit border border-primary">sign Up</Link>
                   
                    <Button text="Download App" className="w-fit border border-primary"/>
                </nav>
                      
            </div>

            
        </header>
        </>
        </>
    )
}


export default Navbar

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { delayLoad } from "./assets/Functions"
import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';

const Navbar = lazy(() => delayLoad(import('./assets/components/Navbar')))
const Footer = lazy(() => delayLoad(import('./assets/components/Footer')))
const HomePage = lazy(() => delayLoad(import("./pages/home/page")))
const ContactPage = lazy(() => delayLoad(import("./pages/contact/page")))
import logo from "./assets/images/Logo green.png"
const AboutPage = lazy(() => delayLoad(import("./pages/about/page")))
const SignupPage = lazy(() => delayLoad(import("./pages/signup/page")))
const LoginPage = lazy(() => delayLoad(import("./pages/login/page")))
const HouseDetailsPage= lazy(() => delayLoad(import("./pages/house/page")))


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<FallbackComponent />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path='/about' element={<AboutPage />} />
                        <Route path="/*" element={<PageNotFound />} />
                        <Route path="/signup" element={<SignupPage />} />  
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/house/:id" element={<HouseDetailsPage/>} />                                            
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };


  const FallbackComponent = () => {
    return(
        <section className='center flex-col gap-2 text-center h-screen w-full'>
            <img src={logo} alt="Resida Housing Academy Logo" className='animate-bounce w-fit'/>
            <strong className='font-bold text-primary'>
                Resida - Housing Academy
            </strong>
        </section>
    )
  }
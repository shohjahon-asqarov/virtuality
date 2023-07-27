import { useEffect, useState } from 'react';

// import bootstrap-icons 
import 'bootstrap-icons/font/bootstrap-icons.css'


// import aos animate -- on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// import sass styles 
import './scss/main.scss';

// import components 
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Devider from './ui/Devider';
import About from './components/About';
import OurTeam from './components/OurTeam';
import Contact from './components/Contact';
import Footer from './components/Footer';

// loader 
import Loader from './ui/Loader';

export default function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  const [loader, setLoader] = useState(true)

  setTimeout(
    () => {
      setLoader(false)
    },
    1500
  )

  return (
    loader
      ? <Loader />
      : <div className='bg-dark overflow-x-hidden w-full'>
        <Navbar />
        <Header />
        <Devider />
        <Services />
        <About />
        <Devider />
        <OurTeam />
        <Devider />
        <Contact />
        <Devider />
        <Footer />
        <Devider />
      </div>
  )
}

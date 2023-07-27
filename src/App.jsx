// import bootstrap-icons 
import 'bootstrap-icons/font/bootstrap-icons.css'


// import aos animate -- on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';

// import sass styles 
import './scss/main.scss';


import Navbar from './components/Navbar';
import { useEffect } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Devider from './ui/Devider';


export default function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-dark min-h-screen">
      <div className="container">
        <Navbar />
        <Header />
        <Devider />
        <Services />
      </div>
    </div>
  )
}

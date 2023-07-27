import { headerImg } from '../assets/data' ;
import Button from '../ui/Button' ;

import { TypeAnimation } from 'react-type-animation';

function Header() {
    return (
        <header id='home' className='container header'>
            <div data-aos="fade-up" className="flex items-center 900:flex-row flex-col gap-y-6">
                <div className='900:w-1/2 w-11/12 pt-10 900:pt-0'>
                    <h1 className='gradient-text md:text-5xl lg:text-[58px] text-[32px] font-bold lg:leading-[84px] text-center 900:text-left'>
                        <TypeAnimation
                            sequence={[
                                'Virtual reality      ',
                                1500,
                                'Business Solutions',
                                1500
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                        />

                    </h1>
                    <p className='text-white text-base md:text-[15px] md:leading-[30px] py-4 md:py-8 text-center 900:text-left'>We have over 15 year exprience in business consultting arena. We have over 15 year exprience in business consultting arena and artficial intelligence.</p>
                    <div className="flex gap-4 justify-center 900:justify-start">
                        <Button link="about" text='Join Us' />
                        <Button link="about" text='Watch video' />
                    </div>
                </div>
                <div className='900:w-1/2 w-11/12'>
                    <img className='-translate-y-10' src={headerImg} alt="header" />
                </div>
            </div>
        </header>
    )
}

export default Header
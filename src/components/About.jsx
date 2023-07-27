import { about1, about2 } from '../assets/data' ;

import Button from '../ui/Button' ;

function About() {
    return (
        <section id='about' className='container'>
            <div data-aos-duration="1000" data-aos="fade-left" className="flex items-center flex-col md:flex-row py-5">
                <div className='w-full lg:w-6/12 img-blur'>
                    <img src={about1} alt="about" />
                </div>
                <div className="w-full lg:w-7/12 text-white">
                    <h3 className='text-center md:text-left text-2xl md:text-[38px] font-bold py-6 md:leading-[45px]'>We complete every projectsextra care as customer need</h3>
                    <p className='text-sm md:text-base text-center md:text-left font-normal pb-6 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                    <div className="flex justify-center md:justify-start">
                        <Button link="contact" text='Read more' />
                    </div>
                </div>
            </div>

            <div data-aos="fade-right" className="flex items-center flex-col-reverse md:flex-row py-5">
                <div className="w-full lg:w-7/12 text-white">
                    <h3 className='text-center md:text-left text-2xl md:text-[38px] font-bold py-6 md:leading-[45px]'>We complete every projectsextra care as customer need</h3>
                    <p className='text-sm md:text-base text-center md:text-left font-normal pb-6 leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nuncoe scelerisque in. orem ipsum  dolor sit amet, consectetur adipisicing elit. Labore eius molestiae facere, natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora odit laborum iure inventore possimus laboriosam qui nam. </p>
                    <div className="flex justify-center md:justify-start">
                        <Button link="contact" text='Read more' />
                    </div>
                </div>
                <div className='w-full lg:w-6/12 img-blur'>
                    <img src={about2} alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About
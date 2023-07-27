import TopText from '../ui/TopText'

import { ServiseData } from '../assets/data'
import ServiseCard from '../ui/ServiseCard'

import Title from 'react-vanilla-tilt'
import { useState } from 'react'


function Services() {
    const [active, setActive] = useState(true)

    return (
        <section id='servise' className='container servise'>
            <TopText title='Our Servise'
                info='We turn information into actionable insights We work to understand your issues and are driven to ask better questions in the pursuit of making work.' />

            <div onClick={() => setActive(!active)} className={`${active ? "wide" : "wide active"} wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] py-10`}>
                {ServiseData.map((i, index) => {
                    return (
                        <Title key={index}>
                            <ServiseCard number={index} key={index} img={i.img} title={i.title} info={i.info} bg={i.bg} />
                        </Title>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
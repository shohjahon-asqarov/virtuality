import TopContact from '../ui/TopContact'
import InputGroup from '../ui/InputGroup'

function Contact() {
    return (
        <section id='contact' data-aos-duration="1000" data-aos="fade-up" className='container'>
            <div className="flex bg-card-bg py-14 rounded-card-border flex-col border contact">
                <TopContact title={'Subscribe to get the Latest News'} info='We recommended you to subscribe to our newspaper,drop your email below to get daily update about us' />
                <InputGroup />
            </div>
        </section>
    )
}

export default Contact
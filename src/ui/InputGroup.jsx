import ContactButton from './ContactButton'

function InputGroup() {
    return (
        <div className='flex h-20 w-11/12 md:w-9/12 justify-between py-3 px-5 rounded-[70px] mx-auto bg-card-bg z-10'>
            <input className='contact-input text-white' type="text" placeholder='Enter your email addres' />
            <ContactButton text='Subscribe' />
        </div>
    )
}

export default InputGroup
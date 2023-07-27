
function ServiseCard({ img, title, info, bg, number }) {
    
    return (
        <div data-aos-duration="1000" data-aos="flip-left" className={`bg-card-bg servise_card card rounded-[34px] py-10 px-4 md:px-6 s_card${number}`}>
            <div style={{ background: `${bg}` }} className={`flex items-center  w-[74px] h-[74px]  rounded-full mx-auto`}>
                <img data-aos="zoom-in" className='mx-auto my-3' src={img} alt={info} />
            </div>
            <h3 className='text-center text-white text-2xl py-3'>{title}</h3>
            <p className='text-center text-white text-base font-normal leading-[26px]'>{info}</p>
            <p className='text-white text-center pt-5 flex justify-center align-middle items-center'>
                Learn more
                <i className="pl-1 pt-1 bi bi-arrow-right"></i>
            </p>
        </div >
    )
}

export default ServiseCard

function TopContact({ title, info }) {
  return (
    <div data-aos="fade-up" className='max-w-[800px] mx-auto pb-6 px-5 lg:px-0'>
      <h2 className='text-center text-white font-bold text-2xl md:text-3xl lg:text-[42px] md:py-4'>{title}</h2>
      <p className='text-center text-white text-sm md:text-base font-normal py-3 md:py-4'>{info}</p>
    </div>
  )
}

export default TopContact
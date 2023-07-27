
function TopText({ title, info }) {
  return (
    <div data-aos-duration="1000" data-aos="fade-up" className='max-w-[600px] mx-auto'>
      <h2 className='text-center text-white font-bold text-2xl md:text-[32px] lg:text-[42px] md:py-4'>{title}</h2>
      <p className='text-center text-white text-sm md:text-base font-normal py-3 md:py-4'>{info}</p>
    </div>
  )
}

export default TopText
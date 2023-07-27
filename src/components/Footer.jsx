import { logo } from '../assets/data'


function Footer() {
    return (
        <footer className='container'>
            <div className="flex justify-between md:gap-4 text-white">
                <div data-aos="fade-left" className="box">
                    <img src={logo} alt="logo" />
                </div>
                <div data-aos="fade-right" className="flex flex-col md:flex-row gap-8 lg:w-1/2 justify-around pl-12 sm:pl-0 sm:w-2/3 w-7/12">
                    <div className="links">
                        <p className='link-header text-xl pb-8'>Supports</p>
                        <ul>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Help center </a></li>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Feedbcak</a></li>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Contact us </a></li>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Terms conditins</a></li>
                        </ul>
                    </div>
                    <div className="links">
                        <p className="link-header text-xl pb-8">Resources</p>
                        <ul>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Download app</a></li>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Blog</a></li>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>What’s new</a></li>
                            <li className='pb-4 items-center flex gap-2'><i className='bi bi-arrow-right'></i><a className='text-base hover:translate-x-2 duration-300' href='#home'>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
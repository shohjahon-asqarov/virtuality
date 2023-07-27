import { logo } from '../assets/data' ;

function Footer() {
    return (
        <footer className='container'>
            <div className="flex justify-between text-white">
                <div data-aos="fade-left" className="box">
                    <a href="#navbar">
                        <img src={logo} alt="logo" />
                    </a>
                </div>

                <div data-aos="fade-right" className="flex flex-col md:flex-row lg:w-1/2 justify-around pl-12 sm:pl-0 sm:w-2/3 w-7/12">
                    <div className="links mb-5">
                        <h3 className='link-header text-xl pb-8'>Supports</h3>
                        <ul>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Help center </a></li>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Feedbcak</a></li>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Contact us </a></li>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Terms conditins</a></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h3 className="link-header text-xl pb-8">Resources</h3>
                        <ul>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Download app</a></li>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Blog</a></li>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>What’s new</a></li>
                            <li className='footer-li'><i className='bi bi-arrow-right'></i><a className='footer-link' href='#home'>Sitemap</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
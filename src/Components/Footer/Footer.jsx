import { BsTelephonePlus } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { CiLocationOn } from 'react-icons/ci';

const Footer = () => {
    return (
        <footer>
            <footer data-aos="fade-down" className="footer p-10 md:p-20 lg:p-28 text-white  bg-[#363636]">

                <nav className="lg:ml-28 text-lg">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Event</a>
                    <a className="link link-hover">Schedule</a>
                    <a className="link link-hover">Blog</a>
                </nav>

                <nav className=" lg:w-96 text">
                    <header className="footer-title mx-auto text-5xl">TechBay</header>
                    <h1 className="text-center text-xl mx-auto mb-10 text-orange-500">DON’T MISS OUR FEATURE UPDATE</h1>
                    <div className="relative w-full">
                        <input type="text" placeholder="Your email" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </nav>

                <nav className="text-lg">
                    <header className="footer-title">Contact</header>
                    <div className='flex items-center gap-3'>
                        <BsTelephonePlus className='text-2xl'></BsTelephonePlus>
                        <a className="link link-hover">+1 763-227-5032</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <HiOutlineMailOpen className='text-2xl'></HiOutlineMailOpen>
                        <a className="link link-hover">info@TechBay.com</a>
                    </div>
                    <div className='flex items-center gap-3'>
                        <CiLocationOn className='text-2xl'></CiLocationOn>
                        <a className="link link-hover">2752 Willison Street Eagan,<br /> United State</a>
                    </div>

                </nav>

            </footer>
            <aside className="bg-[#363636] text-white text-center p-5">
                <hr className="p-2" />
                <p>Copyright © 2023 - All right reserved by TechBay Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;
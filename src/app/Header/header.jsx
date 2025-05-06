'use client';
import { FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6';

export default function Header() {

    return (
        <section>
            <div className="flex justify-between items-center gap-4 bg-[#2c3e50] p-2 px-16">
                <div className='flex gap-6'>
                    <div className="rounded-full bg-[#34495e] p-2 hover:bg-[#3d566e] transition">
                        <FaFacebookF className="text-white text-sm" />
                    </div>
                    <div className="rounded-full bg-[#34495e] p-2 hover:bg-[#3d566e] transition">
                        <FaInstagram className="text-white text-sm" />
                    </div>
                    <div className="rounded-full bg-[#34495e] p-2 hover:bg-[#3d566e] transition">
                        <FaXTwitter className="text-white text-sm" />
                    </div>
                </div>

                <div>
                    <span className='text-white text-sm'>
                        Empower Your Wealth With Acme Group
                    </span>
                </div>
                <div className='flex gap-4'>
                    <span className='flex gap-2 items-center text-white text-sm'><FaEnvelope />info@acmegroup.co.in</span>
                    <span className='flex gap-2 items-center text-white text-sm'><FaPhone />+91-9077755500</span>
                </div>
            </div>
            <header className="w-full sticky top-0 bg-white shadow z-50 flex justify-between items-center p-4 lg:px-16 shadow">
                <div className="flex items-center gap-4" style={{ width: "180px" }}>
                    <img src="/Images/logo.png" alt="Logo" className='w-full' />
                </div>

                <nav className="flex gap-12">
                    <ul className='flex gap-8 items-center text-black-600 font-medium'>
                        <li>
                            <a href="#" className="hover:text-black-500 font-bold">Home</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black-500 font-bold">About Us</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black-500 font-bold">What We Do</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black-500 font-bold ml-4">Latest</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black-500 font-bold">FAQs</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-black-500 font-bold">Reach Us</a>
                        </li>
                    </ul>
                    <div>
                        <button className='bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full flex items-center'><FaUser />Login</button>
                    </div>
                </nav>
            </header>

            <div className="bannerSection relative w-full h-[512px]">
                <div className="bannerImage w-full h-full">
                    <img
                        src="/Images/banner.png"
                        alt="banner"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="contentWrapper absolute top-1/2 left-[100px] -translate-y-1/2 max-w-md">
                    <h2 className="text-4xl font-semibold leading-tight">Achieve</h2>
                    <h2 className="text-4xl font-semibold leading-tight">Financial Goal</h2>
                    <h2 className="text-4xl font-semibold leading-tight">
                        is <span className="text-yellow-500 font-bold">Efficiently</span>
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Lorem ipsum is placeholder text commonly used in the graphic.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-5 rounded-full">
                            Let's talk with us
                        </button>
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-5 rounded-full">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

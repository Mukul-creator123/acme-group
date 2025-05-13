'use client';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa6';
import { Dialog } from 'primereact/dialog';
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

export default function Header() {
    const [visible, setVisible] = useState(false);
    const [formData, setformData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });
    };

    const passwordToggle = () => {
        setShowPassword(!showPassword);
    }

    return (
        <section>
            <div className="flex justify-between items-center gap-4 bg-[#2c3e50] p-2 px-16">
                <div className='flex gap-3' style={{width: "33.3%"}}>
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

                <div style={{width: "33.3%"}}>
                    <span className='text-white text-sm'>
                        Empower Your Wealth With Acme Group
                    </span>
                </div>
                <div className='flex gap-4 justify-end' style={{width: "33.3%"}}>
                    <span className='flex gap-2 items-center text-white text-sm'><FaEnvelope className='text-yellow-500' />info@acmegroup.co.in</span>
                    <span className='flex gap-2 items-center text-white text-sm'><FaPhone className='text-yellow-500' />+91-9077755500</span>
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
                    <div onClick={() => setVisible(true)}>
                        <button className='bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-full flex items-center btnHover'><FaUser className='text-sm' />Login</button>
                    </div>

                    <Dialog className="custom-dialog bg-white rounded-md" visible={visible} style={{ width: '35vw' }} onHide={() => setVisible(false)}>
                        <div className="flex items-center justify-center pb-04 px-2 shadow-lg">
                            <div className="bg-white rounded-lg p-8 pt-0 w-full max-w-md card">
                                <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                                <div>
                                    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
                                        Email<span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <input type="email" name="email" placeholder='Enter email' className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
                                        Password<span className='text-red-600 text-lg'>*</span>
                                    </label>
                                    <div className='relative'>
                                        <input type={showPassword ? "text" : "password"} placeholder='Enter password' name="password" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={formData.password} onChange={handleChange} required />
                                        <span className='absolute -translate-y-1/2 btnHover' onClick={passwordToggle} style={{ top: "50%", right: "10px" }}>{showPassword ? <FaEye /> : <IoMdEyeOff />}</span>
                                    </div>
                                </div>
                                <button className="bg-red-600 btnHover hover:bg-red-700 w-full mt-6 text-white font-medium py-3 px-4 rounded-full">
                                    Sign In
                                </button>
                                <p className="mt-4 text-sm text-center text-gray-600">
                                    Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
                                </p>
                            </div>
                        </div>
                    </Dialog>
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

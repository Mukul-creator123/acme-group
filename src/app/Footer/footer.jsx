import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#293A58] text-white py-8 px-6 lg:mt-12 mt-10" style={{ paddingLeft: "40px" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:text-left text-center sm:grid-cols-2 md:grid-cols-5 gap-6 border-b border-white/20 pb-6">
                <div className="hidden lg:block">
                    <div className="flex items-center gap-4 footerLogo" style={{ width: "180px" }}>
                        <img src='/Images/footerLogo.png' alt='footer logo' className='w-full' />
                    </div>
                    <p className="mt-2 font-semibold footerHeading">For Updates</p>
                    <p className="text-md">Follow us on Instagram</p>
                    <div className='flex lg:justify-start justify-center gap-6 mt-2'>
                        <div className="rounded-full bg-[#fff] p-2 w-[35px] h-[35px] hover:bg-[#3d566e] transition">
                            <img src="/Images/facebook.png" className="w-full h-full object-contain" />
                        </div>

                        <div className="rounded-full bg-[#fff] p-2 w-[35px] h-[35px] hover:bg-[#3d566e] transition">
                            <img src="/Images/prime_twitter.png" className="w-full h-full object-contain" />
                        </div>

                        <div className="rounded-full bg-[#fff] p-2 w-[35px] h-[35px] hover:bg-[#3d566e] transition">
                            <img src="/Images/instagram.png" className="w-full h-full object-contain" />
                        </div>

                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-2 footerHeading">Noida Office</h4>
                    <p className="lg:text-md text-sm">
                        208 & 209, Ocean Complex, P Block, Sector 18,<br />
                        Noida – 201301
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2 footerHeading">Delhi Office</h4>
                    <p className="lg:text-md text-sm">
                        A-81, 1st Floor,
                        South Extension Part-2,
                        New Delhi -110049
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2 footerHeading">Mumbai Office</h4>
                    <p className="lg:text-md text-sm">
                        B-706, Kanakia Wall Street,
                        7th Floor, B-Wing, Andheri (East),
                        Mumbai - 400099
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2 footerHeading">Call Us</h4>
                    <div className="lg:block hidden">
                        <p className="flex items-center lg:text-md text-sm gap-2 lg:justify-start justify-center">
                            <span><IoCall /></span> +91-9077 7666 00
                        </p>
                        <p className="flex items-center lg:text-md text-sm gap-2 mt-1 lg:justify-start justify-center">
                            <span><IoCall /></span> +91-9077 7555 00
                        </p>
                    </div>

                    <div className="lg:hidden block flex gap-1 items-center justify-center">
                        <p className="flex items-center lg:text-md text-sm gap-2 lg:justify-start justify-center">
                            <span><IoCall className="text-orange-400" /></span> +91-9077 7666 00 +
                        </p>
                        <p className="flex items-center lg:text-md text-sm gap-2 lg:justify-start justify-center">
                            ,91-9077 7555 00
                        </p>
                    </div>

                    <div className="lg:hidden block flex items-center justify-center gap-1">
                        <MdEmail className="text-orange-400" /><span>info@acmegroup.co.in</span>
                    </div>

                    <div className="block lg:hidden mt-4">
                        <div className="flex items-center gap-4 footerLogo" style={{ width: "160px" }}>
                            <img src='/Images/footerLogo.png' alt='footer logo' className='w-full' />
                        </div>
                        <p className="mt-2 font-semibold footerHeading">For Updates</p>
                        <p className="text-md">Follow us on Instagram</p>
                        <div className='flex lg:justify-start justify-center gap-6 mt-2'>
                            <div className="rounded-full bg-[#fff] p-2 w-[35px] h-[35px] hover:bg-[#3d566e] cursor-pointer transition">
                                <img src="/Images/facebook.png" className="w-full h-full object-contain" />
                            </div>

                            <div className="rounded-full bg-[#fff] p-2 w-[35px] h-[35px] hover:bg-[#3d566e] transition cursor-pointer">
                                <img src="/Images/prime_twitter.png" className="w-full h-full object-contain" />
                            </div>

                            <div className="rounded-full bg-[#fff] p-2 w-[35px] h-[35px] hover:bg-[#3d566e] transition cursor-pointer">
                                <img src="/Images/instagram.png" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center text-md mt-6">&copy; 2025. All Rights Reserved by Acme Group</p>
        </footer>
    );
};

export default Footer;

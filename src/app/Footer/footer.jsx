import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#293A58] text-white py-8 px-6 mt-12" style={{ paddingLeft: "40px" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 border-b border-white/20 pb-6">
                <div>
                    <div className="flex items-center gap-4" style={{ width: "140px" }}>
                        <img src='/Images/footerLogo.png' alt='footer logo' className='w-full' />
                    </div>
                    <p className="mt-2 font-semibold">For Updates</p>
                    <p className="text-sm">Follow us on Instagram</p>
                    <div className='flex gap-6 mt-2'>
                        <div className="rounded-full bg-[#fff] p-2 hover:bg-[#3d566e] transition">
                            <FaFacebookF className="text-black text-sm" />
                        </div>
                        <div className="rounded-full bg-[#fff] p-2 hover:bg-[#3d566e] transition">
                            <FaInstagram className="text-black text-sm" />
                        </div>
                        <div className="rounded-full bg-[#fff] p-2 hover:bg-[#3d566e] transition">
                            <FaXTwitter className="text-black text-sm" />
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Noida Office</h4>
                    <p className="text-sm">
                        208 & 209, Ocean Complex, P Block, Sector 18,<br />
                        Noida – 201301
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Delhi Office</h4>
                    <p className="text-sm">
                        A-81, 1st Floor,<br />
                        South Extension Part-2,<br />
                        New Delhi -110049
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Mumbai Office</h4>
                    <p className="text-sm">
                        B-706, Kanakia Wall Street,<br />
                        7th Floor, B-Wing, Andheri (East),<br />
                        Mumbai - 400099
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-2">Call Us</h4>
                    <p className="flex items-center text-sm gap-2">
                        📞 +91-9077 7666 00
                    </p>
                    <p className="flex items-center text-sm gap-2 mt-1">
                        📞 +91-9077 7555 00
                    </p>
                </div>
            </div>
            <p className="text-center text-xs mt-6">&copy; 2025. All Rights Reserved by Acme Group</p>
        </footer>
    );
};

export default Footer;

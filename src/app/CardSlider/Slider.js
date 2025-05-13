import React from "react";

const logos = [
    { 
        src: "/images/dabur.png", alt: "Dabur" 
    },
    { 
        src: "/images/nhai.png", alt: "NHAI" 
    },
    { 
        src: "/images/hdfc.png", alt: "HDFC Home Loans" 
    },
    { 
        src: "/images/cbi.png", alt: "Central Bank of India" 
    },
];

const LogoCard = ({ src, alt }) => (
    <div className="shadow-md rounded-xl p-4 flex items-center justify-center w-40 h-24">
        <img src={src} alt={alt} className="max-h-16 object-contain" />
    </div>
);

const Slider = () => {
    return (
        <marquee
            direction="left">
            <marquee behavior="alternate">
                <div className="flex flex-wrap gap-4 justify-center py-6">
                    {logos.map((logo, index) => (
                        <LogoCard key={index} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </marquee>
        </marquee>
    );
};

export default Slider;

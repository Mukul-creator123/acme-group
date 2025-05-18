"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function SimpleSlider() {
    const [client, setClient] = useState(false);

    useEffect(() => {
        setClient(true);
    }, []);

    const settings = {
        dots: false,
        autoplay: false,
        arrows: false,
        infinite: true,
        speed: 2500,       // slow speed for smooth scroll
        autoplaySpeed: 0,        // no delay between scrolls
        cssEase: 'linear',       // continuous linear motion
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if (!client) return null;

    const images = [
        {
            logo: "/IMAGES/Birla.png",
            name: "HIndalco Industries",
            sub: "Ltd.",
            price: "625.50",
            changePercent: "-0.50%",
            changeValue: "-3.15"
        },
        {
            logo: "/IMAGES/ICICI.png",
            name: "ICICI BANK",
            sub: "Ltd.",
            price: "1,428.10",
            changePercent: "-0.05%",
            changeValue: "-0.70"
        },
        {
            logo: "/IMAGES/Larsen.png",
            name: "Larsen & Tourbo",
            sub: "Ltd.",
            price: "3,350.40",
            changePercent: "-0.50%",
            changeValue: "-3.15"
        },
        {
            logo: "/IMAGES/Reliance.png",
            name: "Reliance Industries",
            sub: "Ltd.",
            price: "1,389.90",
            changePercent: "+1.54%",
            changeValue: "+21.10"
        },
        {
            logo: "/IMAGES/SBI.png",
            name: "State Bank of",
            sub: "India",
            price: "820.85",
            changePercent: "+0.43%",
            changeValue: "+3.50"
        }
    ];

    return (
        <div className="lg:mt-12 mt-10 w-[100%] ">
            <Slider {...settings}>
                {images.map((image, index) => {
                    const isPositive = image.changeValue.startsWith("+");
                    const isBothPositive =
                        parseFloat(image.changePercent) >= 0 &&
                        parseFloat(image.changeValue) >= 0;
                    return (
                        <div key={index} className='p-2 '>
                            <div className="bg-white shadow-md border border-gray-300 rounded-xl  p-4 space-y-2">
                                <div>
                                    <img src={image.logo} alt={`Logo ${index + 1}`} className="h-10 w-auto object-contain" />
                                </div >
                                <h1 className="lg:text-md text-sm font-bold mb-0 text-[18px] tracking-[1px]">{image.name}</h1>
                                <div className="flex justify-between">
                                    <h2 className=" lg:text-md text-sm font-bold text-[18px]  ">{image.sub}</h2>
                                    <h3 className=" lg:font-bold text-sm text-[20px] ">{image.price}</h3>
                                </div>
                                <div className={`text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-500'}`}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2 items-center">
                                            <div>
                                                {isBothPositive ? <FaArrowUp /> : <FaArrowDown />}
                                            </div>
                                            <div className="lg:text-md text-sm text-[20px] "> {image.changePercent}</div>
                                        </div>
                                        <div>{image.changeValue}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

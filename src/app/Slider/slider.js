"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

export default function SimpleSlider() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const settings = {
        dots: false,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 2500,       // slow speed for smooth scroll
       // autoplaySpeed: 0,        // no delay between scrolls
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
                    slidesToShow: 2,
                }
            }
        ]
    };

    if (!isClient) return null;

    const images = [

        {
            logo: "/IMAGES/L6.jpg",
        },
        {
            logo: "/IMAGES/L1.jpg",
        },
        {
            logo: "/IMAGES/L2.jpg",
        },
        {
            logo: "/IMAGES/l4.jpg",
        },
        {
            logo: "/IMAGES/L5.jpg",
        }

    ]

    return (
        <>
            <div >
                <div className=" bg-cover lg:mt-12 mt-10 px-0 py-[60px] " style={{ backgroundImage: "url('/IMAGES/bgg.jpg')" }}>
                    <div className=' top-0'>
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className=" justify-center px-3">
                                    <img
                                        src={image.logo}
                                        alt={`Image ${index + 1}`}
                                        className="object-contain h-full w-[100%] rounded-xl"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
}

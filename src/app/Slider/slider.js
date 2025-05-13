"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
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
            <div className="adadsa">
               <div className="w-full bg-cover bg-center p-10" style={{ backgroundImage: "url('/IMAGES/bgg.jpg')" }}>
    

                <div className=' top-0'>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className=" justify-center   ">
                                <img
                                    src={image.logo}
                                    alt={`Image ${index + 1}`}
                                    className="object-contain h-full w-[243px] rounded-md"
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

"use client"
import React, { useState } from 'react';
import "@fontsource/asap";

const companies = [
    {
        name: 'ACME Wealth',
        logo: '/Images/icon1.png',
        description: `ACME Wealth Pvt. Ltd. offers premier investment solutions in financial advisory, capital markets, wealth and portfolio management, and trading advisory services for equities and debt. Our experts tailor strategies to your goals with transparency and integrity. Secure your financial future today.`,
        image: '/images/wealth.jpg',
    },
    {
        name: 'ACME Insurance',
        logo: '/Images/icon2.png',
        description: 'Insurance services content goes here...',
        image: '/images/insurance.jpg',
    },
    {
        name: 'ACME Finvest',
        logo: '/Images/icon3.png',
        description: 'Finvest services content goes here...',
        image: '/images/finvest.jpg',
    },
    {
        name: 'ACME Bullion',
        logo: '/Images/icon4.png',
        description: 'Bullion services content goes here...',
        image: '/images/bullion.jpg',
    },
    {
        name: 'SSK',
        logo: '/Images/icon5.png',
        description: 'SSK services content goes here...',
        image: '/images/ssk.jpg',
    },
    {
        name: 'ACME Finvest',
        logo: '/Images/icon3.png',
        description: 'Finvest services content goes here...',
        image: '/images/finvest.jpg',
    },
    {
        name: 'ACME Bullion',
        logo: '/Images/icon4.png',
        description: 'Bullion services content goes here...',
        image: '/images/bullion.jpg',
    },
    {
        name: 'SSK',
        logo: '/Images/icon5.png',
        description: 'SSK services content goes here...',
        image: '/images/ssk.jpg',
    },
];

export default function AcmeGroup() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCompany = companies[activeIndex];

    return (
        <div className='lg:mt-12 mt-10'>
            <div className='sectionTitle text-center'>
                <h2 className='flex justify-center lg:flex-row flex-col gap-2 text-[28px] font-bold visionTitle'>
                    <span className='text-orange-400 fontSize'>ACME</span> <span className='fontSize'>GROUP OF COMPANIES</span>
                </h2>

                <h2 className='text-[28px] font-bold'>
                    <span className='text-orange-400 fontSize'>ACME</span> <span className='fontSize'>GROUP OF COMPANIES</span>
                </h2>

                <p className='text-gray-500 lg:text-lg text-md lg:px-0 px-12'>Opportunities don't just happen you create them.</p>
                <p className='mt-2 sectionTitle lg:px-0 px-6'>The ACME Group is a vibrant and dynamic organization </p> <p className='lg:px-0 px-6'>with a mission to be a valued service provider and our customers’ first choice.</p>
            </div>

            <div className="mx-auto flex lg:flex-row flex-col-reverse gap-6 mt-6 lg:px-12 px-4 sliderWidth">
                <div className="flex flex-col gap-4 cardWidth [direction:ltr]">
                    <div
                        className="flex flex-col gap-4 cardWidth overflow-y-scroll scrollbar-hidden"
                        style={{ width: "100%", direction: "rtl", height: "100%" }}
                    >
                        <div className='flex flex-col gap-4' style={{ direction: "ltr" }}>
                            {companies.map((company, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`font-semibold flex items-center w-full px-4 py-2 rounded-md border shadow-sm text-md font-medium ${activeIndex === index ? 'bg-black text-white' : 'bg-white text-gray-700'
                                        }`}
                                >
                                    <img
                                        src={company.logo}
                                        alt={company.name}
                                        className={`${activeIndex === index
                                            ? 'bg-white rounded-full w-10 h-10 p-2 text-white'
                                            : 'bg-gray-100 p-2 rounded-full w-10 h-10 text-gray-700'
                                            }`}
                                    />
                                    {company.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className='flex gap-8 lg:flex-row flex-col layoutWidth'>
                    <div className=' lg:w-1/2 w-full'>
                        <div className='AcmeImage h-full'>
                            <img src="/Images/AcmeGroup.png" alt='Acame Group Logo' />
                        </div>
                    </div>
                    <div className=' lg:w-1/2 w-full'>
                        <p>
                            ACME Wealth Pvt. Ltd. offers premier investment solutions in financial advisory, capital markets, wealth and portfolio management,and trading advisory services for equities and debt. Our experts tailor strategies to your goals with transparency and integrity. Secure your financial future today.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

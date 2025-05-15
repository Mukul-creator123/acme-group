"use client"
import React, { useState } from 'react';

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
];

export default function AcmeGroup() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeCompany = companies[activeIndex];

    return (
        <div className='lg:mt-12 mt-10'>
            <div className='sectionTitle text-center'>
                <h2 className='flex justify-center lg:flex-row flex-col gap-2 text-[28px] font-bold'>
                    <span className='text-orange-400'>ACME</span> GROUP OF COMPANIES
                </h2>
                <p className='text-gray-500'>Opportunities don't just happen you create them.</p>
                <p className='mt-2'>The ACME Group is a vibrant and dynamic organization </p> <p>with a mission to be a valued service provider and our customers’ first choice.</p>
            </div>

            <div className="mx-auto flex lg:flex-row flex-col gap-6 mt-6 lg:px-12 px-4 px-10">
                <div className="flex flex-col gap-4 cardWidth">
                    {companies.map((company, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`flex items-center gap-3 px-4 py-2 rounded-md border shadow-sm text-sm font-medium ${activeIndex === index ? 'bg-black text-white' : 'bg-white text-gray-700'}`}>
                            <img src={company.logo} alt={company.name} className={`${activeIndex === index ? 'bg-white rounded-full w-10 h-10 p-2 text-white' : 'bg-gray-100 p-2 rounded-full w-10 h-10 text-gray-700'}`} />
                            {company.name}
                        </button>
                    ))}
                </div>
                <div className='cardWidth'>
                    <div className='AcmeImage'>
                        <img src="/Images/AcmeGroup.png" alt='Acame Group Logo' />
                    </div>
                </div>
                <div className='cardWidth'>
                    <p>
                        ACME Wealth Pvt. Ltd. offers premier investment solutions in financial advisory, capital markets, wealth and portfolio management,and trading advisory services for equities and debt. Our experts tailor strategies to your goals with transparency and integrity. Secure your financial future today.
                    </p>
                </div>
            </div>
        </div>
    );
}

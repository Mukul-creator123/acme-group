import React from 'react';

const AcmeVisionSection = () => {
    return (
        <section className="bg-gray-50 py-12 px-4 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-26">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-500 mb-2">"Whatever you are, strive to be excellent."</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                        <span className="text-orange-400">ACME</span> GROUP <br /> VISION
                    </h2>
                    <p className="text-md text-gray-600 mt-4 leading-relaxed">
                        Our vision is to become the most sought-after and trusted provider of financial
                        solutions in the industry, enhancing our rating and solidifying our position as
                        India’s foremost service provider.
                    </p>
                </div>

                <div className='flex lg:w-1/2 gap-8'>
                    <div className="flex flex-wrap flex-col justify-between lg:w-1/2 mt-8 gap-8">
                        <div className="bg-white rounded-xl shadow-lg py-20 flex flex-col pl-6">
                            <h3 className="text-5xl font-bold text-gray-900">11+</h3>
                            <p className="text-md text-black-600 mt-2">Years in Business</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg py-20 flex flex-col pl-6">
                            <h3 className="text-5xl font-bold text-gray-900">50+</h3>
                            <p className="text-lg text-black-600 mt-2">Team Members</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-col gap-8 lg:w-1/2">
                        <div className="bg-white rounded-xl shadow-lg py-20 flex flex-col pl-6">
                            <h3 className="text-5xl font-bold text-gray-900">35,000+</h3>
                            <p className="text-lg text-black-600 mt-2">Satisfied Investors</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg py-20 flex flex-col pl-6">
                            <h3 className="text-5xl font-bold text-gray-900">175+</h3>
                            <p className="text-lg text-black-600 mt-2">Awards Won</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AcmeVisionSection;

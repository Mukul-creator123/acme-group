import React from 'react';

const AcmeVisionSection = () => {
    return (
        <section className="bg-gray-50 py-12 px-4 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start justify-between lg:gap-26 gap-6">
                <div className="lg:w-1/2">
                    <p className="text-lg text-gray-500 mb-2">"Whatever you are, strive to be excellent."</p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-snug lg:block hidden">
                        <span className="text-orange-400">ACME</span> GROUP <br /> VISION
                    </h2>

                    <h2 className="lg:text-4xl text-center text-3xl lg:hidden block font-bold leading-snug">
                        <span className="text-orange-400">ACME</span> GROUP VISION
                    </h2>

                    <p className="text-md text-gray-600 mt-4 leading-relaxed">
                        Our vision is to become the most sought-after and trusted provider of financial
                        solutions in the industry, enhancing our rating and solidifying our position as
                        India’s foremost service provider.
                    </p>
                </div>

                <div className='flex lg:w-1/2 w-full lg:gap-8 gap-4'>
                    <div className="flex flex-wrap flex-col justify-between lg:w-1/2 w-full mt-8 lg:gap-8 gap-4">
                        <div className="bg-white rounded-xl shadow-lg lg:py-20 py-10 flex flex-col pl-6">
                            <h3 className="lg:text-5xl text-2xl font-bold text-gray-900">11+</h3>
                            <p className="lg:text-lg text-sm text-black-600 mt-2">Years in Business</p>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg lg:py-20 py-10 flex flex-col pl-6">
                            <h3 className="lg:text-5xl text-2xl font-bold text-gray-900">50+</h3>
                            <p className="lg:text-lg text-sm text-black-600 mt-2">Team Members</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap flex-col lg:gap-8 gap-4 lg:w-1/2 w-full">
                        <div className="bg-white rounded-xl shadow-lg lg:py-20 py-10 flex flex-col pl-6">
                            <h3 className="lg:text-5xl text-2xl font-bold text-gray-900">35,000+</h3>
                            <p className="lg:text-lg text-sm text-black-600 mt-2">Satisfied Investors</p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg lg:py-20 py-10 flex flex-col pl-6">
                            <h3 className="lg:text-5xl text-2xl font-bold text-gray-900">175+</h3>
                            <p className="lg:text-lg text-sm text-black-600 mt-2">Awards Won</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AcmeVisionSection;

import React from 'react';

const AcmeVisionSection = () => {
    const stats = [
        { value: '11+', label: 'Years in Business' },
        { value: '35,000+', label: 'Satisfied Investors' },
        { value: '50+', label: 'Team Members' },
        { value: '175+', label: 'Awards Won' },
    ];

    return (
        <section className="bg-gray-50 py-12 mt-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <p className="text-gray-500 text-sm mb-2">
                        "Whatever you are, strive to be excellent."
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        <span className="text-orange-400">ACME</span> GROUP <br /> VISION
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-md">
                        Our vision is to become the most sought-after and trusted provider of financial solutions in the industry, enhancing our rating and solidifying our position as India’s foremost service provider.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-xl p-6 text-center"
                        >
                            <h3 className="text-3xl font-bold">{stat.value}</h3>
                            <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AcmeVisionSection;

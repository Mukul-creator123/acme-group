import React from "react";

const InvestorsSection = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between bg-white lg:px-12 px-4 mt-10 rounded-2xl overflow-hidden gap-6">
            <div className="flex-1">
                <p className="text-lg text-gray-400 uppercase lg:text-start text-center tracking-wider mb-2">We're here to help</p>
                <h2 className="InvestorTextSize font-bold text-gray-900 forDes leading-tight">
                    Over <span className="text-orange-500">35000</span><br />
                    satisfied investors<br />
                    in our treasury.
                </h2>

                <h2 className="text-4xl forMob font-bold text-center text-gray-900 leading-tight">
                    Over <span className="text-orange-500">35000 </span>
                    <span>
                        satisfied investors
                        in our treasury.
                    </span>
                </h2>

            </div>

            <div className="flex-1 text-gray-600 text-sm lg:text-start text-center leading-relaxed textSize">
                ACME Group specializes in delivering cutting-edge Investment Solutions tailored to meet your unique needs and effectively address business challenges. With a strong presence in the stock market and among traders, we pride ourselves on being your comprehensive one-stop shop for all investment requirements.
            </div>
        </div>
    );
};

export default InvestorsSection;

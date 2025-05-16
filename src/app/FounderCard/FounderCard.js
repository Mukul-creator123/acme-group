export default function FounderCard() {
    return (
        <div className="bg-white border-l border-gray-300  lg:mt-12 mt-10 lg:mx-12 mx-4 rounded-2xl flex flex-col md:flex-row items-center relative overflow-hidden    "
            style={{
                backgroundImage: 'url("/Images/bgg1.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%, 100%',
                backgroundSize: 'cover',
            }}
        >
            <div className="bgImage"></div>
            <div className="z-10 cardWidth">
                <img
                    src="/Images/fcg2.png"
                    alt="Ramon Talwwar"
                    className="rounded-xl h-full transform"
                />
            </div>

            <div className="z-10 flex-1 cardWidth pl-25">
                <p className="text-sm text-gray-500 text-center lg:text-start">
                    Meet Founder of <span className="text-orange-500 font-semibold">ACME</span> Group
                </p>
                <h2 className="text-4xl font-bold text-gray-800 mt-1 text-center lg:text-start">Ramon Talwwar</h2>
                <p className="text-[22px] font-medium text-gray-700 mt-2 text-center lg:text-start">
                    Not all dreamers are winners , but all winners are dreamers.
                </p>
                <p className="text-sm text-gray-600 mt-2 text-center lg:text-start">
                    Ramon Talwwar, a results-focused strategic professional with over two decades of
                    leadership experience in capital markets and investment banking.
                </p>
            </div>

            <div className="z-10 w-full font-bold md:w-64 mt-6 lg:pb-0 pb-6 md:mt-0 border-l border-gray-300 pl-8 cardWidth">
                <h3 className="text-md font-semibold text-gray-800 mb-3 text-center lg:text-start">Recent Posts</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li className="text-center mb-6 lg:text-start ">
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Derivatives Update for Tuesday, 9th July 2024
                    </li>
                    <li className="mb-6">
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Market Outlook, 9th July 2024
                    </li>
                    <li  className="mb-6">
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Derivatives Update for Tuesday, 9th July 2024
                    </li>
                    <li  className="mb-6">
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Derivatives Update for Tuesday, 9th July 2024
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default function FounderCard() {
    return (
        <div className="bg-white lg:mt-12 mt-10 lg:mx-10 mx-4 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden"
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
                    src="/Images/man.png"
                    alt="Ramon Talwwar"
                    className="rounded-xl w-48 md:w-56 transform rotate-2"
                />
            </div>

            <div className="z-10 flex-1 cardWidth">
                <p className="text-sm text-gray-500">
                    Meet Founder of <span className="text-orange-500 font-semibold">ACME</span> Group
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">Ramon Talwwar</h2>
                <p className="text-lg font-medium text-gray-700 mt-2">
                    Not all dreamers are winners, but all winners are dreamers.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                    Ramon Talwwar, a results-focused strategic professional with over two decades of
                    leadership experience in capital markets and investment banking.
                </p>
            </div>

            <div className="z-10 w-full md:w-64 mt-6 md:mt-0 border-l border-gray-300 pl-6 cardWidth">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Recent Posts</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li>
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Derivatives Update for Tuesday, 9th July 2024
                    </li>
                    <li>
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Market Outlook, 9th July 2024
                    </li>
                    <li>
                        <span className="text-xs text-gray-400">July 9, 2024</span><br />
                        Derivatives Update for Tuesday, 9th July 2024
                    </li>
                </ul>
            </div>
        </div>
    );
}

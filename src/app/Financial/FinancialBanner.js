const FinancialBanner = () => {
    return (
        <section className="flex flex-col-reverse  lg:flex-row items-center justify-between lg:px-12 px-4 lg:mt-12 bg-white rounded-lg">
            <div className="lg:w-1/2 space-y-6">
                <div>
                    <p className="text-gray-500 lg:text-left text-center">Navigating Your Financial Journey With</p>
                    <h1 className="text-3xl font-bold lg:text-left text-center">
                        <span className="text-yellow-500">ACME</span>{' '}
                        <span className="text-gray-800">GROUP</span>
                    </h1>
                </div>
                <p className="text-gray-700 text-sm lg:text-left text-center">
                    At ACME Group, we go beyond traditional services by crafting customized
                    solutions to match your individual investment needs. Our expertise spans a
                    wide range of financial areas, including capital markets, wealth
                    management, portfolio management, investment banking, corporate finance, and
                    alternative asset management.
                </p>
                <p className="text-gray-700 text-sm lg:text-left text-center">
                    We cater to a diverse clientele, from thriving corporations to high-net-worth
                    individuals and families, guiding them through the intricate landscape of
                    investments.
                </p>
                <button className="bg-red-600 flex justify-center text-white px-6 py-2 rounded-full hover:bg-red-700 transition">
                    Download Profile
                </button>
            </div>

            <div className="relative">
                    {/* <img
                        src="/Images/financial1.png"
                        alt="Finance visual 1"
                        className="w-full"
                    /> */}
                <div className="">
                    <img
                        src="/Images/financial2.png"
                        alt="Finance visual 2"
                        className="w-full"
                    />
                </div>
                <div className="img" style={{ width: "60%" }}>
                    <img
                        src="/Images/financial3.png"
                        alt="Finance visual 3"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default FinancialBanner;

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">React cuccos</span>
            </div>

            <div className="block lg:hidden">



                <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path
                            d="M0 0h20v20H0V0zm2 3h16v2H2V3zm0 5h16v2H2V8zm0 5h16v2H2v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4"
                    >
                        Szifon
                    </a>
                </div>
                <div>
                    <a
                        href="#"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        Egy gomb
                    </a>
                </div>
            </div>
        </nav>

    )
}
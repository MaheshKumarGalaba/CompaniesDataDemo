import { useEffect } from "react";


const HeaderContent = () => {


    useEffect(() => {

    }, [])


    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 via-sky-600 to-cyan-500 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-center text-center">
                <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-center">
                    Companies Corp Directory
                </h1>
            </div>
        </header>

    )

}

export default HeaderContent;
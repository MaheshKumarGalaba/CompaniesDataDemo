import { useEffect } from "react";


const FooterContent = () => {


    useEffect(() => {

    }, [])


    return (
        <>
            <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-cyan-500 via-sky-600 to-blue-500 text-white shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    <div>
                        <h2 className="text-lg md:text-xl font-semibold tracking-wide">
                            © 2025 Company Corp Directory
                        </h2>
                        <p className="text-sm text-cyan-100">
                            All rights reserved to <span className="font-semibold text-white">Mahesh Kumar Galaba</span>
                        </p>
                    </div>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <a
                            href="#privacy"
                            className="text-sm hover:text-yellow-300 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="text-sm hover:text-yellow-300 transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#contact"
                            className="text-sm hover:text-yellow-300 transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </footer>

        </>
    )

}

export default FooterContent;
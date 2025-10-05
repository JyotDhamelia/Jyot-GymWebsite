import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { enrollmentDescriptions } from '../data/staticData';

const Enroll = () => {
    const [enrollDescription, setEnrollDescription] = useState('');

    useEffect(() => {
        const randomDescription = enrollmentDescriptions[Math.floor(Math.random() * enrollmentDescriptions.length)];
        setEnrollDescription(randomDescription);
    }, []);
    return (
        <><div>
            {/* header */}
            <header className="text-gray-400 bg-gray-900 body-font sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto flex flex-wrap py-3 px-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex items-center mb-4 md:mb-0">
                        <div className="animate-pulse-slow">
                            <img src="./images/logo.png" height={50} width={50} alt="Jyot Gym Logo" className="md:h-[50px] md:w-[50px] h-[40px] w-[40px]" />
                        </div>
                        <span className="ml-2 text-lg md:text-xl font-medium text-white"><span className="font-bold gradient-text-fire">Muscle</span>Maniacs</span>
                    </Link>
                    {/* not used code */}
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" style={{ "color": "#111827" }}>
                        <a className="mr-5 hover:text-white" href="#" />
                        <a className="mr-5 hover:text-white" href="#" />
                        <a className="mr-5 hover:text-white" href="#" />
                        <a className="mr-5 hover:text-white" href="#" />
                    </nav>
                    {/* not used code */}
                    <Link to="/">
                        <button className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 p-2 focus:outline-none rounded-lg text-white font-semibold text-base mt-4 md:mt-0 modern-btn shadow-lg transform hover:scale-105 transition-all duration-300">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
            {/* header */}

            {/* enrollment form */}
            <form action='mailto:dynamonsworld2015@gmail.com' method="POST">
                <section className="text-gray-400 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 body-font relative min-h-screen">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12 animate-fadeInUp">
                            <h1 className="sm:text-5xl text-4xl font-bold title-font mb-6 text-white" id="contact">
                                <span className="gradient-text">Join</span> Our Fitness Family
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-300">{enrollDescription}
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto card-hover bg-gray-800 bg-opacity-50 p-8 rounded-xl border border-gray-700">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-400 font-medium">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out enhanced-input" required />
                                        <label htmlFor="age" className="leading-7 text-sm text-gray-400 font-medium mt-4 block">Age</label>
                                        <input type="text" id="age" name="age" className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out enhanced-input" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400 font-medium">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out enhanced-input" required />
                                        <label htmlFor="mobile" className="leading-7 text-sm text-gray-400 font-medium mt-4 block">Mobile</label>
                                        <input type="text" id="mobile" name="mobile" className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-all duration-200 ease-in-out enhanced-input" required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-400 font-medium">Anything To Ask?</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded-lg border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-2 px-4 resize-none leading-6 transition-all duration-200 ease-in-out enhanced-input" required defaultValue={""} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button id="EnrollSubmit" className="flex mx-auto text-white bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-10 focus:outline-none hover:from-indigo-700 hover:to-purple-700 rounded-lg text-lg font-semibold modern-btn shadow-xl transform hover:scale-105 transition-all duration-300">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            {/* enrollment form */}

            {/* footer */}
            <footer id="footer" className="text-gray-400 bg-gray-900 body-font border-t border-gray-800">
                <div className="container px-5 py-4 mx-auto flex items-center justify-center flex-wrap gap-4 md:gap-8">
                    <a className="flex title-font font-medium items-center text-white">
                        <span className="text-lg"><span className="font-bold gradient-text-fire">Muscle</span>Maniacs</span>
                    </a>
                    <div className="flex items-center gap-4 flex-wrap justify-center">
                        <p className="text-xs text-gray-400">© {new Date().getFullYear()} MuscleManiacs</p>
                        <p className="text-xs text-gray-400">|</p>
                        <p className="text-xs text-gray-400">123 Fitness Avenue, Gym Nation, FT 12345</p>
                    </div>
                    <Link to="/">
                        <button className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 border-0 p-2 focus:outline-none rounded-lg text-base modern-btn shadow-lg transform hover:scale-105 transition-all duration-300">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </footer>
            {/* footer */}
        </div></>
    )
}
export default Enroll;
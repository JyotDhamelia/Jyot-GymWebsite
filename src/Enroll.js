import React from 'react'
import { Link } from 'react-router-dom';

const Enroll = () => {
    return (
        <><div>
            {/* header */}
            <header className="text-gray-400 bg-gray-900 body-font sticky top-0">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div>
                        <img src="./images/logo.png" loading="lazy" height={70} width={70} />
                    </div>
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <span className="ml-3 text-xl"><span className="font-bold">Jyot</span>-Gym</span>
                    </a>
                    {/* not used code */}
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center" style={{ "color": "#111827" }}>
                        <a className="mr-5 hover:text-white" href="#" />
                        <a className="mr-5 hover:text-white" href="#" />
                        <a className="mr-5 hover:text-white" href="#" />
                        <a className="mr-5 hover:text-white" href="#" />
                    </nav>
                    {/* not used code */}
                    <Link to="/">
                        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Go
                            Back
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
            <hr />
            {/* header */}

            {/* enrollment form */}
            <form action='mailto:dynamonsworld2015@gmail.com' method="POST">
                <section className="text-gray-400 bg-gray-900 body-font relative">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white" id="contact">Enrollment Form</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">"Reach your fitness goals with our dedicated team of
                                experts at your side!"
                                <br />
                                Note : We will contact you through your given email or phone number.
                            </p>
                        </div>
                        <div className="lg:w-1/2 md:w-2/3 mx-auto">
                            <div className="flex flex-wrap -m-2">
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                        <input type="text" id="name" name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Age</label>
                                        <input type="text" id="age" name="age" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-1/2">
                                    <div className="relative">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                                        <input type="email" id="email" name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                        <label htmlFor="mobile" className="leading-7 text-sm text-gray-400">Mobile</label>
                                        <input type="text" id="mobile" name="mobile" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <div className="relative">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-400">Anything To Ask?</label>
                                        <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" required defaultValue={""} />
                                    </div>
                                </div>
                                <div className="p-2 w-full">
                                    <button id="EnrollSubmit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <hr />
            {/* enrollment form */}

            {/* footer */}
            <footer id="footer" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center items-center text-center">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <div>
                            <img src="./images/logo.png" loading="lazy" height={70} width={70} />
                        </div>
                        <span className="ml-3 text-xl"><span className="font-bold">Jyot</span>-Gym</span>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023
                        Jyot-Gym | All Rights Reserved &nbsp;
                    </p>
                    <p>
                    </p><address>| Address : Jyot-Gym, Near Shivaji Circle, In Front Of St.Marry School, Ghogha Road, 364001, Bhavnagar.
                    </address>
                    <p />
                    <Link to="/" className="ml-4">
                        <button className="inline-flex items-center bg-gray-800 border-0 py-3 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Go
                            Home
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-1 h-1" viewBox="0 0 24 24">
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
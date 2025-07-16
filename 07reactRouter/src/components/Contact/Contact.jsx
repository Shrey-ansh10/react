import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="mt-8 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                    Get in touch: 
                                </h1>
                                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div className="flex items-center mt-8 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Miami, Florida, USA
                                    </div>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +1 000 000 0000
                                    </div>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        shreyanshsharma10@hotmail.com
                                    </div>
                                </div>
                            </div>

                            <form className="p-6 flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">
                                        Full Name
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="hidden">
                                        Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        placeholder="Telephone Number"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-gradient-to-r from-red-100 to-violet-200 py-12">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-800">Connect With Me</h2>
                        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                            Follow me on social media to stay updated with my latest projects and thoughts.
                        </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        {/* X (Twitter) Button */}
                        <a 
                            href="https://x.com/Shrey_ansh_10" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="bg-black p-2 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-gray-500">Follow me on</span>
                                <span className="block text-xl font-bold text-gray-900">X (Twitter)</span>
                            </div>
                        </a>
                        
                        {/* LinkedIn Button */}
                        <a 
                            href="https://www.linkedin.com/in/shreyansh-sharma-1010/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center space-x-3 px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="bg-[#0077b5] p-2 rounded-full">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-gray-500">Connect on</span>
                                <span className="block text-xl font-bold text-gray-900">LinkedIn</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

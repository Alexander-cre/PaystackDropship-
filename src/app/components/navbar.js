"use client";
import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <header className='shadow-lg font-[sans-serif] tracking-wide relative z-50'>
            <nav className='bg-white'>
                <section className='flex items-center relative py-3 lg:px-10 px-4 border-b border-gray-200 lg:min-h-[70px] max-lg:min-h-[60px]'>
                    <Link href="/" className="shrink-0">
                        <img src="/JOJO.png" alt="Logo" className='sm:w-[150px] logoImg' />
                    </Link>

                    <div className='flex flex-wrap w-full items-center'>
                        <input 
                            type='text' 
                            placeholder='Search something...'
                            className='xl:w-80 block border-2 max-sm:hidden border-gray-500 md:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 px-4 rounded h-10 outline-none text-sm transition-all' 
                        />
                        
                        <div className="ml-auto">
                            <ul className='flex items-center'>
                                <li className='max-md:hidden flex items-center text-[15px] max-lg:py-2 px-4 font-medium text-gray-800'>
                                    <Link href='/user'>Profile</Link>
                                </li>
                                <li className='max-md:hidden flex items-center text-[15px] max-lg:py-2 px-4 font-medium text-gray-800'>
                                    <Link href='/catalog'>Products</Link>
                                </li>
                                <li className='max-lg:py-2 px-4'>
                                    <Link href='/user/cart/' className="relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 512 512">
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </Link>
                                </li>
                                <li className='max-md:hidden flex text-[15px] max-lg:py-2 px-4'>
                                    <Link href='/api/auth/signin'>
                                        <button className='px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent'>
                                            Sign In
                                        </button>
                                    </Link>
                                </li>
                                <li className='lg:hidden'>
                                    <button 
                                        onClick={handleToggleMenu}
                                        className='p-2'
                                        aria-label="Toggle menu"
                                    >
                                        <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20">
                                            <path 
                                                fillRule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className='lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
                        <div className='bg-white p-6 relative'>
                            <button 
                                onClick={handleToggleMenu}
                                className='absolute top-4 right-4 p-2'
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="w-6 h-6" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            </button>
                            
                            <ul className='space-y-6 pt-8'>
                                <li>
                                    <Link href='/user' className='text-lg font-medium hover:text-blue-600'>Profile</Link>
                                </li>
                                <li>
                                    <Link href='/catalog' className='text-lg font-medium hover:text-blue-600'>Products</Link>
                                </li>
                                <li>
                                    <Link href='/new' className='text-lg font-medium hover:text-blue-600'>New Arrivals</Link>
                                </li>
                                <li>
                                    <Link href='/brands' className='text-lg font-medium hover:text-blue-600'>Brands</Link>
                                </li>
                                <li>
                                    <Link href='/user/signin' className='text-lg font-medium hover:text-blue-600'>Sign In</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default NavBar;
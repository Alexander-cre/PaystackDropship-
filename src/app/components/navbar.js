"use client";

import React, { useState } from "react";
import Link from "next/link";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
             <div class="bg-gray-100">
                <div class="bg-black text-white text-center py-2">
                    <p class="font-bold">This is a Demo</p>
                </div>
            </div>
        <header classNameName='shadow-lg font-[sans-serif] tracking-wide relative z-50'>
            <section
                className='flex items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]'>
                <Link href="/" className="shrink-0 max-sm:hidden"><img
                    src="JOJO.png" alt="logo" className='sm:w-[150px] logoImg' />
                </Link>
                <a href="/" className="hidden max-sm:block"><img src="" alt="logo" className='w-9' />
                </a>

                <div className='flex flex-wrap w-full items-center'>
                    <input type='text' placeholder='Search something...'
                        className='xl:w-80 max-lg:hidden lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 border focus:bg-transparent px-4 rounded h-10 outline-none text-sm transition-all' />
                    <div className="ml-auto">

                        <ul className='flex items-center'>
                            <li className='max-md:hidden flex items-center text-[15px] max-lg:py-2 px-4 font-medium text-gray-800 cursor-pointer'>
                                <Link href={'/user'}> 
                                Profile
                                </Link>
                            </li>
                            <li className='max-md:hidden flex items-center text-[15px] max-lg:py-2 px-4 font-medium text-gray-800 cursor-pointer'>
                                <Link href={'/catalog'}> 
                                Products
                                </Link>
                            </li>
                            <li className='max-lg:py-2 px-4 cursor-pointer'>
                                <Link href={'/user/cart/'}>
                                <span className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 inline" viewBox="0 0 512 512">
                                        <path
                                            d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                            data-original="#000000"></path>
                                    </svg>
                                    <span
                                        className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">3</span>
                                </span>
                                </Link>
                            </li>
                            <li className='flex text-[15px] max-lg:py-2 px-4 hover:text-[#007bff] hover:fill-[#007bff]'>
                                <Link href={'/user/signin'}>
                                    <button
                                        className='px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent'>
                                        Sign In
                                    </button>
                                </Link>
                            </li>
                            <li id="toggleOpen" className='lg:hidden'>
                                <button>
                                    <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {isMenuOpen && (
                <div classNameName='lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50'>
                    <div classNameName='bg-white p-6'>
                        <button onClick={handleToggleMenu()} classNameName='absolute top-2 right-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" classNameName="w-6 h-6" fill="#333" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9.586l4.293-4.293 1.414 1.414L11.414 11l4.293 4.293-1.414 1.414L10 12.414l-4.293 4.293-1.414-1.414L8.586 11 4.293 6.707 5.707 5.293 10 9.586z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <ul classNameName='flex flex-col space-y-4'>
                            <li><Link href='/new' classNameName='hover:text-yellow-300'>New</Link></li>
                            <li><Link href='/brands' classNameName='hover:text-yellow-300'>Brands</Link></li>
                            <li><Link href='/makeup' classNameName='hover:text-yellow-300'>Makeup</Link></li>
                            <li><Link href='/hair' classNameName='hover:text-yellow-300'>Hair</Link></li>
                            <li><Link href='/tools' classNameName='hover:text-yellow-300'>Tools & Brushes</Link></li>
                            <li><Link href='/bath' classNameName='hover:text-yellow-300'>Bath & Body</Link></li>
                            <li><Link href='/gifts' classNameName='hover:text-yellow-300'>Gifts</Link></li>
                            <li><Link href='/skincare' classNameName='hover:text-yellow-300'>Skincare</Link></li>
                        </ul>
                    </div>
                </div>
            )}
        </header>
        </>
    );
}

export default NavBar;
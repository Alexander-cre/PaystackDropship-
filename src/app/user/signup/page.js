"use client";

import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import React from "react";

const SignUp = () => {
    return (
        <>
            <NavBar /> <br /><br /><br />
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl mx-auto mt-5 conBox ">
                <div className="bg-black text-white p-8 rounded-t-lg md:rounded-l-lg md:rounded-t-none flex flex-col justify-center items-center md:w-1/2 ">
                    <h1 className="text-3xl font-bold mb-4">
                        <div className="bg-white text-white rounded-full w-10 h-10 flex items-center justify-center mr-2">
                            <span className="font-bold text-black text-2xl">J</span>
                        </div>
                        JOJO Online B2C Platform.</h1>
                    <p className="text-lg">Simplify your shopping experience with our unique store. </p>
                    <img src="/afro.svg" alt="Two people standing" className="mt-8 w-full h-auto rounded-lg imgCOn" />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center mb-8">
                        <h2 className="text-2xl font-bold">JOJO Marketplace</h2>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Welcome Buddy 😍</h3>
                    <p className="text-gray-600 mb-6 font-bold text-lg">Sign up with socials 🎁</p>

                    <div className="mt-10 grid space-y-4">
                        <button
                            className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div className="relative flex items-center space-x-4 justify-center">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    className="absolute left-0 w-5" alt="google logo" />
                                <span
                                    className="block w-max font-semibold tracking-wide text-black dark:text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue
                                    with Google
                                </span>
                            </div>
                        </button>
                    </div><br />
                    <span className="text-gray-600 text-center ">
                        <Link href={'signin'}> Already have an account ?</Link>
                    </span>
                </div>
            </div><br /><br /><br />
            <Footer />
        </>
    )
}

export default SignUp;
"use client";

import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import ProfileSideBar from "@/app/components/profilesidebar";
import Link from "next/link";
import React from "react";
import '../profilecomponent.css'

const Orderhistory = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-1">
                    <ProfileSideBar />
                    <main className="flex-1 p-4">
                        <div className="bg-white p-4 rounded shadow">
                            <div className="flex items-center justify-between border-b pb-2 mb-4">
                                <h1 className="text-xl font-bold">Orders</h1>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border rounded">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://placehold.co/60x60?text=mg" alt="minigrow logo" className="h-16 w-16 rounded-full" />
                                        <div>
                                            <Link href='/catalog/product-details'>
                                                <h2 className="text-lg font-bold">minigrow</h2>
                                            </Link>
                                            <div className="text-gray-600">March 27, 2018</div>
                                            <div className="text-gray-600 font-bold">PICKUP</div>
                                            <div className="text-gray-600">1 Warm Bases $8.95</div>
                                            <div className="text-gray-600 text-base">give a review</div><br />
                                            <div className={`inline-block px-2 py-1 text-white text-xs font-bold rounded bg-yellow-500 mr-5`}>
                                                pending
                                            </div><br />
                                            <div className="text-blue-600">View receipt</div>
                                        </div>
                                    </div>
                                    <div className="text-right gap-6 ">
                                        <div className="text-lg font-bold">$12.19</div>
                                        <Link href={'/user/orders/trackitem'}>
                                            <button className="mt-2 px-4 py-2 bg-black text-white rounded">Track</button>
                                        </Link>
                                        <br />
                                        <img src="https://www.svgrepo.com/show/488148/delete.svg" className='ml-8 mt-8' alt="/" width={20} height={20} /> <br />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://placehold.co/60x60?text=mg" alt="minigrow logo" className="h-16 w-16 rounded-full" />
                                        <div>
                                            <Link href='/catalog/product-details'>
                                                <h2 className="text-lg font-bold">minigrow</h2>
                                            </Link>
                                            <div className="text-gray-600">March 27, 2018</div>
                                            <div className="text-gray-600 font-bold">PICKUP</div>
                                            <div className="text-gray-600">1 Warm Bases $8.95</div>
                                            <div className="text-gray-600 text-base">give a review</div>
                                            <div className={`inline-block px-2 py-1 text-white text-xs font-bold rounded bg-green-500 mr-5`}>
                                                successful
                                            </div><br />
                                            <div className="text-blue-600">View receipt</div>
                                        </div>
                                    </div>
                                    <div className="text-right gap-6 ">
                                        <div className="text-lg font-bold">$12.19</div>
                                        <button className="mt-2 px-4 py-2 bg-black text-white rounded">Track</button><br />
                                        <img src="https://www.svgrepo.com/show/488148/delete.svg" className='ml-8 mt-8' alt="/" width={20} height={20} /> <br />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between p-4 border rounded">
                                    <div className="flex items-center space-x-4">
                                        <img src="https://placehold.co/60x60?text=mg" alt="minigrow logo" className="h-16 w-16 rounded-full" />
                                        <div>
                                            <Link href='/catalog/product-details'>
                                                <h2 className="text-lg font-bold">minigrow</h2>
                                            </Link>
                                            <div className="text-gray-600">March 27, 2018</div>
                                            <div className="text-gray-600 font-bold">PICKUP</div>
                                            <div className="text-gray-600">1 Warm Bases $8.95</div>
                                            <div className="text-gray-600 text-base">give a review</div>
                                            <div className={`inline-block px-2 py-1 text-white text-xs font-bold rounded bg-yellow-500 mr-5`}>
                                                successful
                                            </div><br />
                                            <div  className="text-blue-600">View receipt</div>
                                        </div>
                                    </div>
                                    <div className="text-right gap-6 ">
                                        <div className="text-lg font-bold">$12.19</div>
                                        <button className="mt-2 px-4 py-2 bg-black text-white rounded">Track</button><br />
                                        <img src="https://www.svgrepo.com/show/488148/delete.svg" className='ml-8 mt-8' alt="/" width={20} height={20} /> <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div><br /><br />
            <Footer />
        </>
    )
}

export default Orderhistory;
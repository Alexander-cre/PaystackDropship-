"use client"

import Footer from '../components/footer';
import NavBar from '../components/navbar';
import ProfileSideBar from '../components/profilesidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import './profilecomponent.css';
const UserProfile = () => {

    return (
        <>
            <NavBar />
            <div className="min-h-screen flex flex-col">
                <div className="flex flex-1">
                    <ProfileSideBar />
                    <main className="flex-1">
                        <div className="bg-white p-4 rounded shadow">
                            <div className="flex items-center justify-between border-b pb-2 mb-4">
                            </div>
                            <div className="space-y-4">
                                <main className="flex-1 p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-lg shadow">
                                            <div className="flex items-center mb-4 proInfo">
                                                <img src="https://placehold.co/100x100" alt="Profile" className="rounded-full mr-4" />
                                                <div>
                                                    <h2 className="text-2xl font-bold">My profile</h2>
                                                    <p className="text-sm text-gray-500">Last login : 07 Aug 2019 14:48</p>
                                                    <p className="text-sm text-gray-500">Woodland Heights, Texas, USA</p>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="font-bold text-xl">Sami Rahman</p>
                                                <p className="text-gray-500 text-xl">+1-856-569-0328</p>
                                                <p className="text-gray-500 text-xl">samirahman007@gmail.com</p>
                                            </div>
                                            <button className="bg-black text-white px-4 py-2 rounded">Edit ✏</button>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <Footer />

        </>

    );
}

export default UserProfile;
"use client"

import Footer from '../components/footer';
import NavBar from '../components/navbar';
import ProfileSideBar from '../components/profilesidebar';
import Link from 'next/link';
import React, { useState } from 'react';
import './profilecomponent.css';
import { useSession } from 'next-auth/react';


const UserProfile = () => {

    
    const { data: session, status } = useSession();

      // If the session is loading, you can show a loading state
  if (status === 'loading') {
    return 
    <div className="flex items-center justify-center min-h-screen"> {/* Full viewport centering */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="spinner-10 w-10 h-10 shrink-0 animate-spin" 
      viewBox="0 0 128 128"
    >
    <path d="M67.906 0h-7.812a7.759 7.759 0 0 0-7.75 7.75v21.125a1.749 1.749 0 0 0 1.75 1.75h19.812a1.749 1.749 0 0 0 1.75-1.75V7.747A7.759 7.759 0 0 0 67.906 0Zm4.25 27.128H55.844V7.747a4.254 4.254 0 0 1 4.25-4.25h7.812a4.254 4.254 0 0 1 4.25 4.25Z" data-original="#000000" />
    <path d="M64 9.592a1.749 1.749 0 0 0-1.75 1.75v7.938a1.75 1.75 0 0 0 3.5 0v-7.938A1.749 1.749 0 0 0 64 9.592Zm9.906 87.777H54.094a1.749 1.749 0 0 0-1.75 1.75v21.128a7.758 7.758 0 0 0 7.75 7.75h7.812a7.758 7.758 0 0 0 7.75-7.75V99.119a1.749 1.749 0 0 0-1.75-1.75Zm-1.75 22.878a4.254 4.254 0 0 1-4.25 4.25h-7.812a4.254 4.254 0 0 1-4.25-4.25v-19.378h16.312Z" data-original="#000000" />
    <path d="M64 118.4a1.749 1.749 0 0 0 1.75-1.75v-7.938a1.75 1.75 0 0 0-3.5 0v7.938A1.749 1.749 0 0 0 64 118.4Zm30.6-71a1.749 1.749 0 0 0 2.475 0l14.94-14.939a7.75 7.75 0 0 0 0-10.96l-5.525-5.525a7.75 7.75 0 0 0-10.96 0L80.593 30.92a1.749 1.749 0 0 0 0 2.475Zm3.405-28.949a4.25 4.25 0 0 1 6.011 0l5.524 5.524a4.25 4.25 0 0 1 0 6.011l-13.7 13.7-11.535-11.529Z" data-original="#000000" />
    <path d="M102.47 28a1.75 1.75 0 1 0-2.47-2.473l-5.617 5.613a1.749 1.749 0 1 0 2.474 2.474ZM33.4 80.59a1.748 1.748 0 0 0-2.474 0L15.983 95.529a7.75 7.75 0 0 0 0 10.96l5.525 5.525a7.75 7.75 0 0 0 10.96 0l14.939-14.94a1.748 1.748 0 0 0 0-2.474ZM30 109.539a4.25 4.25 0 0 1-6.011 0l-5.524-5.524a4.25 4.25 0 0 1 0-6.011l13.7-13.7L43.7 95.837Z" data-original="#000000" />
    <path d="M25.53 99.992a1.75 1.75 0 0 0 2.475 2.475l5.612-5.613a1.749 1.749 0 1 0-2.474-2.474Zm94.72-47.651H99.122a1.749 1.749 0 0 0-1.75 1.75V73.9a1.749 1.749 0 0 0 1.75 1.75h21.128A7.759 7.759 0 0 0 128 67.9v-7.809a7.759 7.759 0 0 0-7.75-7.75ZM124.5 67.9a4.254 4.254 0 0 1-4.25 4.25h-19.378V55.841h19.378a4.254 4.254 0 0 1 4.25 4.25Z" data-original="#000000" />
    <path d="M116.655 62.247h-7.938a1.75 1.75 0 0 0 0 3.5h7.938a1.75 1.75 0 0 0 0-3.5ZM30.628 73.9V54.091a1.749 1.749 0 0 0-1.75-1.75H7.75A7.759 7.759 0 0 0 0 60.091V67.9a7.759 7.759 0 0 0 7.75 7.75h21.128a1.749 1.749 0 0 0 1.75-1.75Zm-3.5-1.75H7.75A4.254 4.254 0 0 1 3.5 67.9v-7.809a4.254 4.254 0 0 1 4.25-4.25h19.378Z" data-original="#000000" />
    <path d="M11.345 65.747h7.938a1.75 1.75 0 0 0 0-3.5h-7.938a1.75 1.75 0 1 0 0 3.5ZM97.077 80.59a1.749 1.749 0 0 0-2.475 0L80.593 94.6a1.748 1.748 0 0 0 0 2.474l14.939 14.94a7.75 7.75 0 0 0 10.96 0l5.525-5.525a7.75 7.75 0 0 0 0-10.96Zm12.465 23.425-5.524 5.524a4.25 4.25 0 0 1-6.011 0l-13.7-13.7L95.84 84.3l13.7 13.7a4.25 4.25 0 0 1 0 6.011Z" data-original="#000000" />
    <path d="M96.857 94.38a1.749 1.749 0 0 0-2.474 2.474l5.617 5.613a1.75 1.75 0 0 0 2.475-2.475Zm-64.389-78.4a7.75 7.75 0 0 0-10.96 0l-5.525 5.525a7.75 7.75 0 0 0 0 10.96L30.923 47.4a1.748 1.748 0 0 0 2.474 0l14.01-14a1.749 1.749 0 0 0 0-2.475Zm-.308 27.712-13.7-13.7a4.25 4.25 0 0 1 0-6.011l5.524-5.524a4.25 4.25 0 0 1 6.011 0l13.7 13.7Z" data-original="#000000" />
    <path d="M25.53 25.527a1.751 1.751 0 0 0 0 2.475l5.613 5.612a1.749 1.749 0 0 0 2.474-2.474l-5.612-5.613a1.751 1.751 0 0 0-2.475 0Z" data-original="#000000" />
  </svg></div>;
  }

    // If the user is not logged in, show a different component
    if (!session) {
        return (
          <div>
            <h1>You are not logged in</h1>
            <p>Please sign in to access your profile.</p>
            <button >
                <Link href='/api/auth/signin'>Sign In</Link>
            </button>
          </div>
        );
      }

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
                                                <img 
                                                width={100}
                                                height={100}
                                                src="https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=1440" alt="Profile" className="rounded-full mr-4" />
                                                <div>
                                                    <h2 className="text-2xl font-bold">My profile</h2>
                                                    <p className="text-sm text-gray-500">Last login : 07 Aug 2019 14:48</p>
                                                    <p className="text-sm text-gray-500">Woodland Heights, Texas, USA</p>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="font-bold text-xl">Welcome, {session.user.name}</p>
                                                <p className="text-gray-500 text-xl">{session.user.email}</p>
                                            </div>
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
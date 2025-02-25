import React from "react";
import Link from "next/link";
import '../catalog/catalog.css'

const ProductSideBar = () => {
    return (
        <>

<input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                    <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                        <div className="spinner diagonal part-1"></div>
                        <div className="spinner horizontal"></div>
                        <div className="spinner diagonal part-2"></div>
                    </label>
                    
            <aside className="w-full md:w-1/4 bg-white p-4 shadow-md" id="sidebarMenu">

                <img src='/JOJO.png' alt='/' className='block w-full h-4/5 sm:w-[150px] prodLogImg' />

            </aside>
            </>
    )
}

export default ProductSideBar;
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




                <ul className="space-y-2">
                    <li className="font-bold">
                        Any Department
                    </li>
                    <li className="cursor-pointer ">
                        Men's Wear 
                    </li>  
                    <li className="cursor-pointer ">
                        Women's Wear 
                    </li>  
                    <li className="cursor-pointer ">
                        Men Footwears 
                    </li>  
                    <li className="cursor-pointer ">
                        Ladies Footwears 
                    </li>  
                    <li className="cursor-pointer ">
                        Accessories 
                    </li>   
                    <li className="cursor-pointer ">
                        Makeup and Skin care 
                    </li> 
                    <li className="cursor-pointer ">
                        Holiday & Seasonal 
                    </li> 
                    <li className="cursor-pointer ">
                        Deals Combo 
                    </li> 
                </ul>
            </aside>
            </>
    )
}

export default ProductSideBar;
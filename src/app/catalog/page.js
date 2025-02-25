"use client" ;

import Footer from "@/app/components/footer";
import NavBar from "@/app/components/navbar";
import ProductSideBar from "@/app/components/productsidebar";
import ProfileSideBar from "@/app/components/profilesidebar";
import Link from "next/link";
import '@/app/catalog/catalog.css';
import products from "../data/products";
import React ,{ Suspense } from "react";

const Catalog = () => {
        
      if (!products.length) {
        return <div className="p-4">Loading products...</div>;
      }
    return (
        <div className="bg-gray-100 block ">

            <NavBar />

            <header className="bg-black text-white text-center py-4">

                <h1 className="text-3xl font-bold">
                    Jojo Store Best Sellers
                </h1>
                <p className="text-sm">
                    Our most popular products based on sales. Updated hourly.
                </p>
            </header>

            <div className="container mx-auto mt-6 px-4">

                <div className="flex flex-col md:flex-row">




                    <ProductSideBar />
                    <main className="w-full md:w-3/4 md:ml-6 mt-6 md:mt-0">
                        <h1 className="text-3xl font-bold mb-8 capitalize">
                            All Products
                        </h1>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map(product => (
                                    <Link href={`/catalog/product-details/${product.id}`} key={product.id}>
                                <div key={product.id} className="border p-4 rounded-lg shadow-md itemCard">
                                        <img src={product.Image} alt={product.name} className="w-full h-48 object-cover mb-2 itemImg" />
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <div className="flex items-center mt-2">
                                            <div className="text-red-500 text-lg font-bold"> &#8358; {product.price.toFixed(2)}</div>
                                            <div className="text-gray-500 line-through ml-2">&#8358;{product.original_price.toFixed(2)}</div>
                                        </div>
                                        <div className="text-sm text-gray-500 mt-1">{product.ratings} ★ </div>
                                </div>
                                </Link>
                            ))}

                        </div>
                    </main>
                </div><br /><br /><br /><br />
            </div><br /><br />

            <Footer />

        </div>

    )
}

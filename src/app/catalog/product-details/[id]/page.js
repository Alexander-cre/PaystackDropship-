"use client";

import Footer from "@/app/components/footer";
import NavBar from "@/app/components/navbar";
import Link from "next/link";
import React from "react";
import { useParams } from "next/navigation";
import products from "@/app/data/products";
import { useEffect, useState } from "react";
import { useCart } from "@/app/layout";
import { ToastContainer, toast } from 'react-toastify';
import "react-responsive-carousel/lib/styles/carousel.min.css" ;
import { Carousel } from "react-responsive-carousel";



const productDetails = () => {

    const params = useParams();
    const id = Number(params.id);
    const [product, setProduct] = useState(null); // State to hold the product
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);



    useEffect(() => {
        const foundProduct = products.find((product) => product.id === id);
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            console.error(`Product with id ${id} not found`);
            setProduct(null);
        }
    }, [id]);

    if (!product) {
        return <div className='mx-auto my-auto block text-align'>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 animate-[spin_0.8s_linear_infinite] fill-blue-600 block mx-auto"
                viewBox="0 0 24 24">
                <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    data-original="#000000" />
            </svg>
        </div>;
    }


    const handleAddToCart = () => {
        if (typeof window !== 'undefined') { 
          if (!selectedSize && product.sizes?.length > 0) {
            toast.error('Please select a size');
            return;
          }
      
          if (!selectedColor && product.colors?.length > 0) {
            toast.error('Please select a color');
            return;
          }
      
          const itemToAdd = { 
            ...product,
            selectedSize,
            selectedColor
          };
      
          addToCart(itemToAdd);
          
          // Store with combined key to handle same product with different options
          const uniqueKey = `${product.id}-${selectedSize}-${selectedColor}`;
          localStorage.setItem(uniqueKey, JSON.stringify(itemToAdd));
          
          toast.success(`${product.name} added to cart!`);
          
          // Reset selections
          setSelectedSize('');
          setSelectedColor('');
        }
      };

    const displayItemsInLocalStorage = () => {
        if (typeof window !== 'undefined') { 
        const items = Object.keys(localStorage).map(key => {
            const item = JSON.parse(localStorage.getItem(key));
            return item; // Return the parsed item
        });
    
        console.log("Items in Local Storage:", items);
        // You can also render these items in your UI as needed
        }
    };
    
    const handleRemoveFromLocalStorage = (id) => {
        if (typeof window !== 'undefined') { 
        localStorage.removeItem(id);
        console.log(`Removed item with id: ${id} from local storage`);
        // Optionally, refresh the displayed items
        displayItemsInLocalStorage();
        }
    };

    // Render the product details
    return (
        <div className="">
        <ToastContainer />
            <NavBar />
            <section className="flex flex-col lg:flex-row mt-8 p-4">

                <div className="items-center lg:w-1/2 productImg">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    className='Carousel'
                    >
                        <img src={product.Image} alt="Product Image" className="w-full similarImg" />
                        <img src={product.Image} alt="Product Image" className="w-full similarImg" />
                        <img src={product.Image} alt="Product Image" className="w-full similarImg" />

                    </Carousel><br /><br />
                </div><br />
                <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
                    <h1 className="text-2xl font-bold uppercase"> {product.name}</h1>
                    <div className="flex items-center mt-2">
                        <div className="text-red-500 text-xl font-bold">&#8358;{product.price}</div>
                        <div className="text-gray-500 line-through ml-2">&#8358;{product.original_price}</div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="text-red-500 text-sm font-bold">{product.ratings}</div>
                        <div className="text-gray-500 text-sm ml-2">(30 reviews)</div>
                    </div>


                    {product.colors?.length > 0 && (
                    <div className="mt-4">
                        <div className="text-sm text-gray-600 font-bold">Color</div>
                        <div className="flex items-center mt-2 space-x-2">
                        {product.colors.map((color) => (
                            <div
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
                                selectedColor === color
                                ? 'border-black ring-2 ring-offset-2'
                                : 'border-transparent hover:border-gray-400'
                            }`}
                            style={{ backgroundColor: color }}
                            />
                        ))}
                        </div>
                    </div>
                    )}


                    {product.sizes?.length > 0 && (
                    <div className="mt-4">
                        <div className="text-sm text-gray-600 font-bold">Size</div>
                        <div className="flex items-center mt-2 space-x-2">
                        {product.sizes.map((size) => (
                            <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-4 py-2 border rounded ${
                                selectedSize === size 
                                ? 'bg-black text-white' 
                                : 'hover:bg-gray-100'
                            }`}
                            >
                            {size}
                            </button>
                        ))}
                        </div>
                    </div>
                    )}

                    <div className="mt-4">
                        <button
                            className="w-full bg-black text-white py-2 rounded"
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </button>

                    </div>
                    <div className="mt-4">
                        <div className="text-sm font-bold text-gray-600">Product Detail</div>
                        <p className="text-sm text-gray-800 mt-2">A wardrobe essential made with soft, smooth SUPIMA® cotton and a new feminine flattering fit.</p>
                        <ul className="list-disc list-inside text-sm text-gray-800 mt-2">
                            <li>100% SUPIMA® cotton</li>
                            <li>Machine wash cold</li>
                            <li>Imported</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <div className="text-sm  font-bold text-gray-600">Materials & Care</div>
                        <p className="text-sm text-gray-800 mt-2">100% SUPIMA® cotton. Machine wash cold. Imported.</p>
                    </div>
                </div>
            </section>
            <section className="mt-8 p-4">
                <h2 className="text-xl font-bold">SIMILAR ITEMS</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 similarSLide">
                    <div className="border p-4 similarCard" >
                        <Link href='catalog/product-details'>
                        <img src="https://placehold.co/200x200" alt="Similar Item 1" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 1</div>
                        <div className="text-red-500 text-sm font-bold">&#8358;9.90</div>
                        </Link>
                    </div>
                    <div className="border p-4 similarCard">
                        <img src="https://placehold.co/200x200" alt="Similar Item 2" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 2</div>
                        <div className="text-red-500 text-sm font-bold">&#8358;9.90</div>
                    </div>
                    <div className="border p-4 similarCard">
                        <img src="https://placehold.co/200x200" alt="Similar Item 3" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 3</div>
                        <div className="text-red-500 text-sm font-bold">&#8358;9.90</div>
                    </div>
                    <div className="border p-4 similarCard">
                        <img src="https://placehold.co/200x200" alt="Similar Item 4" className="w-full similarImg" />
                        <div className="mt-2 text-sm text-gray-800">Item 4</div>
                        <div className="text-red-500 text-sm font-bold">&#8358;9.90</div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
                <Footer />
        </div>

        

    )
}

export default productDetails;

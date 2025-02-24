import NavBar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import React  from "react";

const OrderTracking = () => {
    return(
                <div className="max-w-2xl mx-auto p-4">
                    <NavBar />
                    <h1 className="text-xl font-bold mb-2">Order #30112657244</h1>
                    <p className="text-gray-600 mb-4">November 27, 2023</p>
                    <div className="border p-4 mb-4">
                        <div className="flex items-center mb-4">
                            <img src="https://placehold.co/50x50" alt="Soccer Shin Guard Tape" className="w-12 h-12 mr-4"/>
                            <div>
                                <a href="#" className="text-green-600 font-bold">DICK'S Sporting Goods</a>
                                <p>Soccer Shin Guard Tape</p>
                                <p>SKU: 14817807</p>
                                <p>Color: White</p>
                                <p>Quantity: 1</p>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <i className="fas fa-shipping-fast text-green-600 mr-2"></i>
                            <p className="font-bold">Shipped</p>
                        </div>
                        <p className="text-gray-600 mb-4">Departed FedEx location</p>
                        <div className="flex items-center mb-4">
                            <div className="flex-1">
                                <div className="flex items-center">
                                    <div className="w-1/4 text-center">
                                        <div className="bg-green-600 h-2 rounded-full"></div>
                                        <p className="text-xs mt-1">Order Placed</p>
                                    </div>
                                    <div className="w-1/4 text-center">
                                        <div className="bg-green-600 h-2 rounded-full"></div>
                                        <p className="text-xs mt-1">Preparing Shipment</p>
                                    </div>
                                    <div className="w-1/4 text-center">
                                        <div className="bg-green-600 h-2 rounded-full"></div>
                                        <p className="text-xs mt-1">Shipped</p>
                                    </div>
                                    <div className="w-1/4 text-center">
                                        <div className="bg-gray-300 h-2 rounded-full"></div>
                                        <p className="text-xs mt-1">Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-600">Tracking: <a href="#" className="text-blue-600">7263924876518</a></p>
                        <p className="text-gray-600">Delivery Method: Ground Parcel</p>
                        <p className="text-gray-600">Shipped to:</p>
                        <p className="text-gray-600">[Address]</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-600">Order Subtotal: <span className="float-right">$3.89</span></p>
                        <p className="text-gray-600">Shipping & Handling: <span className="float-right">$8.99</span></p>
                        <p className="text-gray-600">Estimated Tax: <span className="float-right">$0.42</span></p>
                        <p className="font-bold">Order Total: <span className="float-right">$13.22</span></p>
                    </div>
                    <div className="border p-4">
                        <h2 className="font-bold mb-2">Your Contact Info</h2>
                        <p>John Newman</p>
                        <p><a href="mailto:john.newman.bayward@gmail.com" className="text-blue-600">john.newman.bayward@gmail.com</a></p>
                        <p>1-888-946-6456</p>
                    </div><br />
                    <Footer />
                </div>
            );
        }

        export default OrderTracking ;
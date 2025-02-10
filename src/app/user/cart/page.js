"use client" ;

import { useState } from 'react';
import dynamic from 'next/dynamic';
import NavBar from '@/app/components/navbar';
import Footer from '@/app/components/footer';


// Dynamically import the component
const DynamicComponent = dynamic(() => import('../cart/cart'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    ssr: false, // Set to false if you want to disable server-side rendering for this component
  });


const CartPage = () =>{
        return (
            <div>
              <NavBar /><br /><br />
                {/* Cart Page Headline SHopping Cart  */}
              <DynamicComponent />
              <br /><br />
              <Footer />
            </div>
    )
}

export default CartPage ;

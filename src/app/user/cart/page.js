"use client" ;

import { useState } from 'react';
import dynamic from 'next/dynamic';


// Dynamically import the component
const DynamicComponent = dynamic(() => import('../cart/cart'), {
    loading: () => <p>Loading...</p>, // Optional loading component
    ssr: false, // Set to false if you want to disable server-side rendering for this component
  });


const CartPage = () =>{
        return (
            <div>
                {/* Cart Page Headline SHopping Cart  */}
              <DynamicComponent />
            </div>
    )
}

export default CartPage ;

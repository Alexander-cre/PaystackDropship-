"use client" ;

import Footer from "@/app/components/footer"
import NavBar from "@/app/components/navbar";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css" ;
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="">

        {/* SLider  */}

        <div className="text-black align-bottom rounded-lg mb-4  slider">
          <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          >
          <div className="slideInnerImg">
            <img src="https://images.pexels.com/photos/2877180/pexels-photo-2877180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
          </div>

          <div className="slideInnerImg">
            <img src="https://images.pexels.com/photos/16032224/pexels-photo-16032224/free-photo-of-smiling-models-posing-in-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
          </div>

          <div className="slideInnerImg">
            <img src="https://images.pexels.com/photos/5319503/pexels-photo-5319503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
          </div>

          <div className="slideInnerImg">
            <img src="https://images.pexels.com/photos/17245493/pexels-photo-17245493/free-photo-of-a-man-wearing-sunglasses-and-a-green-sweater.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
          </div>

          </Carousel>
        </div><br />

        {/*  Slider*/}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          <div className="bg-white p-2 rounded-lg shadow-lg boxoutercon">
            <h2 className="text-xl font-bold mb-2">Shop gifts by recipient</h2>
            <div className="grid grid-cols-2 gap-2 ">
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/6831608/pexels-photo-6831608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center bg-transparent">For him</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/17243615/pexels-photo-17243615/free-photo-of-a-woman-in-a-pink-skirt-and-white-top-is-posing-on-a-railing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center bg-transparent ">For her</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/13020508/pexels-photo-13020508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center bg-transparent">Jewelries</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://www.berluti.com/dw/image/v2/BBMR_PRD/on/demandware.static/-/Sites-masterCatalog_Berluti/default/dw1cf8f89a/images/S6011-016_shadow-knit-and-calf-leather-sneaker_gradiant-rust_berluti_01.jpg?sw=320" alt="/" className="w-full" />
                <p className="text-center bg-transparent">Sneakers</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 mt-2 block text-center">Shop all gifts</a>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-lg boxoutercon">
            <h2 className="text-xl font-bold mb-2">Makeup Kits and Skin care</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/3762466/pexels-photo-3762466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center">Skin care</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/5128264/pexels-photo-5128264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center">Makeup kits </p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/6724357/pexels-photo-6724357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center">Toners</p>
              </div>
              <div className="innerbox mb-4">
                <img src="https://images.pexels.com/photos/2764973/pexels-photo-2764973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="w-full" />
                <p className="text-center">Hair grooming</p>
              </div>
            </div>
            <a href="#" className="text-blue-500 mt-2 block text-center">See more</a>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-lg boxoutercon">
            <h2 className="text-xl font-bold mb-2">Deals in Home Appliances</h2>
            <img src="https://images.pexels.com/photos/30617433/pexels-photo-30617433/free-photo-of-cozy-vintage-kitchen-with-rustic-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gadget Deals" className="w-full" />
            <a href="#" className="text-blue-500 mt-2 block text-center">Shop now</a>
          </div>
        </div>
      </main>

      <div className="p-4 Holiday">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 ">
          <div className="border border-2 p-2 rounded-lg holitab  shadow-lg ">
            <div className="mainholibox">
              <h2 className="font-bold mb-2"> Top products in accessories</h2>
              <img src="https://images.pexels.com/photos/8706581/pexels-photo-8706581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-12 sm:grid-cols-0">
              <div className="miniholibox">
                <img src="https://images.pexels.com/photos/6931828/pexels-photo-6931828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="mb-1 kitchenMini" />
                <p>Power ring</p>
              </div>
              <div className="miniholibox">
                <img src="https://images.pexels.com/photos/30620653/pexels-photo-30620653/free-photo-of-festive-eyewear-display-with-holiday-decor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="mb-1 kitchenMini" />
                <p>Anti-blue light glasses</p>
              </div>
              <div className="miniholibox">
                <img src="https://images.pexels.com/photos/19195396/pexels-photo-19195396/free-photo-of-blonde-hair-model-bitting-necklace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="mb-1 kitchenMini" />
                <p>Contact Lens</p>
              </div>
            </div>
          </div>
          <div className="border border-2 p-2 rounded-lg shadow-lg holitab gifttab">
            <h2 className="font-bold mb-2">Fashion world</h2>
            <img src="https://images.pexels.com/photos/30557056/pexels-photo-30557056/free-photo-of-portrait-of-woman-with-red-hair-in-black-suit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gaming setup" className="mb-2" />
            <a href="#" className="text-blue-500 mt-2 block">Shop Classy wears</a>
          </div>
          <div className="border border-2 p-2 rounded-lg shadow-lg holitab gifttab">
            <h2 className="font-bold mb-2">Love Season</h2>
            <img src="https://images.pexels.com/photos/5332423/pexels-photo-5332423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" className="mb-2" />
            <a href="#" className="text-blue-500 mt-2 block">Shop now</a>
          </div>
        </div>
        <div className="border border-2 p-2 rounded-lg shadow-lg holispecial ">
          <h2 className="font-bold mb-2">Here come Holiday Specials</h2>
          <Link href='catalog' >
            <b className="text-blue-500 mb-4 block">Explore now</b>
          </Link>

          <div className="flex overflow-x-auto space-x-4 slides">
            <div className="flex-shrink-0 text-center roundtab">
              <div className="items-center justify-center mb-2 sliderImgCon">
                <img src="https://images.pexels.com/photos/5868272/pexels-photo-5868272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Holiday deals" />
              </div>
              <p>Black Friday deals</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="ms-center justify-center mb-2 sliderImgCon">
                <img src="https://images.pexels.com/photos/7957748/pexels-photo-7957748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Most loved deals" />
              </div>
              <p>Most loved deals</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="items-center justify-center mb-2 sliderImgCon">
                <img src="https://images.pexels.com/photos/5935748/pexels-photo-5935748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
              </div>
              <p>Deals under $50</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="items-center justify-center mb-2 sliderImgCon">
                <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
              </div>
              <p>Deals on Sneakers</p>
            </div>
            <div className="flex-shrink-0 text-center roundtab">
              <div className="items-center justify-center mb-2 sliderImgCon">
                <img src="https://images.pexels.com/photos/5632381/pexels-photo-5632381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
              </div>
              <p>Deals</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br />
      <Footer />
    </div>
  );
}

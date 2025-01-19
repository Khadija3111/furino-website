
"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const itemPrice = 250000;
  const subtotal = quantity * itemPrice;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className='bg-white'>
      <div className='bg-white px-32'>
        {/* Background Image */}
        <div className="h-[320px] w-[1440px] relative"> 
          <img src="the2.png" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"> 
            <h2 className="text-5xl font-bold text-black">Cart</h2>
            <div className='flex text-black text-base pt-4'> 
              <label>Home</label> 
              <label><img src='arrow.png' alt="Arrow"></img></label> 
              <label>Cart</label>
            </div>
          </div>
        </div>

{/* {cart starts here} */}

        <div className="flex justify-evenly ">
          <div className="min-h-screen flex py-24 justify-center">
            <div className="p-4 max-w-5xl w-full">
              {/* Cart Header */}

                              <div className="flex justify-between items-center text-center p-4 bg-[#F9F1E7]">
                <h2 className="font-semibold text-[16px] ml-[160px] text-black">Product</h2>
                <h2 className="font-semibold text-[16px] mr-[140px] ml-[110px] text-black">Price</h2>
                <div className="flex">
                  <h2 className="font-semibold text-[16px] mr-[220px] text-black">Quantity</h2>
                  <h2 className="font-semibold text-[16px] mr-[20px] text-black">Subtotal</h2>
                </div>
              </div>  

              {/* Cart Items */}
              <div className="mt-20">
                <div className="flex items-center justify-between pb-4">
                  {/* Product Image */}
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/Group 146.png" 
                      alt="Asgaard sofa"
                      width={108}
                      height={105}
                      className="object-cover rounded-md"
                    />
                    <div className="flex gap-20">
                      <h3 className="text-[#9F9F9F] text-[16px] font-medium text-lg mt-[8px] ml-[20px]">Asgaard sofa</h3>
                      <p className="text-gray-500 mt-[8px] text-black">Rs. {itemPrice.toLocaleString()}</p>
                      <div className="flex items-center space-x-2">
                        <button onClick={handleDecrement} className="px-2 bg-gray-200 rounded text-black">-</button>
                        <input 
                          type="number"
                          value={quantity}
                          readOnly
                          className="w-11 border rounded-md text-center py-1 text-black"
                        />
                        <button onClick={handleIncrement} className="px-2 bg-gray-200 rounded text-black">+</button>
                      </div>
                      <p className="text-black mt-[8px]">Rs. {subtotal.toLocaleString()}</p>
                      <button className="text-red-500 hover:text-red-700">
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-[#F9F1E7] py-20 pt-11">
              {/* Cart Header */}
              <div className="pl-5 mb-1">
                <h2 className="font-semibold text-center w-[179px] h-[179px] text-[32px] ml-[190 ] text-black">Cart Totals</h2>
              </div>

              {/* Cart Items */}
              <div className="p-2 mb-2 mt-[-70px] ">
                <div className="justify-between  px-20">
                  <h2 className="flex items-center gap-x-16 text-lg mt-[-20px]">
                    <span className='text-black'>Subtotal</span>
                    <span className="text-[#9F9F9F]">Rs. {subtotal.toLocaleString()}</span>
                  </h2>
                  <br />
                  <br />
                  <h2 className="flex items-center gap-x-16 text-lg">
                    <span className='text-black'>Total</span>
                    <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
                  </h2>
                </div>

                {/* Cart Totals */}
                <div className="rounded-lg p-4 px-16"></div>
                <button className="ml-[80px] w-[222px] border-2 border-black rounded-[15px] py-3 font-400 text-[20px]
                 hover:bg-black hover:text-white transition text-black">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center pb-9">
    
    <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
      <div className="text-4xl mb-4">
        <img src="trophy.png" alt="Trophy Icon" className="mx-auto" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">High Quality</h3>
      <p className="text-gray-600">Crafted from top materials</p>
    </div>

    
    <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
      <div className="text-4xl mb-4 text-black">
        <img src="guarantee.png" alt="Guarantee Icon" className="mx-auto" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">Warranty Protection</h3>
      <p className="text-gray-600">Over 2 years</p>
    </div>

    
    <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
      <div className="text-4xl mb-4">
        <img src="shipping.png" alt="Shipping Icon" className="mx-auto" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">Free Shipping</h3>
      <p className="text-gray-600">Order over 150$</p>
    </div>

    
    <div className="w-full md:w-1/4 p-4 text-center flex flex-col items-center">
      <div className="text-4xl mb-4">
        <img src="custom.png" alt="Support Icon" className="mx-auto" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">24/7 Support</h3>
      <p className="text-gray-600">Dedicated support</p>
    </div>
  </div>

    </div>
  );
}

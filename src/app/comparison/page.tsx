// Comparison.js

import Image from 'next/image';
import React from 'react';

export default function Comparison  ()  {
  return (


    <div className="bg-white text-black     px-32 py-4">


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


      <div className="container mx-auto">
        {/* go to product section */}
        {/* main div */}
        <div className="flex justify-between items-center mb-4  px-28 ">

<div className='text-black  text-3xl'><p>Go to Product<br/>
     page for<br/>
      more Products</p>
          <button className="text-xl font-medium text-[#727272]  underline">View More</button>
          </div>


          <div className="flex space-x-8 pt-6">
            <div className="text-center">
            <div className='pl-6'>
              <Image  src="/Group 156.png" alt="Product Image 1" width={280} height={117} className="mx-auto" />
               <p className='text-2xl text-start '>Asgaard Sofa</p>
              <div className="flex-col justify-center items-center space-x-1 mt-2">
                <div className='text-start'> <label>4.7</label> <label className="text-yellow-400">★★★★☆</label> <label className='text-gray-600 text-xs'>204|review</label></div>
                <div className='text-start'>Rs. 250,000.00</div>
</div>
              </div>
            </div>
            

            <div className="text-center">
              <Image  src="/Group 156.png" alt="Product Image 1" width={280} height={117} className="mx-auto" />
              
              <div className='pl-6'><p className='text-2xl text-start '>Asgaard Sofa</p>
              <div className="flex-col justify-center items-center space-x-1 mt-2">
                
                <div className='text-start pl-3'> <label>4.7</label> <label className="text-yellow-400">★★★★☆</label> <label className='text-gray-600 text-xs'>204|review</label></div>
                <div className='text-start'>Rs. 250,000.00</div>
               </div>
              </div>
            </div>
          </div>


          <div>
            <p className='text-2xl text-black font-medium pb-2'>Add A Product</p>
            <button className="bg-[#B88E2F] text-white w-[242px] h-[39px] px-4 py-2 rounded">Choose a Product</button>
          </div>
        </div>
        {/* go to sec ends here */}


        <div className='text-2xl font-medium pl-28 py-9'>GENERAL</div>
        <div className="grid grid-cols-3 gap-4">
        
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + * font-normal">
            {/* Add product details here */}
            

            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + *">
            {/* Add product details here */}
           
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + *">
            {/* Add product details here */}
        
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>
        </div>


        
        <div className='text-2xl font-medium pl-28 py-9'>Product </div>
        <div className="grid grid-cols-3 gap-4">
        
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + * font-normal">
            {/* Add product details here */}
            

            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + *">
            {/* Add product details here */}
           
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + *">
            {/* Add product details here */}
        
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>
        </div>


        
        <div className='text-2xl font-medium pl-28 py-9'>Dimentions </div>
        <div className="grid grid-cols-3 gap-4">
        
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + * font-normal">
            {/* Add product details here */}
            

            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + *">
            {/* Add product details here */}
           
            <p>Sales Package</p>
            <p>Model Number</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-10> * + *">
            {/* Add product details here */}
        
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>
        </div>

        <div className='text-2xl font-medium pl-28 py-9'>Warranty </div>
        <div className="grid grid-cols-3 gap-4">
        
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-10 > * + * font-normal">
            {/* Add product details here */}
            

            <p>Warranty Summary</p>
            <p>Warranty Service 
            Type</p>
            <p>Covered in Warranty</p>
            <p>Configuration</p>
            <p>Upholstery Material</p>
            <br/>
            <br/>
            <br/>
            <br/>
            <p>Domestic Warranty</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-7 space-y-10 > * + *">
            {/* Add product details here */}
           
            <p>1 Year Manufacturing Warranty</p>
            <p>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</p>
            <p>Secondary Material</p>
            <p>Configuration</p>
            <p>Not Covered in Warranty
The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.
</p>
            <p>Upholstery Color</p>
          </div>
          <div className="bg-white text-black p-4 px-28 text-xl leading-10 space-y-6 > * + *">
            {/* Add product details here */}
        
            <p>1 Three Seater, 2 Single Seater</p>
            <p>DTUBLIGRBL568</p>
            <p>Solid Wood</p>
            <p>L-shaped</p>
            <p>Fabric + Cotton</p>
            <p>Bright Grey & Lion</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4 pr-14">
          <div className="text-center">
          
          </div>
          <div className="text-center items-start pl-9">
          <button className="bg-[#B88E2F] text-white w-[212px] h-[63px] px-4 py-2 rounded ">Add To Cart</button>
          </div>
          <div className="text-center">
          <button className="bg-[#B88E2F] text-white w-[212px] h-[64px] px-4 py-2  rounded">Add To Cart</button>
          </div>
        </div>

      </div>
      <div className="bg-gray-100 py-12">
  <div className="container mx-auto px-4">

    <div className="flex flex-wrap justify-center items-center">
    
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
</div>
    </div>
  );
};



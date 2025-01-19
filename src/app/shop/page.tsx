import Card from "../comonents/card";
import * as React from 'react';
import FilterBar from "../comonents/filterbar";
import Link from "next/link";


export default function Shop(){
    return(< >
    
<div className="px-32 bg-white">
  <div className="h-[320px] w-[1440px] relative"> 
    <img src="the2.png" className="w-full h-full object-cover" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"> 
      <h2 className="text-5xl font-bold text-black">Shop</h2>
      <img className="w-[170px] " src="gr56.png" />
    </div>
  </div>

<FilterBar></FilterBar>



  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
  
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'2.png'} PercentOff={'NEW'} disColor={'bg-blue-400'} Pname={'Loloto'} Cutprice={'2.500.00'} Pprice={'7.000.000'} PDiscrip={' Luxury big sofa'} ></Card>
   <Card imgLink={'3.png'} PercentOff={'-10%'} disColor={'bg-yellow-300'} Pname={'Respira'} Cutprice={'-30.000'} Pprice={'500.000 '} PDiscrip={'Out door bar table'} ></Card>
   <Card imgLink={'4.png'} PercentOff={'-20'} disColor={'bg-blue-400'} Pname={'Griffo'} Cutprice={'1.500'} Pprice={'1.500.00'} PDiscrip='Luxury Lamp'></Card>  
   <Card imgLink={'5.png'} PercentOff={'NEW'} disColor={'bg-rose-400'} Pname={'Muggo'} Cutprice={''} Pprice={'7.000.000'} PDiscrip='Proi Sofa'></Card>  
   <Card imgLink={'6.png'} PercentOff={'-15%'} disColor={'bg-rose-400'} Pname={'Lopto'} Cutprice={''} Pprice={'1.500.00'} PDiscrip='Comfy big sofa'></Card>  
   <Card imgLink={'7.png'} PercentOff={'-5%'} disColor={'bg-blue-400'} Pname={'Ruspa'} Cutprice={''} Pprice={'1.500.00'} PDiscrip='Big Sofa '></Card>  
   
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'2.png'} PercentOff={'NEW'} disColor={'bg-blue-400'} Pname={'Loloto'} Cutprice={'2.500.00'} Pprice={'7.000.000'} PDiscrip={' Luxury big sofa'} ></Card>
   <Card imgLink={'3.png'} PercentOff={'-10%'} disColor={'bg-yellow-300'} Pname={'Respira'} Cutprice={'-30.000'} Pprice={'500.000 '} PDiscrip={'Out door bar table'} ></Card>
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'2.png'} PercentOff={'NEW'} disColor={'bg-blue-400'} Pname={'Loloto'} Cutprice={'2.500.00'} Pprice={'7.000.000'} PDiscrip={' Luxury big sofa'} ></Card>
   <Card imgLink={'3.png'} PercentOff={'-10%'} disColor={'bg-yellow-300'} Pname={'Respira'}  Cutprice={'-30.000'} Pprice={'500.000 '} PDiscrip={'Out door bar table'} ></Card>
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

   

<Link href="/asguard" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              asguardsofa
            </Link>

</div>

    
    
    </>)
}
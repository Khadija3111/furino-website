


import Head from 'next/head'
import Footer from './comonents/footer'
import Header from './comonents/header'
import Card from './comonents/card'
import Gallery from './comonents/gallery'

export default function Home() 
{
  return (
<div>

  

  <div className='relative w-full h-[716px]'>

  <img src='img1.png' className="w-full h-full object-cover" alt="Hero Image" />
  
 
  <div className='absolute pr-[200px] mr-[100px] top-1/2 right-0 transform -translate-y-1/2 h-[443px] w-[643px] bg-[#FFF3E3] bg-opacity-80 p-8 rounded-lg'>
    <h2 className='text-xl tracking-wider  font-bold text-gray-800 mb-4'>New Arrival</h2>
    <h1 className='text-4xl font-bold text-[#B88E2F] mb-6'>Discover Our
      <br/> New Collection</h1>
    <p className='text-lg text-black mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
    <button className='bg-[#B88E2F] w-[222px] h-[74px] text-white py-2 px-6 rounded-sm text-lg hover:bg-yellow-600'>
      Buy Now
    </button>
  </div>
</div>


<div className="text-center py-16 bg-gray-100">
  
  <h2 className="text-3xl font-bold text-[#333333] mb-4">Browse The Range</h2>
  <p className="text-sm text-zinc-600  mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
  
  <div className="flex justify-center gap-6">
  
    <div className=" relative">
      <img src="dining.png" className="w-[375px] h-[562px]  object-cover rounded-lg" alt="Dining" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center">Dining</div>
    </div>
    
    
    <div className=" relative">
      <img src="living.png" className=" w-[375px] h-[562px]  object-cover rounded-lg" alt="Living" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center">Living</div>
    </div>
    
    
    <div className="relative">
      <img src="bed.png" className=" object-cover rounded-lg w-[375px] h-[562px] " alt="Bedroom" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center">Bedroom</div>
    </div>
  </div>
</div>


<div className=" px-[250px] py-16 bg-gray-100">
  
  <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Products</h2>

  
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
   <Card imgLink={'2.png'} PercentOff={'NEW'} disColor={'bg-blue-400'} Pname={'Loloto'} Cutprice={'2.500.00'} Pprice={'7.000.000'} PDiscrip={' Luxury big sofa'} ></Card>
   <Card imgLink={'3.png'} PercentOff={'-10%'} disColor={'bg-yellow-300'} Pname={'Respira'} Cutprice={'-30.000'} Pprice={'500.000 '} PDiscrip={'Out door bar table'} ></Card>
   <Card imgLink={'4.png'} PercentOff={'-20'} disColor={'bg-blue-400'} Pname={'Griffo'} Cutprice={'1.500'} Pprice={'1.500.00'} PDiscrip='Luxury Lamp'></Card>  
   <Card imgLink={'5.png'} PercentOff={'NEW'} disColor={'bg-rose-400'} Pname={'Muggo'} Cutprice={''} Pprice={'7.000.000'} PDiscrip='Proi Sofa'></Card>  
   <Card imgLink={'6.png'} PercentOff={'-15%'} disColor={'bg-rose-400'} Pname={'Lopto'} Cutprice={''} Pprice={'1.500.00'} PDiscrip='Comfy big sofa'></Card>  
   <Card imgLink={'7.png'} PercentOff={'-5%'} disColor={'bg-blue-400'} Pname={'Ruspa'} Cutprice={''} Pprice={'1.500.00'} PDiscrip='Big Sofa '></Card>  
  </div>

  
  <div className="mt-8 ml-96 pl-48">
    <button className=" w-[176px] h-[48px] bg-white border-2  border-[#B88E2F] text-[#B88E2F] py-2 px-6 rounded-md text-center text-lg">Show More</button>
  </div>
</div>




{/* {next page } */}
<div className="text-center h-[670px] py-16 bg-gray-100">
  
  
  
  <div className="flex justify-center gap-6">
  
    <div className=" relative">
      <img src="til.png" className="w-[422px] h-[152px]   mt-36 object-cover text-start rounded-lg"  alt="Dining" />
     
      <button className=" w-[176px] h-[48px] bg-[#B88E2F]  text-white   rounded-sm  text-lg my-5 mr-60 ">Explore More</button>
    </div>
    
    
    <div className=" relative">
      <img src="next1.png" className=" w-[375px] h-[562px]  object-cover rounded-lg" alt="Living" />
     
    </div>
    
    
    <div className="relative">
      <img src="next2.png" className=" object-cover rounded-lg w-[375px] h-[460px] " alt="Bedroom" />
      <div className="absolute bottom-0 left-0 w-full bg-white  text-black text-xl font-bold p-4 text-center"><img src='indicator.png'></img></div>
    </div>
  </div>
</div>



    

    
<Gallery></Gallery>







 
</div>

    
  )
}




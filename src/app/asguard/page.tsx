import Link from "next/link";
import Card from "../comonents/card";

export default function Asguard(){
return(
<div>

        <div>
            <div className="bg-white py-4 ">

                {/* <Background image */}
                <div className="container mx-auto px-4">
                    <ul className="flex items-center text-sm text-gray-500">
                        <li className="mr-4">
                            <a href="#" className="hover:text-gray-700 text-black">Home</a>
                        </li>
                        <li className="mr-4">
                            <img src="arrow.png" alt="arrow" />
                        </li>
                        <li className="mr-4">
                            <a href="#" className="hover:text-gray-700 text-black">Shop</a>
                        </li>
                         <li className="mr-4">
                            <img src="line 5.png" alt="line" />
                        </li>
                        <li className="flex">
                            <span className="text-black">Asgaard Sofa</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex">
                        <div className="w-1/2">
                            {/* Product images */}
                           <div className="w-[553px] h-[500px]"> <img src="Group 102.png"></img></div>
                        </div>
                        <div className="w-1/2 pl-8">
                            {/* Product details */}
                            <h1 className="text-5xl font-medium mb-4 text-black ">Asgaard Sofa</h1>
                            <p className="text-xl font-bold mb-2 text-gray-400">Rs. 250,000.00</p>
                            <div className="mb-4 text-black">
                                
                               <div className="flex"> <img className="w-[100px]" src="satr2.png"></img><span className="ml-2"> Customer Reviews</span></div>
                            </div>
                            <p className="mb-4 text-black">
                                Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                            </p>
                            <div className="mb-4 text-black">
    <label className="block mb-2 text-gray-400">Size</label>
    <select className="border border-gray-300 rounded px-2 py-1">
        <option value="XL">XL</option>
        <option value="L">L</option>
        <option value="M">M</option>
    </select>
</div>
                            <div className="mb-2  text-black space-x-0 > * + *">
                                <label className="block mb-2 text-gray-400">Color</label>
                                <div className="flex justify-start">
                                    <div className="w-1/4">
                                        <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                                    </div>
                                    <div className="w-1/4">
                                        <div className="w-8 h-8 rounded-full bg-black"></div>
                                    </div>
                                    <div className="w-1/4">
                                        <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                                    </div>
                                  
                                </div>
                            </div>
                            <div className="flex mb-4 space-x-12 > * + *">
                                <div className="w-[100px] h-[60px] ">
                                    <input type="number" className="border border-gray-300 rounded px-2 py-1 text-black w-full" defaultValue="1" />
                                </div>
                                <div className="flex space-x-12 > * + *">
                                    <button className="bg-white  rounded px-6 py-3  w-[500px ] h-[60px] border-gray-700 border-2 p-5 text-black"><Link  href="/cart" >Add To Cart</Link></button>
                                    <button className="bg-white text-gray-700 rounded  px-6 py-3  w-[500px ] h-[60px]  border-gray-700  border-2 p-5"><Link  href="/comparison" >Compare</Link></button>
                                   
                                </div>
                            </div>
                           
                            <div className="mt-4 text-black">
                                <p>SKU: S3201</p>
                                <p>Category: Sofas</p>
                                <p>Tags: Sofa, Chair, Home, Shop</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* { new page} */}
<div className="h-[744px]  bg-white px-60 py-10 space-y-16 > * + *">
<div className=" bg-white pl-72">
<img src="Group 105.png"></img>
</div>
<div>< p className="text-gray-400 text-center">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn<br/> portable active stereo speaker takes the unmistakable look and sound of Marshall, <br/>unplugs the chords, and takes the show on the road.
Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage<br/> styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn <br/>is a compact, stout-hearted hero with a well-balanced audio which boasts a<br/> clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br/>to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p></div>
<img src="Group 109.png"></img>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 bg-white px-32 py-32">
  
  <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
  <Card imgLink={'1.png'} PercentOff={'-30%'} disColor={'bg-rose-400'} Pname={'Syltherine'} Cutprice={'Rp 3.500.000'} Pprice={'Rp 2.500.000'}  PDiscrip={'Stylish cafe chair'}></Card>
  <Card imgLink={'2.png'} PercentOff={'NEW'} disColor={'bg-blue-400'} Pname={'Loloto'} Cutprice={'2.500.00'} Pprice={'7.000.000'} PDiscrip={' Luxury big sofa'} ></Card>
  <Card imgLink={'3.png'} PercentOff={'-10%'} disColor={'bg-yellow-300'} Pname={'Respira'} Cutprice={'-30.000'} Pprice={'500.000 '} PDiscrip={'Out door bar table'} ></Card>
</div>

            </div>

 

        </div>
 




 

</div>

)


}
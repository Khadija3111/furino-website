export default function Blog(){
    return(
        <div className="bg-white">

<div className="h-[320px] w-[1440px] relative ml-40 px-14"> 
          <img src="the2.png" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"> 
            <h2 className="text-5xl font-bold text-black">Blog</h2>
            <div className='flex text-black text-base pt-4'> 
              <label>Home</label> 
              <label><img src='arrow.png' alt="Arrow"></img></label> 
              <label>Blog</label>
            </div>
          </div>
        </div>


<div className=" flex justify-center pt-16 px-40 space-x-24 > * + *">{/* main div */}
{/* first div starts*/}
<div className=" justify-start">{/* first div */}

<img src="blog1.png" className="w-[817px] h-[500px]"></img>
<img src="blogp.png" className="pt-2"></img>
<h2 className="text-black text-2xl font-medium pt-3">Going all-in with millennial design</h2>
<p className="text-[#9F9F9F] pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at .<br/> Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis blandit libero.<br/> 
Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
<p className="text-black text-sm underline pt-4"> READ MORE</p>

<img src="blog2.png" className="w-[817px] h-[500px]"></img>
<img src="blogp.png" className="pt-2"></img>
<h2 className="text-black text-2xl font-medium pt-3">Exploring new ways of decorating</h2>
<p className="text-[#9F9F9F] pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at .<br/> Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis blandit libero.<br/> 
Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
<p className="text-black text-sm underline pt-4"> READ MORE</p>

<img src="blog3.png" className="w-[817px] h-[500px]"></img>
<img src="blogp.png" className="pt-2"></img>
<h2 className="text-black text-2xl font-medium pt-3">Handmade pieces that took time to make</h2>
<p className="text-[#9F9F9F] pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at .<br/> Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis blandit libero.<br/> 
Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
<p className="text-black text-sm underline pt-4"> READ MORE</p>







</div>

{/* sec div  starts*/}
<div>{/* sec div */}

<img src="blog2div.png" className="pt-7"></img>
<img src="blog2div2.png" className="pt-8"></img>


</div>


</div>{/* main div end*/}

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
    )
}
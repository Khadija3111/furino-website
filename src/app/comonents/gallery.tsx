import React from 'react';

const images = [
  { src: 'img1.png', alt: 'Center Image' },
  { src: '1.png', alt: 'Left Top Image' },
  { src: '2.png', alt: 'Left Bottom Image' },
  { src: '3.png', alt: 'Right Top Image' },
  { src: '4.png', alt: 'Right Bottom Image' },
  { src: '5.png', alt: 'Extra Left Image 1' },
  { src: '6.png', alt: 'Extra Left Image 2' },
  { src: '7.png', alt: 'Extra Right Image 1' },
  { src: '7.png', alt: 'Extra Right Image 2' },
];

const Gallery: React.FC = () => {
  return (
<>
<div className='bg-white'>
<p className='text-black text-center'>Share Your Step With </p>
<h2 className='text-black text-center text-5xl font-semibold'>#FuniroFurniture</h2>

</div>
    <div className="grid grid-cols-5 grid-rows-2 gap-2 p-4 py-7 bg-white h-[780px]">
      {/* Left Column */}
      <div className="col-span-1 row-span-1 w-[370px] h-[370px]">
        <img src={images[1].src} alt={images[1].alt} className="object-cover w-full h-full " />
      </div>
      <div className="col-span-1  row-span-1  w-[345px] h-[370px] pl-2">
        <img src={images[2].src} alt={images[2].alt} className="object-cover w-full    pl-6" />
      </div>

      {/* Center Image */}
      <div className="col-span-1 row-span-2 flex items-center justify-center h-[490px] pt-20 mt-10">
        <img src={images[0].src} alt={images[0].alt} className="object-cover w-full h-full" />
      </div>

      {/* Right Column */}
      <div className="col-span-1 row-span-1 w-[340px] h-[450px]">
        <img src={images[3].src} alt={images[3].alt} className="object-cover w-full h-full" />
      </div>
      <div className="col-span-1 row-span-1 w-[350px]">
        <img src={images[4].src} alt={images[4].alt} className="object-cover w-full h-full" />
      </div>

      {/* Additional Images */}
      <div className="col-span-1 row-span-1 w-[350px]">
        <img src={images[5].src} alt={images[5].alt} className="object-cover w-full  h-[322px] " />
      </div>
      <div className="col-span-1 row-span-1">
        <img src={images[6].src} alt={images[6].alt} className="object-cover w-full h-full" />
      </div>
      <div className="col-span-1 row-span-1 w-[350px] h-[350px] pt-20">
        <img src={images[7].src} alt={images[7].alt} className="object-cover w-full h-full" />
      </div>
      <div className="col-span-1 row-span-1 w-[350px] h-[450px]">
        <img src={images[8].src} alt={images[8].alt} className="object-cover w-full h-full" />
      </div>
    </div></>

  );
};

export default Gallery;

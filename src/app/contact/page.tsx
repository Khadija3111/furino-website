// components/ContactForm.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className="bg-white text-black pt-12 px-32">
             <div className="h-[320px] w-[1440px] relative"> 
          <img src="the2.png" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"> 
            <h2 className="text-5xl font-bold text-black">Contact</h2>
            <div className='flex text-black text-base pt-4 pl-5'> 
              <label>Home</label> 
              <label><img src='arrow.png' alt="Arrow"></img></label> 
              <label>Contact</label>
            </div>
          </div>
        </div>
        <div className="text-center mt-28 ">
          <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
          <p className="text-sm text-[#9F9F9F] leading-snug mt-4 ">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always<br/> Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div>
        <div className="flex justify-center pt-16 px-36 space-x-24 > * + *">

          
            <div className="space-y-9 > * + * max-w-lg w-[393px]">
              <div className="mb-7">
                <div className="flex items-center ">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-2xl text-black mr-4 h-[30px] w-[30px]" />
                  <div>
                    <h4 className="text-lg font-semibold ">Address</h4>
                    <p>236 5th SE Avenue, New York <br/>
                        NY10000, United States</p>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="text-2xl text-black mr-4 h-[30px] w-[30px]" />
                  <div>
                    <h4 className="text-lg font-semibold">Phone</h4>
                    <p>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center">
                <FontAwesomeIcon icon={faClock} className="text-2xl text-black mr-4 h-[30px] w-[30px]" />
                  <div>
                    <h4 className="text-lg font-semibold">Working Time</h4>
                    <p>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
         

          <div className="max-w-md w-full h-[750px] pt-10">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
                <input type="text" id="name" className="mt-1 block  border w-[526px] h-[75px] border-[#9F9F9F] border-200 rounded-md shadow-sm p-3" placeholder="Abc" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" id="email" className=" w-[526px] h-[75px] mt-1 block  border border-[#9F9F9F] border-200 rounded-md shadow-sm p-3" placeholder="Abc@def.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="mt-1 block w-[526px] h-[75px] border border-[#9F9F9F] border-100 rounded-md shadow-sm p-3" placeholder="This is an optional" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows-4  className="mt-1 block w-[526px] h-[120px] border border-[#9F9F9F] border-200 rounded-md shadow-sm p-3" placeholder="Hi! I'd like to ask about"></textarea>
              </div>
              <div>
                <button type="submit" className="w-[237px] h-[55px] bg-[#B88E2F] text-white font-bold py-3 rounded-md">Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-gray-100 ">
  <div className="container  px-4">

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
    
      </div>
    );
  };
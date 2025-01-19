// const Footer = () => {
//     return (
//       <footer className="bg-white text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
//             {/* Logo Section */}
//             <div className="flex flex-col items-center sm:items-start">
//               <img className="h-10 mb-4" src="/logo.png" alt="Logo" />
//               <p className="text-sm text-gray-400">Your Store - Quality and Value</p>
//             </div>
  
//             {/* Quick Links Section */}
//             <div className="flex flex-col items-center sm:items-start">
//               <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li>
//                   <a href="/about" className="text-sm text-gray-400 hover:text-white">About Us</a>
//                 </li>
//                 <li>
//                   <a href="/shop" className="text-sm text-gray-400 hover:text-white">Shop</a>
//                 </li>
//                 <li>
//                   <a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</a>
//                 </li>
//                 <li>
//                   <a href="/blog" className="text-sm text-gray-400 hover:text-white">Blog</a>
//                 </li>
//               </ul>
//             </div>
  
//             {/* Social Media Section */}
//             <div className="flex flex-col items-center sm:items-start">
//               <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
//               <div className="flex space-x-6">
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <i className="fab fa-twitter"></i>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="#" className="text-gray-400 hover:text-white">
//                   <i className="fab fa-youtube"></i>
//                 </a>
//               </div>
//             </div>
  
//             {/* Contact Section */}
//             <div className="flex flex-col items-center sm:items-start">
//               <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
//               <p className="text-sm text-gray-400 mb-2">1234 Street Name, City, Country</p>
//               <p className="text-sm text-gray-400 mb-2">Email: support@yourstore.com</p>
//               <p className="text-sm text-gray-400">Phone: +1 (555) 123-4567</p>
//             </div>
//           </div>
  
//           <div className="border-t border-gray-700 mt-8 pt-6">
//             <p className="text-center text-sm text-gray-400">&copy; 2024 Your Store. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>




//     );
//   };
  
//   export default Footer;
export default function Footer() {
    return (
      <footer className="bg-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          
          <div>
            <h3 className="font-semibold text-lg text-black pb-16  ">Funiro.</h3>
            <p className="text-gray-400">
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA.
            </p>
          </div>
  
          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-lg text-gray-400 pb-11">Links</h3>
            <ul className="space-y-4 mt-6 leading-10 ">
              <li >
                <a href="/" className="text-black hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-black hover:text-yellow-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="/about" className="text-black hover:text-yellow-500">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-black hover:text-yellow-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Help Section */}
          <div>
            <h3 className="font-semibold text-lg text-gray-400 pb-11 ">Help</h3>
            <ul className="space-y-4 mt-6 leading-10" >
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Payment option
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Return
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-yellow-500">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="font-semibold text-lg text-gray-400 pb-11">Newsletter</h3>
            <form className="flex items-center mt-6">
             
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-b-2 border-black text-black focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                />
              </div>
             
              <button
                type="submit"
                className="ml-4 border-b-2 border-black text-black focus:border-yellow-500 hover:text-yellow-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
  
       
        <div className="text-start text-gray-500 mt-28 ml-60">
          © 2024 Funiro. All rights reserved.
        </div>
      </footer>
    );
  }
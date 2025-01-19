import Link from 'next/link';
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Aligned to the left */}
          <div className="flex items-center mr-20">
            <div className="flex-shrink-0">
              <img className="h-[40px] w-[185px]" src="/logo.png" alt="Logo" />
            </div>
          </div>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex justify-center space-x-16">
            <Link href="/" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Shop
            </Link>
            <Link href="/blog" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Icons - Aligned to the right */}
          <div className="flex items-center space-x-6">
            {/* Search Icon */}
            <button className="bg-white p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             <div className="h-6 w-6"> <FaSearch  /></div>
            </button>
            {/* Heart Icon */}
            <button className="bg-white p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             <div className="h-6 w-6"> <FaHeart  /></div> 
            </button>
            {/* Cart Icon */}
            <button className="bg-white p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             <div className="h-6 w-6"><Link href={"/cart"}><FaShoppingCart  /></Link> </div>
            </button>
            {/* User Profile Icon */}
            <button className="bg-white p-1 rounded-full text-black hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
             <div className='h-6 w-6'> <FaUser /></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

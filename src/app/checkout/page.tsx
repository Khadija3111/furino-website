export default function Checkout() {
  return (
    <>
    <div className="bg-white text-black">

    <div className="h-[320px] w-[1440px] relative ml-40 px-14"> 
          <img src="the2.png" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"> 
            <h2 className="text-5xl font-bold text-black">Checkout</h2>
            <div className='flex text-black text-base pt-4'> 
              <label>Home</label> 
              <label><img src='arrow.png' alt="Arrow"></img></label> 
              <label>Checkout</label>
            </div>
          </div>
        </div>


      <div className="container mx-auto px-28 py-12  ">


        <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
          {/* Left Side: Billing Details */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Billing details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium">First Name</label>
                <input type="text" id="first-name" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium">Last Name</label>
                <input type="text" id="last-name" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium">Company Name (Optional)</label>
              <input type="text" id="company" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium">Country / Region</label>
              <select id="country" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3">
                <option>Sri Lanka</option>
                {/* Add other country options as needed */}
              </select>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium">Street address</label>
              <input type="text" id="address" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium">Town / City</label>
                <input type="text" id="city" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
              </div>
              <div>
                <label htmlFor="province" className="block text-sm font-medium">Province</label>
                <select id="province" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3">
                  <option>Western Province</option>
                  {/* Add other provinces as needed */}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="zip" className="block text-sm font-medium">ZIP code</label>
                <input type="text" id="zip" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                <input type="text" id="phone" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email address</label>
              <input type="email" id="email" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3" />
            </div>

            <div>
              <label htmlFor="additional-info" className="block text-sm font-medium">Additional information</label>
              <textarea id="additional-info" className="mt-1 block w-full border border-[#9F9F9F] rounded-md p-3"></textarea>
            </div>
          </div>

          {/* Right Side: Product & Order Summary */}
          <div className="space-y-8 pt-16  ">
            <h2 className="text-2xl font-medium flex justify-between "><p>Product</p><p>SubTotal</p></h2>

            <div className="space-y-4">
              
              <div className="flex justify-between">
                <span>Asgaard sofa × 1</span>
                
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between font-normal text-sm">
                <span>Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>

            
            <div>
              <div className="flex items-center mb-4 font-semibold">
                <input type="radio" id="bank-transfer" name="payment-method" className="mr-2 text-lg font-semibold" />
                <label htmlFor="bank-transfer">Direct Bank Transfer</label>
              </div>
              <div className="text-sm text-[#9F9F9F]">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </div>
            </div>

            <div className="flex items-center mb-4 font-semibold">
              <input type="radio" id="cash-on-delivery" name="payment-method" className="mr-2" />
              <label htmlFor="cash-on-delivery">Cash On Delivery</label>
            </div>

            <div className="text-sm text-[#9F9F9F]">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="text-blue-500">privacy policy</a>.
            </div>

            <div className="mt-8">
              <button type="submit" className="w-[318px] h-[62px] bg-white text-black border-black border-2 py-3 rounded-lg text-xl">Place order</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

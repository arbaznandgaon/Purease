import React from 'react'

function Nav() {
  return (
    <div>
        <div>
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
            <img
                  className="w-12 h-12 rounded-full"
                  src="https://www.causevox.com/wp-content/uploads/2011/05/logo-finished.png"
                  alt=""
                /> </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            {/* Desktop menu */}
            <div className="hidden md:block">
                <div className="flex items-center">
                  <div>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                    >
                      Jobs
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                    >
                      About Us
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                    >
                      Services
                    </a>
                    <a
                      href="#"
                      className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
                    >
                      Contact Us
                    </a>
                  </div>
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStRo31fXgnUOzs9rxfmjkTbakC-KwdvBaydA&usqp=CAU"
                    alt=""
                  />
                </div>
              </div>
          </div>
          {/* Mobile menu */}
          <div className="md:hidden mt-4">
            <div className="bg-gray-700 px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-white block hover:bg-gray-500 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="text-white block hover:bg-gray-500 px-3 py-2 rounded-md">Jobs</a>
              <a href="#" className="text-white block hover:bg-gray-500 px-3 py-2 rounded-md">Services</a>
              <a href="#" className="text-white block hover:bg-gray-500 px-3 py-2 rounded-md">Pricing</a>

              <a href="#" className="text-white block hover:bg-gray-500 px-3 py-2 rounded-md">About Us</a>
              <a href="#" className="text-white block hover:bg-gray-500 px-3 py-2 rounded-md">Contact Us</a>



             
            </div>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4">
      </div>
    </div>
    </div>
  )
}

export default Nav
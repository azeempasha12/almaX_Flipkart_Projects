import React from 'react';
import Button from '../../ui/button';
import MoreDropdown from '../../ui/moreDropDown';
import { useNavigate } from 'react-router-dom';
import SellerServices from '../../ui/sellerServices';
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


export default function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Login button clicked');
    navigate("/loginPage");
  };

  return (
    <>
      <nav className="h-auto bg-[#2874F0] fixed top-0 w-full z-10 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          
          {/* Logo and Search Bar Section */}
          <div className="flex flex-col lg:flex-row items-center w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-4">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start w-full lg:w-auto">
              <img
                src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-com-logo-internet-ltd-state-of-kerala-10.png"
                alt="Flipkart Logo"
                className="h-[30px] lg:h-[40px] object-contain"
              />
            </div>

            {/* Search Bar */}
            <div className="w-full lg:w-auto flex justify-center">
             </div>
          </div>

          {/* Buttons Section (Login, More, Seller Services, Add to Cart) */}
          <div className="flex items-center space-x-2">
            <Button
              primaryColor="blue"
              backgroundColor="whitesmoke"
              borderColor="orange"
              onClick={handleClick}
              className="text-xs lg:text-sm"
            >
              Login
            </Button>
            <MoreDropdown />
            <SellerServices />
            {/* <AddToCard /> */}
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() =>navigate("cardItemPage")}>
            <FaShoppingCart />
            <span>Cart</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

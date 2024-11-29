import React from 'react';
import { Link } from 'react-router-dom';

export default function SellerServices() {
  return (
    <div className='flex justify-center items-center'>
      <Link 
        to="/services" 
        className="px-4 py-2 rounded text-white"
      >
        Become a Seller
      </Link>
    </div>
  );
}

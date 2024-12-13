'use client';
import React from 'react';

export default function Container() {

  return (
    <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
      <div className="bg-gray-50 py-12 px-6 sm:px-12 md:px-16">
        <p className="text-3xl md:text-4xl font-serif text-[#332a52] text-center mb-10">
          Join the club and get the benefits
        </p>
        <p>
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center mt-6 md:mt-0">
        <form className="flex " >
          <input
            type="email"
            placeholder="Enter your email"
          
            className="px-6 py-0 border border-gray-300 rounded-md focus:outline-transparent focus:ring-inset focus:ring-white mb-5 "
            required
          />
          <button className="text-gray-100 bg-[#332a52] py-3 px-6 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mb-5"
            type="submit"
           
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

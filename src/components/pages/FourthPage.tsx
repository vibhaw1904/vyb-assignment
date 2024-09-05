"use client";
import { useState } from "react";

const FourthPage = () => {
  const [followers, setFollowers] = useState<number>(500000);
  const [products, setProducts] = useState<number>(25);

  const handleFollowersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFollowers(parseInt(event.target.value));
  };

  const handleProductsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProducts(parseInt(event.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#E5F0F1] w-full">
      <div>
        <h1 className="text-2xl font-bold mb-6">ESTIMATE EARNING POTENTIAL</h1>

        <div className="w-full mb-6">
          <label className="block text-lg mb-2">
            What kind of influencer are you?
          </label>
          <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none">
            <option>Select influencer type?</option>
            <option>Type 1</option>
            <option>Type 2</option>
            <option>Type 3</option>
          </select>
        </div>

        <div className="w-full mb-6">
          <label className="block text-lg mb-2">
            How many followers do you have?
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={followers}
            onChange={handleFollowersChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="text-center mt-2">
            {followers.toLocaleString("en-IN")}K
          </div>
        </div>

        <div className="w-full mb-6">
          <label className="block text-lg mb-2">
            How many products do you list monthly?
          </label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={products}
            onChange={handleProductsChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <div className="text-center mt-2">{products}</div>
        </div>

        <div className="flex justify-between w-full mb-6">
          <div>
            <h2 className="text-lg font-semibold">Monthly Earning</h2>
            <p className="text-2xl font-bold">₹12,000</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Yearly Earning</h2>
            <p className="text-2xl font-bold">₹1,44,000</p>
          </div>
        </div>

        <button className="bg-[#00494D] text-white py-2 px-8 rounded-lg hover:bg-[#003838] transition duration-300">
          Calculate
        </button>
      </div>
    </div>
  );
};

export default FourthPage;

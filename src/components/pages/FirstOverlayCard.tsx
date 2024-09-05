"use client"
import React from 'react';
import Image from 'next/image';
import one from '../../../public/images/one.png'
import two from '../../../public/images/two.png'
import three from '../../../public/images/three.png'
import four from '../../../public/images/four.png'
import { Urbanist } from 'next/font/google';
type FirstOverlayCardProps = {
    
};

const FirstOverlayCard:React.FC<FirstOverlayCardProps> = () => {
    
    return <div className="flex  justify-between   w-[1127px] h-[293px] rounded-3xl py-[23px] px-[32px] gap-[59px] bg-white shadow-lg items-center  ">
      <div className="flex flex-col items-center w-[136px] h-[223px] gap-7 justify-center">
        <div className="bg-[#DBFFD6] w-[104px] h-[104px] rounded-full flex items-center justify-center">
          <Image src={one} alt="one" width={98} height={98} />
        </div>
        <p className={`font-bold text-center  mt-2 align-middle leading-10 text-[34px]`}>Travel Itinerary</p>
      </div>
      
      <div className="flex flex-col items-center w-[136px] h-[223px] gap-7 justify-center">
        <div className="bg-[#FFD4D2] w-[104px] h-[104px] rounded-full flex items-center justify-center">
          <Image src={two} alt="one" width={98} height={98} />
        </div>
        <p className="font-bold text-center   mt-2 align-middle leading-10 text-[34px] ">Custom Merchandise</p>
      </div>
      
      <div className="flex flex-col items-center w-[136px] h-[223px] gap-7 justify-center">
        <div className="bg-[#FFEFBC] w-[104px] h-[104px] rounded-full flex items-center justify-center">
          <Image src={three} alt="one" width={98} height={98} />
        </div>
        <p className="font-bold  text-center  mt-2 align-middle leading-10 text-[34px] ">Digital Content</p>
      </div>
      
      <div className="flex flex-col items-center w-[136px] h-[223px] gap-7 justify-center">
        <div className=" w-[104px] h-[104px] rounded-full flex items-center justify-center">
          <Image src={four} alt="one" width={98} height={98} />
        </div>
        <p className="font-bold text-center  mt-2 align-middle leading-10 text-[34px] ">Fashion Brands</p>
      </div>
    
  </div>
  
}
export default FirstOverlayCard;
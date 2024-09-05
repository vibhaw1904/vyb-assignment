"use"
import React from 'react';
import grp from '../../../public/images/grp.png'
import Image from 'next/image';
import FirstOverlayCard from './FirstOverlayCard';
import UpperOne from '../../../public/images/UpperOne.png'
import bulb from '../../../public/images/bulb.png'
import UpperLast from '../../../public/images/UperLast.png'
import arrow from '../../../public/images/arrow.png'

type FirstPageProps = {
    
};

const FirstPage:React.FC<FirstPageProps> = () => {
    
    return <div className="flex flex-col p-4 max-w-4xl mx-auto relative">
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        {/* First bubble with bulb and text */}
        <div className="mt-12 relative w-[342px] h-[275px] flex items-center justify-center">
          {/* Bulb icon positioned above the bubble */}
          <div className="absolute top-[3px] left-[50%] transform -translate-x-1/2">
            <Image src={bulb} alt="Bulb" width={40} height={40} />
          </div>
          <Image src={UpperLast} alt="UpperOne" width={429} height={389} />
          <p className="absolute inset-0 flex items-center justify-center text-center text-sm  px-2 text-[20px] font-bold  text-[#003C3C]">
          India’s first <br /> marketplace for <br /> Infleuncers

          </p>
        </div>
       
        {/* Arrow */}
        <div className="rotate-45 mr-12 mb-[110px]">
          <Image src={arrow} alt="Arrow" width={93} height={80} />
        </div>
  
        {/* Second bubble with bulb and text */}
        <div className=" relative w-[342px] h-[275px] flex items-center justify-center">
          {/* Bulb icon positioned above the bubble */}
          <div className="absolute top-[-30px] left-[50%] transform -translate-x-1/2">
            <Image src={bulb} alt="Bulb" width={30} height={30} />
          </div>
          <Image src={UpperLast} alt="UpperOne" width={429} height={389} />
          <p className="absolute inset-0 flex items-center justify-center text-center text-sm   px-2  text-[20px] font-bold  text-[#003C3C]">
          Earn via listing your products
          </p>
          <div className="rotate-90 mt-36  absolute">
          <Image src={arrow} alt="Arrow" width={93} height={80} />
        </div>
        </div>
      </div>
    </div>
  
    {/* Absolute arrow */}
   
  
    <div className="flex justify-between">
      <div>
        {/* Third bubble with bulb and text */}
        <div className="">
      <Image src={arrow} alt="UpperOne" width={93} height={80} />
    </div>
        <div className="relative">
          {/* Bulb icon positioned above the bubble */}
          <div className="absolute top-[-30px] left-[40%] transform -translate-x-1/2">
            <Image src={bulb} alt="Bulb" width={116} height={134} />
          </div>
          <Image src={UpperOne} alt="UpperOne" width={429} height={389} />
          <p className="absolute inset-0 flex items-center justify-center text-center text-[20px] font-bold px-4 text-[#003C3C]">
          What is <br />
          VYB Store?
          </p>
        </div>
      </div>
  
      {/* Image in center */}
      <div className="mt-6 flex justify-center items-center">
        <Image src={grp} alt="Influencer" width={548} height={334} />
      </div>
  
      {/* Fourth bubble with bulb and text */}
      <div className="relative">
        {/* Bulb icon positioned above the bubble */}
        <div className="absolute top-[-30px] left-[50%] transform -translate-x-1/2">
          <Image src={bulb} alt="Bulb" width={30} height={30} />
        </div>
        <Image src={UpperLast} alt="UpperOne" width={400} height={389} />
        <p className="absolute inset-0 flex items-center justify-center text-center text-sm   text-[20px] font-bold px-4 text-[#003C3C]">
          Fourth bubble text here
        </p>
      </div>
    </div>
  
    {/* Overlay card */}
    <div className="">
      <FirstOverlayCard />
    </div>
  </div>
  
  
  
}
export default FirstPage;
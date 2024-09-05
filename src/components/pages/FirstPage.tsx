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
    
    return   <div className="flex flex-col p-4 max-w-4xl mx-auto relative">
    <div className="flex flex-col items-center">
        <div className='flex flex-row'>
        <div className="mt-12">
        <Image src={UpperLast} alt="UpperOne" width={200} height={200} />
      </div>
      <div className="rotate-45">
        <Image src={arrow} alt="Arrow" width={200} height={200} />
      </div>
      <div className="mt-12">
        <Image src={UpperLast} alt="UpperOne" width={200} height={200} />
      </div>
        </div>
    </div>
    <div className='absolute'>
        <Image src={arrow} alt="UpperOne" width={200} height={200} /> 
        </div>
    <div className='flex'>
        <div>
        <Image src={UpperOne} alt="UpperOne" width={300} height={300} /> 
        </div>
        
    <div className="mt-6 flex justify-center items-center">
      <Image src={grp} alt="Influencer" width={548} height={334} />
    </div>
    <div>
        <Image src={UpperLast} alt="UpperOne" width={300} height={300} /> 

        </div>
    </div>
    
    <div className="">
      <FirstOverlayCard />
    </div>
  </div>
  
}
export default FirstPage;
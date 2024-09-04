import React from 'react';
import cart from '../../public/images/Cart.png'
import contact from '../../public/images/Contact.png'
import drop from '../../public/images/drop.png'
import about from '../../public/images/About.png'
import user from '../../public/images/user.png'
import Image from 'next/image';


type NavElemProps = {
    
};

const NavElem:React.FC<NavElemProps> = () => {
    
    return <div className='w-[614px] h-[42px] flex flex-row  justify-between ml-12'>
        <div className='flex gap-5 cursor-pointer '>
        <Image src={cart} width={100} height={80} alt='cart'/>
        <Image src={contact} width={100} height={80} alt='cart'/>
        <Image src={about} width={100} height={80} alt='cart'/>

        </div>
        <div className='w-auto h-[42px] rounded-2xl border-[1px] flex justify-center items-center border-black gap-5 py-[7px] px-[17px]'>
            <div className='flex justify-between items-center    gap-5 cursor-pointer'>
                <div className='bg-white rounded-full w-7 h-7 justify-center flex items-center'>
                <Image src={user} width={10} height={10} alt='cart'/>

                </div>
            <Image src={drop} width={10} height={8} alt='cart'/>

            </div>
        </div>
    </div>
}
export default NavElem;
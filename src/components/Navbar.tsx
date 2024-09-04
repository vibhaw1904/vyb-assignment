import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo.gif'
import Search from './Search';
import NavElem from './NavElem';
type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='bg-[#D6D6D6] w-[1200px] flex   items-center h-[90px] mt-3 border rounded-[35px] '>
        <div>
            <Image src={logo} alt="logo" width={128} height={63} />
        </div>
        <div>
            <Search/>
        </div>
        <div>
            <NavElem/>
        </div>
    </div>
}
export default Navbar;
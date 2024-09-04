import React from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchProps = {
    
};

const Search:React.FC<SearchProps> = () => {
    
    return <div className='w-[290px] h-[50px] bg-white rounded-3xl flex items-center ml-10 justify-center'>
        <div className='text-black'>
        <FaSearch className='w-6 h-6'/>

        </div>
        <input className='border-none ml-4 outline-none placeholder-black' type="search" placeholder='Search'/>
    </div>
}
export default Search;
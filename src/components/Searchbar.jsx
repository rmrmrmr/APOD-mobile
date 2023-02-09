import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchPic } from '../redux/apod/getAPOD';

const Searchbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex bg-blue-600 items-center justify-between text-white py-4 px-5">
      <Link to="/" className="w-1/6 font-extrabold text-xl">APOD</Link>
      <input onChange={(e) => dispatch(searchPic(e.target.value))} type="text" name="search" id="search" className="bg-blue-500 rounded-2xl text-white placeholder:text-slate-200 px-2 py-1 border-2 border-blue-500 focus:border-2 focus:border-blue-700 focus:outline-none" placeholder="Search by name" />
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </Link>
    </div>
  );
};

export default Searchbar;

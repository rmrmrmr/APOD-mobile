import React from 'react';
import { useSelector } from 'react-redux';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';
import Picture from '../components/Picture';

const Home = () => {
  const { filt } = useSelector((state) => state.apod);

  return (
    <div className="h-screen font-lato bg-blue-500">
      <Searchbar />
      <Logo />
      <div className="w-full bg-blue-500 text-white px-2 py-2 text-sm flex items-center">PICTURES OF THE DAY</div>
      <div className="flex h-auto w-full flex-wrap gap-0 justify-center">
        {
          filt.length ? filt.map((pics, index) => (
            <Picture
              name={pics.title}
              date={pics.date}
              pic={pics.hdurl}
              ind={index}
              key={pics.url}
            />
          )) : (
            <div className="bg-blue-500 h-auto w-full text-white font-bold text-center pt-10 flex flex-col items-center gap-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-1/2 h-1/2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
              </svg>
              <h2 className="text-2xl font-light">No Image Found</h2>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Home;

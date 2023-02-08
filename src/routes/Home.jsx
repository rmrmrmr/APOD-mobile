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
          )) : <h2 className="bg-blue-500 h-screen w-full text-white font-bold text-center pt-10">No Image Found</h2>
        }
      </div>
    </div>
  );
};

export default Home;

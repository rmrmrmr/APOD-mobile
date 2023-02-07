import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useSelector } from 'react-redux';
import Searchbar from '../components/Searchbar';
import Logo from '../components/Logo';
import Picture from '../components/Picture';

const Home = () => {
  const { pictures } = useSelector((state) => state.apod);

  return (
    <div className="h-screen font-lato">
      <Searchbar />
      <Logo />
      <div className="w-full bg-blue-500 text-white px-2 py-2 text-sm flex items-center">PICTURES OF THE DAY</div>
      <div className="flex h-auto w-full flex-wrap gap-0">
        {
          pictures.length ? pictures.map((pics, index) => (
            <Picture
              name={pics.title}
              date={pics.date}
              pic={pics.hdurl}
              // eslint-disable-next-line react/no-array-index-key
              ind={index}
              key={pics.url}
            />
          )) : <h2 className="bg-blue-500 h-screen w-full text-white font-bold text-center pt-10">Loading pictures...</h2>
        }
      </div>
    </div>
  );
};

export default Home;

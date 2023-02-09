import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Details = () => {
  const til = useParams().title;
  const searched = useSelector((state) => state.apod.filt).filter((s) => s.title === til)[0];

  return (
    <div className="h-full font-lato bg-blue-500">
      <div className="flex bg-blue-600 items-center justify-between text-white py-5 px-5">
        <Link to="/" className="w-1/6 font-extrabold text-xl">APOD</Link>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
        </Link>
      </div>
      <div className="px-5 py-3">
        <img src={searched.hdurl} alt="Img Not Found" className="rounded-lg h-1/2 max-h-60 min-w-full" />
        <div className="flex justify-between text-white mt-2">
          <h1 className="text-xl max-w-[80%]">{searched.title}</h1>
          <h2 className="text-xs mt-auto mb-1">{searched.date}</h2>
        </div>
        <h2 className="text-white text-sm mx-1 text-justify">{searched.explanation}</h2>
      </div>
    </div>
  );
};

export default Details;

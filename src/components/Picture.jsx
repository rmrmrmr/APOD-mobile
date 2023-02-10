import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Picture = ({
  pic, name, ind, date,
}) => (
  <Link to={`/details/${name}`} className={`flex w-1/2 h-48 flex-col m-0 px-2 py-2 ${[0, 3, 4, 7, 8].includes(ind) ? 'bg-blue-500' : 'bg-blue-600'} ${name === 'Loading...' ? 'mt-20' : 'mt-0'}`}>
    <img src={pic} alt="Img not found" className={`${name === 'Loading...' ? 'rounded-none mb-0 w-1/3 h-1/3 mr-auto ml-auto animate-spin' : 'rounded-md mb-2 w-full h-2/3'}`} />
    <h2 className={`text-white font-semibold pl-2 ${name === 'Loading...' ? 'text-xl text-center' : 'text-xs text-right'}`}>{name}</h2>
    <h3 className="text-white font-medium text-xs text-right">{date}</h3>
  </Link>
);

Picture.propTypes = {
  ind: propTypes.isRequired,
  pic: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default Picture;

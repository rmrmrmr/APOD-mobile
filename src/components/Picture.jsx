import React from 'react';
import propTypes from 'prop-types';

const Picture = ({
  pic, name, ind, date,
}) => (
  <div className={`flex w-1/2 h-48 flex-col m-0 px-2 py-2 ${[0, 3, 4, 7, 8].includes(ind) ? 'bg-blue-500' : 'bg-blue-600'}`}>
    <img src={pic} alt="Img not found" className="h-2/3 w-full rounded-md mb-2" />
    <h2 className="text-white font-semibold text-xs text-right pl-2">{name}</h2>
    <h3 className="text-white font-medium text-xs text-right">{date}</h3>
  </div>
);

Picture.propTypes = {
  ind: propTypes.isRequired,
  pic: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  date: propTypes.string.isRequired,
};

export default Picture;

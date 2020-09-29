import React from 'react';

const Header = ({values}) => {
  let rate = '';
  let reviewNum = 0;
  values.map((one) => {
    rate = one.rate;
    reviewNum = one.reviewsNum;
});

  return (
    <div>
      <span>&#11088;</span>
      <span>{rate}</span>
      <span> ({reviewNum} Reviews)</span>
    </div>
)}

export default Header;
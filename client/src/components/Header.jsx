import React from 'react';
//import styled from'jest-styled-components'


const Header = ({values}) => {
  let rate = '';
  let reviewNum = 0;
  values.map((one) => {
    rate = one.rate;
    reviewNum = one.reviewsNum;
});

  return (
    <div>
      <span> </span>
      <span>{rate}</span>
      <span> ({reviewNum} Reviews) </span>
    </div>
)
}

export default Header;
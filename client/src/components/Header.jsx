import React from 'react';
import styled from 'styled-components';


const Header = (props) => {
  let rate = '';

  props.values.forEach((one) => {
    rate = one.rate;
});

  const Wrapper = styled.section`
  display:inline-flex;
  font-size: 22px ;
  font-weight : 600;
  line-height:26px;
  text-size-adjust:100%;
  -webkit-font-smoothing:antialiased;
  padding-bottom:32px;
  padding-top:32px;

    `;

  const Star = styled.span`
      color : rgb(146, 23, 77);
      margin-right:8px;
    `;

  return (
    <Wrapper>
      <Star>⭑</Star>
      <span id="rate">{rate}</span>
      <span> ({props.values.length} reviews) </span>
    </Wrapper>
)};
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
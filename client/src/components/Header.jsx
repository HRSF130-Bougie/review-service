import React from 'react';
import styled from 'styled-components';

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
const Header = (props) => {
  let rate = '';

  let cleanliness = '';
  let communication = '';
  let checkIn = '';
  let accuracy = '';
  let location = '';
  let value = '';

  props.values.forEach((item) => {
    cleanliness = item.cleanRate;
    communication = item.commRate;
    checkIn = item.checkinRate;
    accuracy = item.acuurRate;
    location = item.locRate;
    value = item.valueRate;
  });

  rate = ((cleanliness + communication + checkIn + accuracy + location + value) / 6).toFixed(2);
  return (
    <Wrapper>
      <Star>⭑</Star>
      <span id="rate">{rate}</span>
      <span>
        {' '}
        (
        {props.values.length}
        {' '}
        reviews)
        {' '}
      </span>
    </Wrapper>
  );
};

export default Header;

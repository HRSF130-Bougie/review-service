import React from 'react';
import styled, { css } from 'styled-components';
import SingleRate from './SingleRate.jsx';

const Container = styled.section`

    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    margin-bottom: 24px ;
    grid-column-gap : 5%;
    min-width: 744px;
    width: calc(100% + 16px);

    ${({ correct }) => !correct && css`
      
     display : flex;
     position: sticky !important;
     flex-direction: column ;
     min-width : 380px;

    `}
    `;

const Rating = (props) => {
  let cleanliness = '';
  let communication = '';
  let checkIn = '';
  let accuracy = '';
  let location = '';
  let value = '';

  props.values.map((item) => {
    cleanliness = item.cleanRate;
    communication = item.commRate;
    checkIn = item.checkinRate;
    accuracy = item.acuurRate;
    location = item.locRate;
    value = item.valueRate;
  });

  const array = [
    { name: 'Cleanliness', rate: cleanliness, id: 1 },
    { name: 'Accuracy', rate: accuracy, id: 2 },
    { name: 'Communication', rate: communication, id: 3 },
    { name: 'Location', rate: location, id: 4 },
    { name: 'Check-in', rate: checkIn, id: 5 },
    { name: 'Value', rate: value, id: 6 },
  ];

  const rating = array.map((item) => (
    <SingleRate name={item.name} rate={item.rate} key={item.id} correct={props.correct} />
  ));

  return (
    <div>
      <Container correct={props.correct}>
        {rating}
      </Container>
    </div>
  );
};

export default Rating;

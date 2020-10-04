import React from 'react';
import styled , {css} from 'styled-components';
import SingleRate from './SingleRate.jsx';


 const Container = styled.section`

    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap : 10%;
    margin-bottom: 24px ;
    min-width: 744px;
    width: calc(100% + 16px);

    ${({correct}) => !correct && css`
      
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

  let array = [
      {name : 'Cleanliness' , rate : cleanliness} ,
      {name : 'Accuracy' , rate : accuracy} ,
      {name : 'Communication' , rate : communication} ,
      {name : 'Location' , rate : location} ,
      {name : 'Check-in' , rate : checkIn} ,
      {name : 'Value' , rate : value} ,  
]


const rating = array.map((item) => {
    return (
    <SingleRate name = {item.name }  rate = {item.rate}  correct = {props.correct}/> 
    )
})

  return (
    <div>
      <Container correct = {props.correct}>
        {rating}
      </Container>
    </div>
  )
};

export default Rating;

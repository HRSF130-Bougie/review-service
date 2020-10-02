/* eslint-disable react/prop-types */
import React from 'react';
import SingleReview from './SingleReview.jsx';
import styled from 'styled-components';

const ListReview = (props) => {
// eslint-disable-next-line react/destructuring-assignment
console.log(props.values)
  
  const mapped = props.values.map((one) => (
  
    <SingleReview className="singleReview" url={one.avatar}  review = {one.review}  name ={one.visitorName} date={one.col} />));

    const Container =styled.section`
    display : grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap : 10%;
    
    `;


  return (
    <div>
       <Container>
     {mapped[0]}
     {mapped[1]}
     {mapped[2]}
     {mapped[3]}
     {mapped[4]}
     {mapped[5]}

     </Container>
    </div>
    

  );
};

export default ListReview;

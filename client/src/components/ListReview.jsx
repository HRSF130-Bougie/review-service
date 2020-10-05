/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import styled, { css } from 'styled-components';
import SingleReview from './SingleReview.jsx';

const ListReview = (props) => {
  const mapped = props.values.map((one) => (

    <SingleReview className="singleReview" url={one.avatar} review={one.review} name={one.visitorName} date={one.col} />));

  const Container = styled.section`
    display : grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap : 7%;
    height : 100%;
    

    ${({ correct }) => !correct && css`  
     display : flex;
     flex-direction: column ;
     margin-left : 2%;


    `}
    `;

  return (
    <div>
      {props.correct
        ? (
          <Container correct={props.correct}>
            {mapped[0]}
            {mapped[1]}
            {mapped[2]}
            {mapped[3]}
            {mapped[4]}
            {mapped[5]}

          </Container>
        )
        : <Container>{mapped}</Container> }
    </div>

  );
};

export default ListReview;

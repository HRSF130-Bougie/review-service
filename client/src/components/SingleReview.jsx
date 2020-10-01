import React from 'react';
import styled from 'styled-components';


const SingleReview = (props) => {





const Review = styled.div`
font-family:Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
font-size:16px;
font-weight:400;
word-break:break-word;
text-size-adjust:100%;
line-height:24px;

`;

const First = styled.div`
display: flex !important;
align-items: center !important;
margin-bottom: 16px !important;

`;

const Second = styled.div`
margin-left: 12px !important;

`;

const Img = styled.img`
display: block;
border-radius: 50%;
width :56px;  
height : 56px ;
display : inline-block;
`;

const Date = styled.div`
color: rgb(113, 113, 113) ;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
    font-weight: 400 ;
    font-size: 14px ;
    line-height: 20px ;
   
`;



    return (
   <div>
      <Review >
        <First>
          <div>
          <Img  src = {`${props.url}`} />
          </div>
          <Second>
              {props.name} 
              <Date>{props.date}</Date>
          </Second>
        </First>
        <div>{props.review}</div>
        
        </Review>
        </div>
    )
}

export default SingleReview;
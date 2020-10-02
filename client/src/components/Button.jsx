import React from 'react';
import styled from 'styled-components';


const Show = styled.button`
background-color: rgb(255, 255, 255) ;
border-radius: 8px ;
border-width: 1px ;
border-style: solid ;
padding: 13px 23px ;
cursor: pointer;
width: auto ;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
font-size: 16px !important;
    line-height: 20px !important;
    font-weight: 600 !important;
    : hover {
        background-color:#f9f9f9;
    }
`;



const Button = (props) => {
return(
    <div>
        <Show>{`Show all ${props.reviewsNum} reviews`}</Show>
        <dialog open>This is an open dialog window</dialog>
    </div>
)
}

export default Button;
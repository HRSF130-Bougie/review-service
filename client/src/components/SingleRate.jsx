import React from 'react';
import styled , {css} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
     `;

  
const Rate = styled.div`
width: 100%;
height: 100%;
margin-bottom: 16px ;

`;

const Single = styled.div`
display: flex ;
position: relative;
flex-direction: row ;
width: 30% ;
padding-left: 8px ;
padding-right: 8px ;

${({correct}) => !correct && css`  
padding-left: 0px;
padding-right: 0px;
width: 50% ;
    

    `}

`;


const ProgressShell = styled.div`

display: block;
margin-top : 4px;
position: relative;
width: ${(props) => props.singleWidth};
border-radius: 2px ;
height: 4px ;
background: rgb(221, 221, 221);
margin-right: 4px;  
`;


const Progress = styled.span`
    position:absolute  ;
    background: #222222;
    width : ${(props) => props.width};
    border-radius: 2px ;
    top: 0px ;
    left: 0px ;
    bottom: 0px ;
 
`;

const RatingOne = styled.span`
color: rgb(34, 34, 34) !important;
font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
font-weight: 600 !important;
font-size: 12px !important;
line-height: 16px !important;
margin-left: 6px;
`;

const Font = styled.div`
color: #222222 ;
font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
font-weight: 400 ;
font-size: 16px ;
line-height: 20px;

${({correct}) => !correct && css`  
font-size: 14px ;

    `}
`;    

    
const SingleRate = (props) => {
    let singleWidth ;

    if (props.correct) {
        singleWidth = 120 ;
    } else { 
        singleWidth = 100 ;
    }
    
    return (
        <Rate>
          <Wrapper>
           <Font correct = {props.correct} >{props.name}</Font>
            <Single correct = {props.correct}>
              <ProgressShell singleWidth = {`${singleWidth}px`} >   
                <Progress width={`${props.rate / 5 * singleWidth}px`}  />
              </ProgressShell>
              <RatingOne>{props.rate}</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
    )
}

export default SingleRate;
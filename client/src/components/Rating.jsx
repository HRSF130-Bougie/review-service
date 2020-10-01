import React from 'react';
import styled from 'styled-components';

const Rating = (props) => {
  console.log(props.values);

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

  const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
     `;

  const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap : 10%;
    margin-bottom: 24px ;
    min-width: 744px;
    width: calc(100% + 16px);
    

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
    padding-left: 8px !important;
    padding-right: 8px !important;
}
    

   ;
    
    `;
  const ProgressShell = styled.div`

    display: block;
    margin-top : 4px;
    position: relative;
    width: 120px;
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
  `;

  return (
    <div>
      <Container>
        <Rate>
          <Wrapper>
            <Font>Cleanliness</Font>
            <Single>
              <ProgressShell>
                <Progress width={`${cleanliness / 5 * 120}px`} />
              </ProgressShell>
              <RatingOne>{cleanliness}</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
        <Rate>
          <Wrapper>
            <Font> Communication </Font>
            <Single>
              <ProgressShell>
                <Progress  width={`${communication / 5 * 120}px`} />
              </ProgressShell>
              <RatingOne>{ communication }</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
        <Rate>
          <Wrapper>
            <Font>Check-in</Font>
            <Single>
              <ProgressShell>
                <Progress  width={`${checkIn / 5 * 120}px`}/>
              </ProgressShell>
              <RatingOne>{checkIn}</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
        <Rate>
          <Wrapper>
            <Font>Accuracy</Font>
            <Single>
              <ProgressShell>
                <Progress  width={`${accuracy / 5 * 120}px`}/>
              </ProgressShell>
              <RatingOne>{accuracy}</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
        <Rate>
          <Wrapper>
            <Font>Location</Font>
            <Single>
              <ProgressShell>
                <Progress  width={`${location / 5 * 120}px`}/>
              </ProgressShell>
              <RatingOne>{location}</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
        <Rate>
          <Wrapper>
            <Font>Value</Font>
            <Single>
              <ProgressShell>
                <Progress  width={`${value / 5 * 120}px`}/>
              </ProgressShell>
              <RatingOne>{value}</RatingOne>
            </Single>
          </Wrapper>
        </Rate>
      </Container>
    </div>
  );
};

export default Rating;

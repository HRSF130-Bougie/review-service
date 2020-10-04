/* eslint-disable import/extensions */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Scrollbars } from 'react-custom-scrollbars';
// eslint-disable-next-line import/extensions
import Header from './Header.jsx';
// eslint-disable-next-line import/extensions
import Rating from './Rating.jsx';
import ListReview from './ListReview.jsx';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(0px, 100%);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Container1 = styled.div`

    background: rgb(34, 34, 34 , 0.6) !important;
    z-index: 2000 !important;
    position: fixed !important;
    top: 0px !important;
    right: 0px !important;
    bottom: 0px !important;
    left: 0px !important;
    animation-duration: 400ms !important;
    animation-iteration-count: 1 !important;
    animation-fill-mode: both !important;
    animation : ${slideIn};
}
`;

const Shell = styled.div`
    padding: 40px !important;
    align-items: center !important;
    flex: 1 1 auto !important;
    padding: 24px !important;
}

`;

const DialogBox = styled.dialog`
    width: 100% !important;
    max-width: 1032px !important;
    border-radius: 12px !important;
    border-width: 0px;
    position: relative;    
    max-height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px !important;
    opacity:1 ;
    background: rgb(255, 255, 255) !important;
`;

const HeaderBar = styled.div`
    position: sticky !important;
    text-align: left !important;
    top: 0px !important;
    display: flex !important;
    height: 30px ;
    

  `;

const Button = styled.button`
    background-color: rgb(255, 255, 255) ;
    border: none !important;
    outline: none !important;
    cursor: pointer !important;
    align-items: flex-start;
    text-align: center;
    width: 35px;
    hight : 35px;
    border-radius: 50% !important;
    font :400 13.3333px Arial; 
    : hover {
        background-color:#d9d7d7;
    }
  `;

const Body = styled.div`
    padding: 24px ;
    padding-top : 0px

`;

const RatingSec = styled.section`
    position: sticky !important;
    width: 33.3333% !important;
    float: left !important;
    padding-left: -10px !important;
    padding-right: 8px !important;
    min-height: 1px !important;
   
  `;

const ReviewsSec = styled.div`
   width: 58.3333% !important;
    float: right !important;
    margin-top: 30px;

    
  `;

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,

    });
  }

  render() {
    return (
      <div>
        {this.state.isClicked ? null
          : (
            <Container1>
              <Shell>
                <DialogBox>
                  <HeaderBar>
                    <Button onClick={this.handleClick}>
                      &#10005;
                    </Button>
                  </HeaderBar>
                  <Scrollbars style={{ width: 1032, height: 1200 }}>
                  <Body>
                    <RatingSec>
                      <Header values={this.props.reviews} correct={false} />
                      <Rating values={this.props.reviews} correct={false} />
                    </RatingSec>
                    <ReviewsSec>
                      <ListReview values={this.props.reviews} correct={false} />
                    </ReviewsSec>
                  </Body>
                  </Scrollbars>
                </DialogBox>
              </Shell>
            </Container1>
          )}
      </div>
    );
  }
}

export default Dialog;

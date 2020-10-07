/* eslint-disable react/sort-comp */
import React from 'react';
import styled from 'styled-components';

const Review = styled.div`
font-family:'Airbnb Cereal App Light';
color: rgb(34, 34, 34);
font-size:16px;
color: #222222;
font-weight:400;
word-break:break-word;
text-size-adjust:100%;
line-height:24px;
margin-bottom: 40px !important;
margin-right: 8.33333%;
}
`;

const First = styled.div`
display: flex !important;
font-weight:600;
align-items: center !important;
margin-bottom: 16px !important;
font-family :'Airbnb Cereal App Extra Bold';
color: rgb(34, 34, 34);


`;

const Second = styled.div`
margin-left: 12px !important;
font-weight: 400 ;
font-family :'Airbnb Cereal App Medium';


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
    font-family: 'Airbnb Cereal App Light';
    font-weight: 400 ;
    font-size: 14px ;
    line-height: 20px ;
   
`;
const Button = styled.span`
font-weight: 400 !important;
font-family :'Airbnb Cereal App Medium';
text-decoration: underline;
: hover {
    cursor: pointer; 
   }
 
`;

class SingleReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreThan25: false,
      before: '',
      after: '',
    };
    this.moreThan25 = this.moreThan25.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  moreThan25() {
    const arrayOfwords = (this.props.review).split(' ');
    const { length } = arrayOfwords;
    console.log(length);
    if (length > 25) {
      this.setState({
        moreThan25: true,
        before: arrayOfwords.slice(0, 24).join(' '),
        isClicked: false,
      });
    }
  }

  componentDidMount() {
    this.moreThan25();
  }

  handleClick() {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }

  render() {
    let display = '';

    if (this.state.moreThan25) {
      if (this.state.isClicked) {
        display = <div>{this.props.review}</div>;
      } else {
        display = (
          <div>
            <span>
              {this.state.before}
              ...
            </span>
            {' '}
            <Button onClick={this.handleClick}>read more</Button>
          </div>
        );
      }
    } else {
      display = <div>{this.props.review}</div>;
    }

    return (
      <div>
        <Review>
          <First>
            <div>
              <Img src={`${this.props.url}`} />
            </div>
            <Second>
              {this.props.name}
              <Date>{this.props.date}</Date>
            </Second>
          </First>
          {display}
        </Review>
      </div>
    );
  }
}

export default SingleReview;

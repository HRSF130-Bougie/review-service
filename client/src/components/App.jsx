/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import Rating from './Rating.jsx';
import ListReview from './ListReview.jsx';
import Header from './Header.jsx';
import Button from './Button.jsx';
import GlobalFonts from '../assets/fonts/GlobalFonts';

const Body = styled.section`
display : flex; 
max-width: 1120px;
background-color: #fff;
justify-content: space-between; 
flex-direction:column ; 
width : 1919px;
hight : 912px;
font-family :'Airbnb Cereal App Book';
font-size: 16px ;
padding-top: 48px;
padding-bottom: 48px;
margin-left: auto;
margin-right: auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getAllReviews = this.getAllReviews.bind(this);
  }

  componentDidMount() {
    this.getAllReviews();
  }

  getAllReviews() {
    const random = Math.floor(Math.random() * (100 - 1) + 1);
    fetch(`/api/reviews/${random}`)
      .then((res) => res.json())
      .then((result) => this.setState({
        reviews: result,
      }))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Body>
        <GlobalFonts />
        <Header values={this.state.reviews} correct />
        <Rating values={this.state.reviews} correct />
        <ListReview values={this.state.reviews} correct />
        <Button reviews={this.state.reviews} />
       
      </Body>

    );
  }
}

export default App;

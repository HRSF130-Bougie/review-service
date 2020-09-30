/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Header from './Header.jsx';
import ListReview from './ListReview.jsx';
import styled from 'styled-components';


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
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((result) => this.setState({
        reviews: result,
      }))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }

  render() {
    const Body = styled.section`
    display : flex; 
    justify-content: space-between; 
    flex-direction:column ; 
    width : 1919px;
    hight : 912px;
    font-family :-apple-system,BlinkMacSystemFont,Helvetica Neue,sans-serif;
    font-size: 16px ;
    padding-left:24px;
    padding-right:24px;
    `;

    return (
      <Body>
        <Header values={this.state.reviews} />
        <div className="rating" />
        <ListReview values={this.state.reviews} />
        <div className="showMore" />
      </Body>

    );
  }
}

export default App;

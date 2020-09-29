/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Header from './Header.jsx';
import ListReview from './ListReview.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((result) => this.setState({
        reviews: result,
      }))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Header values={this.state.reviews} />
        <div className="rating" />
        <ListReview values={this.state.reviews} />
        <div className="showMore" />
      </div>

    );
  }
}

export default App;

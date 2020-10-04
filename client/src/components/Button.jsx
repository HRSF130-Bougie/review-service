import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Dialog from './Dialog.jsx';

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

class Button extends React.Component {
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
        <Show onClick={this.handleClick}>{`Show all ${this.props.reviews.length} reviews`}</Show>
        {this.state.isClicked ? <Dialog reviews={this.props.reviews} /> : null}

      </div>
    );
  }
}

export default Button;

/* eslint-disable react/prop-types */
import React from 'react';

const ListReview = (props) => {
// eslint-disable-next-line react/destructuring-assignment

  const mapped = props.values.map((one) => (
    <div className="singleReview">{one.review}</div>));

  return (
    <div>
      {mapped}
    </div>
  );
};

export default ListReview;

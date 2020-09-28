import React from 'react';

const ListReview = (props) => {

    const mapped = props.values.map((one) => {
        return(
        <div className = 'singleReview'>{one.review}</div>)
    })


    return (
        <div>
        {mapped}
        </div>
    )
}

export default ListReview;
import React from 'react';
import {shallow} from 'enzyme' ;
import ListReview from '../src/components/ListReview';



describe ('My compnent' , () => {

   const testProps = [
      {  "ID": 244,
        "visitorName": "Ms. Lula Shanahan",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/langate/128.jpg",
        "review": "Expedita non est asperiores voluptatem eius sit. Sapiente qui debitis sint blanditiis cum hic. Tempora iure nam.",
        "hotelID": 57,
        "col": "August 2018",
        "id": 57,
        "cleanRate": 2.6,
        "commRate": 4,
        "checkinRate": 3.8,
        "acuurRate": 3.3,
        "locRate": 3.9,
        "valueRate": 4.1
    } 
    ]



    const wrapper = shallow (< ListReview values = {testProps} />);
    it ('Should has text' , () => {
        const text = wrapper.find('div div');
        expect (text.text()).toBeDefined();
    });

    it ('Should have class name "singleReview"' , () => {
        expect(wrapper.find('.singleReview')).toHaveClassName('singleReview');
    })
})


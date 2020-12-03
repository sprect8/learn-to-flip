import React from 'react';
import FlipCard from 'react-flipcard';

export default (props) => {    
    return (
        <FlipCard>
            <div>
                <h3>{props.front && props.front.title}</h3>
                {props.front && props.front.content}                
            </div>
            <div>
                <h3>{props.back && props.back.title}</h3>
                {props.back && props.back.content}
            </div>
        </FlipCard>
    )
};

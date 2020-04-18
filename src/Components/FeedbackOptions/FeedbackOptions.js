import React from 'react';
import PropTypes, { arrayOf } from 'prop-types'

const FeedbackOptions = ({options, onLeaveFeedback}) => {

    return (
        <div className="buttons">
            {options.map(el => (
                <button className="btn" onClick={() => onLeaveFeedback(el)}>{el}</button>
            ))}

    </div>
    );

    FeedbackOptions.propTypes = {
        options: PropTypes.arrayOf(PropTypes.string),  
        onLeaveFeedback: PropTypes.func,    
    }
};

export default FeedbackOptions;
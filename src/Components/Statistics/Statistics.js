import React from 'react';
import PropTypes from "prop-types"

const Statistics = ({good, neutral, bad, total, positive}) => {
    return (
        <div>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>Total {total}</p>
        <p>Pisitive {positive} %</p>
        </div>
    );

    Statistics.propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positive: PropTypes.number.isRequired,
    }
};

export default Statistics;
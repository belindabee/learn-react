import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';


export default function Square ({ size, color }) {
    let texInput;
    const sizeInPx = `${size}px`;
    const style = {
        width: size,
        height: size,
        background: color
    }
    return (
        <div style={style} className="square"></div>
    )
}

Square.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number.isRequired
}

Square.defaultProps = {
    color: 'blue'
}
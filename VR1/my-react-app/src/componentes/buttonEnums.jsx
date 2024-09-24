import React from "react";
import PropTypes from 'prop-types';

function ButtonTypes({type}) {
    return <button type={type}>Click me</button>
}

ButtonTypes.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default ButtonTypes


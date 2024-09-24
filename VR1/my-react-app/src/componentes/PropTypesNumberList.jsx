import PropTypes from 'prop-types';
import React from 'react';

function NumberList({numbers}) {
    return (  
            <ul>
                {  
                    numbers.map((number, index) => (
                    <li key={index}>{number}</li> ))
                }
            </ul>    
   )
}

NumberList.PropTypes =  {
    numbers: PropTypes.arrayOf(PropTypes.number)
}


export default NumberList
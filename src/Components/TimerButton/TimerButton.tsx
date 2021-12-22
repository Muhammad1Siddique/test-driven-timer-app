import React from 'react';
import PropTypes  from 'prop-types';

const TimerButton = ({buttonAction, buttonValue}:{buttonAction:any, buttonValue:string}) =>(
    <div className='button-container' onClick={()=>buttonAction()}>
        <div className='button-value'>{buttonValue}</div>
    </div>
);

TimerButton.prototype = {
    buttonAction: PropTypes.func.isRequired,
    buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;
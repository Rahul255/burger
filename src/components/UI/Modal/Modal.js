import React from 'react';
import classes from './Modal.css';

//here we add model

const modal = (props) => (
    <div
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            //here props.show is true go to translrY(0) nd otherwise trs
            opacity: props.show ? '1' : '0'
        }}
        className={classes.Modal}>
        {props.children}
    </div>
);
export default modal;
import React from 'react';
import classes from './Modal.css';

//here we add model

const modal = (props) => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);
export default modal;
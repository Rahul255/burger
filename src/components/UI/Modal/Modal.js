import React from 'react';
import classes from './Modal.css';
import Aux from "../../../hoc/Aux";
import Backdrop from '../Backdrop/Backdrop';

//here we add model

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                //here props.show is true go to translrY(0) nd otherwise trs
                opacity: props.show ? '1' : '0'
            }}
            className={classes.Modal}>
            {props.children}
        </div>

    </Aux>
);
export default modal;
import React, {Component} from 'react';
import classes from './Modal.css';
import Aux from "../../../hoc/Aux";
import Backdrop from '../Backdrop/Backdrop';

//here we add model

class Modal extends Component{
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.show !== this.props.show;
    }
    componentDidlUpdate () {
        console.log('[Modal] didUpdate');
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        //here props.show is true go to translrY(0) nd otherwise trs
                        opacity: this.props.show ? '1' : '0'
                    }}
                    className={classes.Modal}>
                    {this.props.children}
                </div>

            </Aux>
        );
    }
}
export default Modal;
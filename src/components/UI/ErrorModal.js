import React from 'react'
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';


const ErrorModal = (props) => {
  return (
    <div>
    <div className={classes.backdrop} onClick= {props.onConfirm}></div>
     <Card classProp = {classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p> {props.message} </p>
        </div>
        <footer className={classes.actions}>
            <Button onClick= {props.onConfirm}>okay</Button>
        </footer>
     </Card>
      
    </div>
  )
}


export default ErrorModal;

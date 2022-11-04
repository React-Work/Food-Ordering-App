import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} ref={ref} required={props.required} min={props.min}/>
        </div>
    )
})

export default Input;

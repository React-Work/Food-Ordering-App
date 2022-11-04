import styles from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={ `${props.className || ""} ${props.bump ? styles.bump : ""}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;
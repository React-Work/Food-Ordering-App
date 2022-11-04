import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
    return ReactDOM.createPortal(<div className={styles.backdrop}></div>, document.getElementById("backdrop-root"));
}

const ModalOverlay = (props) => {
    return ReactDOM.createPortal(<div className={styles.modal}>
        {props.children}
    </div> , document.getElementById("overlay-root"));
}

const Modal = (props) => {
    return (
        <>
            <Backdrop/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    );
};

export default Modal;

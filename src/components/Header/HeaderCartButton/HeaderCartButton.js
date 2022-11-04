import Button from "../../UI/Button/Button";
import CartIcon from "../../UI/CartIcon/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    return (
        <Button className={styles.button} bump onClick={props.onClick}>
            <div className={styles.icon}>
                <CartIcon />
            </div>
            Your Cart <label className={styles.badge}>{props.children}</label>
        </Button>
    );
};

export default HeaderCartButton;

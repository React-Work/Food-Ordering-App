import { useState, useEffect, useContext } from "react";
import CartContext from "../../../context/cart-context";
import Button from "../../UI/Button/Button";
import buttonStyles from "../../UI/Button/Button.module.css";
import CartIcon from "../../UI/CartIcon/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);
    const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
    
    useEffect(() => {
        setIsButtonHighlighted(true);
        const timer = setTimeout(()=>{
            setIsButtonHighlighted(false);
        }, 300)
        return () => {
            clearTimeout(timer);
        };
    }, [cartContext.cart_item_count]);
    return (
        <Button className={`${styles.button} ${ isButtonHighlighted ?  buttonStyles.bump : ""}` } onClick={props.onClick}>
            <div className={styles.icon}>
                <CartIcon />
            </div>
            Your Cart <label className={styles.badge}>{props.children}</label>
        </Button>
    );
};

export default HeaderCartButton;

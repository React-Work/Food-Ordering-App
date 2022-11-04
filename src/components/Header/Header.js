import styles from "./Header.module.css";
import mainImage from "./meals.jpeg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";
import { useContext } from "react";
import CartContext from "../../context/cart-context";

const Header = (props) => {
    const cartContext = useContext(CartContext);
    const toggleCart = ()=>{
        cartContext.toggleCartVisibility();
    }
    return (
        <>
            <div className={styles.header}>
                <h2>ReactMeals</h2>
                <div></div>
                <HeaderCartButton onClick= {toggleCart}>{cartContext.cart_item_count}</HeaderCartButton>
            </div>
            <div className={styles["main-image"]}>
                <img src={mainImage} alt="" />
            </div>
        </>
    );
};

export default Header;

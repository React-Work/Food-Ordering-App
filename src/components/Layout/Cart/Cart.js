import styles from "./Cart.module.css";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../../context/cart-context";
import { useContext } from "react";

const Cart = (props) => {
    const cartContext = useContext(CartContext);    

    return (
        <Modal>
            <div className={styles["cart-items"]}>
                {
                    Object.values(cartContext.cart_items).map(item=>{
                        return <CartItem key={item.id} id={item.id} name={item.name} price={item.price} qty={item.qty}/>    
                    }) 
                }
            </div>
            <div className={styles.total}>
                <h3>Total Amount</h3>
                <h3>${Object.values(cartContext.cart_items).reduce((prev, cur) => (
                    (parseFloat(prev) + (parseFloat(cur.price)*cur.qty)).toFixed(2)
                )
                , 0)}</h3>
            </div>
                <div className={styles.actions}>
                    <Button className={styles["button--alt"]} onClick={cartContext.toggleCartVisibility}> Cancel </Button>
                    <Button className={styles.button}>Order </Button>
                </div>
        </Modal>
    );
};

export default Cart;

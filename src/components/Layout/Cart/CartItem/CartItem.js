import { useContext } from "react";
import CartContext from "../../../../context/cart-context";
import Button from "../../../UI/Button/Button";
import styles from "./CartItem.module.css";


const CartItem = (props) => {
    const cartContext = useContext(CartContext);
    const onAdd = ()=> {
        cartContext.addItemsToCart([{
            id: props.id,
            qty: 1
        }])
    }
    const onRemove = ()=> {
        cartContext.removeItemFromCart([{
            id: props.id,
            qty: 1
        }])
    }
    return (
        <li className={styles['cart-item']}>
      <div>
        <h2>{props.name || "Test"}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>${props.price || 200}</span>
          <span className={styles.amount}>x{props.qty || 3}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <Button onClick={onRemove}>−</Button>
        <Button onClick={onAdd}>+</Button>
      </div>
    </li>
    );
};

export default CartItem;

import styles from "./MealItemForm.module.css";
import Input from "../../../../UI/Input/Input";
import Button from "../../../../UI/Button/Button";
import { useContext, useRef } from "react";
import CartContext from '../../../../../context/cart-context';


const MealItemForm = (props) => {

    const itemCountRef = useRef("1");
    const cartContext = useContext(CartContext);

    const submitHandler = (event)=> {
        event.preventDefault();
        cartContext.addItemsToCart([{
            id: props.id,
            name: props.name,
            description: props.description,
            price: props.price,
            qty: itemCountRef.current.value
        }])
        itemCountRef.current.value = "";
    }
    
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input type="number" label="Amount" ref={itemCountRef} required={true} min="1"/>
            <Button> + Add </Button>
        </form>
    )
}

export default MealItemForm;
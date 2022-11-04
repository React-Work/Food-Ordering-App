import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm/MealItemForm";
const MealItem = (props) => {
    return (
        <li className={styles.meal}>
            <div>
            <h3>{props.name}</h3>
            <p className={styles.description}>{props.description}</p>
            <span className={styles.price}>${props.price}</span>
            </div>
            <div>
                <MealItemForm id={props.id} name={props.name} price={props.price} description={props.description} />
            </div>

        </li>
    );
}

export default MealItem;
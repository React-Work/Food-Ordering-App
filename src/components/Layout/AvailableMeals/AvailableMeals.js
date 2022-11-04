import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../../UI/Card/Card";
import dummyMeals from './dummy-meals';

const AvailableMeals = (props) => {
    return (
        <Card className={styles.meals}>
            <ul>
            {
                dummyMeals.map(meal=>{
                    return (
                        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}></MealItem>
                    )
                })
            }
            </ul>
            
        </Card>
    )
}

export default AvailableMeals;
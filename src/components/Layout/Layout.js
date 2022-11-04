import MealSummary from "../Layout/MealSummary/MealSummary";
import AvailableMeals from "./AvailableMeals/AvailableMeals";
import Cart from "./Cart/Cart";
import CartContext from "../../context/cart-context";
import { useContext } from "react";

const Layout = (props) => {
    const cartContext = useContext(CartContext);
    return (
        <>
            <MealSummary />
            {cartContext.is_cart_visible ? <Cart></Cart> : <></>}
            
            <AvailableMeals></AvailableMeals>
        </>
    );
};

export default Layout;

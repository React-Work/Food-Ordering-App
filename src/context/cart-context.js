import { createContext, useEffect, useState, useReducer} from "react";

const cartContext = createContext({
    is_cart_visible: false,
    cart_item_count: 0,
    cart_items: [],
    setItemCount: ()=>{},
    addItemsToCart: ()=>{},
    removeItemFromCart: ()=>{},
    toggleCartVisibility: ()=>{} 
})


export const CartContextProvider = (props)=>{
    const [cartVisbility, setCartVisbility] = useState(false);
    // const [cartItemCount, setCartItemCount] = useState(0);
    const defaultState = {
        cart_items: {},
        cart_item_count: 0
    }

    const cartItemsReducer = (state, action) => {
        switch (action.type) {
            case "cart_updated": 
                return { 
                    cart_items : action.payload,
                    cart_item_count: Object.values(action.payload).reduce((prev, cur)=>(
                        parseInt(prev) + parseInt(cur.qty)
                    ), 0)
                } 
            default: 
                return defaultState;
        }
    }

    const [cartItemsState, cartItemsDispatch] = useReducer(cartItemsReducer, defaultState);

    const addItemsToCart = (items) => {
        for (let item of items) {
            if (cartItemsState.cart_items[item.id]) {
                cartItemsState.cart_items[item.id].qty += +item.qty; 
            } else {
                item.qty = +item.qty;
                cartItemsState.cart_items[item.id] = item;
            }
        }

        localStorage.setItem("cart_items", JSON.stringify(cartItemsState.cart_items));
        cartItemsDispatch({
            type: "cart_updated",
            payload: cartItemsState.cart_items
        })
    }
    
    const removeItemFromCart = (items)=>{
        for (let item of items) {
            if (cartItemsState.cart_items[item.id].qty <= +item.qty) {
                delete cartItemsState.cart_items[item.id]; 
            } else {
                cartItemsState.cart_items[item.id].qty -= +item.qty;
            }
        }

        localStorage.setItem("cart_items", JSON.stringify(cartItemsState.cart_items));
        cartItemsDispatch({
            type: "cart_updated",
            payload: cartItemsState.cart_items
        })
    }

    useEffect(() => {
        let cartItemsFromLS = localStorage.getItem("cart_items");
        if (cartItemsFromLS) {
            cartItemsFromLS = JSON.parse(cartItemsFromLS);
            cartItemsDispatch({type: "cart_updated", payload: cartItemsFromLS});
        }
    }, []);

    const toggleCartVisibility = ()=>{
        setCartVisbility(!cartVisbility);
    } 


    return (<cartContext.Provider value={{
        is_cart_visible: cartVisbility,
        cart_items: cartItemsState.cart_items,
        cart_item_count: cartItemsState.cart_item_count,
        addItemsToCart: addItemsToCart,
        removeItemFromCart: removeItemFromCart,
        toggleCartVisibility: toggleCartVisibility
    }}>
        {props.children}
    </cartContext.Provider>)
}


export default cartContext;

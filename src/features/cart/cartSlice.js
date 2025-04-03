import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    // cart : [], 
    cart : [
        {
            pizzaId,    
            name: "med", 
            quantity : 2, 
            unitePrice : 16, 
            totalPrice : 30,

        }
    ]

}

const cartSlice = createSlice({
    name : 'cart', 
    initialState, 
    reducers : {
        addItem(state, action) {
            // payload = new item 
            state.cart.push(action.payload)
        }, 
        deleteItem(state, action) {
            // payload = pizzaId 
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        }, 
        increaseItemQuantity(state, action) {
            //action : pizzaId 
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity++; 
            item.totalPrice = item.quantity * item.unitePrice; 
        }, 
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity--;  
            item.totalPrice = item.quantity * item.unitePrice; 
        }, 
        clearCart(state) {
            state.cart = []
        }, 

    }
})

export const  {addItem , deleteItem , increaseItemQuantity , decreaseItemQuantity, clearCart} = cartSlice.actions; 
export default cartSlice.reducer; 
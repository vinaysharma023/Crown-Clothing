import { createSelector } from 'reselect';

const selectCart = state => state.cart;

//const selectUser = state => state.user;

export const selectCartItem = createSelector(
    [selectCart],
    (cart) => cart.cartitems
);

export const selectItemsCount = createSelector(
    [selectCartItem],
    cartItems => {
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    }
); 
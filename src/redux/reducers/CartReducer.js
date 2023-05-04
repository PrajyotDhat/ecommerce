const initState = {
    products: [],
    totalPrice: 0,
    totalQuantities: 0
}

const CartReducer = (state = initState, action) => {

    let findProduct;
    let index;

    switch (action.type) {
        case 'ADD_TO_CART':
            // console.log(action.payload.product.id);
            const { product, quantity } = action.payload;
            // console.log(product.id,quantity)
            const check = state.products.find(pr => pr.id === product.id)
            if (check) {
                return state;
            }
            else {
                const tPrice = state.totalPrice +product.price * quantity;
                // console.log(tPrice);
                console.log(state.totalPrice,Number.parseInt(product.price),quantity)

                const tQuantities = state.totalQuantities + quantity;
                product.quantity = quantity;
                // console.log(tPrice)
                return {
                    ...state,
                    products: [...state.products, product],
                    totalPrice: tPrice,
                    totalQuantities: tQuantities
                }
            }
        case 'INC':
            findProduct = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            findProduct.quantity += 1;
            state.products[index] = findProduct;
            return {
                ...state,
                totalPrice: state.totalPrice + findProduct.price,
                totalQuantities: state.totalQuantities + 1,
            }

        case 'DEC':
            findProduct = state.products.find(product => product.id === action.payload);
            index = state.products.findIndex(product => product.id === action.payload);
            if (findProduct.quantity > 1) {
                findProduct.quantity -= 1;
                state.products[index] = findProduct;
                return {
                    ...state,
                    totalPrice: state.totalPrice - findProduct.price,
                    totalQuantities: state.totalQuantities - 1,
                }
            }

        case 'REMOVE':
            findProduct = state.products.find(product => product.id === action.payload);
            const remove=state.products.filter(product =>product.id !== action.payload);
            // console.log(remove)
            return{
                ...state,
                products:remove,
                totalPrice:state.totalPrice * findProduct.quantity,
                totalQuantities:state.totalQuantities - findProduct.quantity,
            }   
        default:
            return state
    }
}

export default CartReducer;
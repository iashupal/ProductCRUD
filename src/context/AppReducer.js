export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case 'EDIT_PRODUCT':
            const updatedProduct = action.payload;
            const updatedproducts = state.products.map(product => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return product;
            });

            return {
                ...state,
                products: updatedproducts
            };
        case 'SEARCH_PRODUCT':
            const searchProduct = action.payload;
            const searchProducts = state.products.filter(product => {
                if(searchProduct.length !== 0){
                    return product.name.toLowerCase().includes(searchProduct.toLowerCase())
                } else{
                    return null;
                }
            });
            return{
                ...state,
                products: searchProducts
            }
        default: return state;
    }
}
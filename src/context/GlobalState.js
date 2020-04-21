import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    products: [
        // { id: 1, name: 'Ishan Manandhar', units: 'Kathmandu', price: 'Frontend Dev' }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeProduct(id){
        dispatch({
            type: 'REMOVE_PRODUCT',
            payload: id
        })
    }
    function addProduct(products){
        dispatch({
            type: 'ADD_PRODUCT',
            payload: products
        })
    }
    function editProduct(products){
        dispatch({
            type: 'EDIT_PRODUCT',
            payload: products
        })
    }
    function searchFilter(products){
        dispatch({
            type: 'SEARCH_PRODUCT',
            payload: products
        })
    }
    return (<GlobalContext.Provider value={{
        products: state.products, removeProduct, addProduct, editProduct, searchFilter
    }}>
        {children}
    </GlobalContext.Provider>);
}
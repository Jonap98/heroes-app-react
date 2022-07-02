import { types } from '../types/types';

// Representación del initialstate, realmente no es necesario
// por eso de manda objeto vacío en caso de que no halla nada
// const initialState = {
//     logged: false,
// }

// Los reducer deben resolverse unicamente con el state y el action
// No deben consumir recursos externos como localStorage, axios, fetchAPI, etc.

export const authReducer = ( state = {}, action ) => {
    switch (action.type) {
        case types.login:
            
            return {
                // Siempre desestructurar el state por si hay más propiedades
                ...state, 
                logged: true,
                user: action.payload
            };
        
        case types.logout:

            return {
                logged: false,
                // name: null
            };
    
        default:
            return state;
    }
}
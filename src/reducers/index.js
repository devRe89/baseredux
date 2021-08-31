/*
    Estructura base:
        1. Se importa el hook de redux (combineReducers) para combinar todos los reducers que se creen.
        2. Se importan todos los los reducer construidos para el flujo de la app.
        3. Se exporta combineReducers para unificar, entrelazar y disponibilizar todos los reducers en uno. 
*/
import { combineReducers } from 'redux';
import contactoReducer from './contactoReducer';

export default combineReducers({
    contacto: contactoReducer
})

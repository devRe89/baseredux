
// Inicializando el state del reducer (Cada reducer tiene su propio state)
/*
    Estrutura base:
        1. Definir el state inicial con los atributos base de cada reducer (initialState).
        2. Definir la función en la cual se expone el switch para definir cada action.type para
           modificar el state.
*/

const initialState = {
    contactos: [],
    error: false,
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    switch(action.type){
        default:
            return state
    }
}
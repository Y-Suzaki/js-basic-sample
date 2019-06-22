const { createStore } = require('redux');
const  initState = [];

function todoReducer(state = initState, action) {
    switch (action.type) {
        case 'ADD':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ];
        case 'DEL':
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

const  store = createStore(todoReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({type: 'ADD', id: '001', text: 'Hello.'});
store.dispatch({type: 'ADD', id: '002', text: 'Good.'});
store.dispatch({type: 'ADD', id: '003', text: 'Bad.'});
store.dispatch({type: 'DEL', id: '002'});

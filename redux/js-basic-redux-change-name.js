const { createStore } = require('redux');
const  initState = {
    name: '',
    age: ''
};

function userReducer(state = initState, action) {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state, name: action.name
            };
        case 'SET_AGE':
            return {
                ...state, age: action.age
            };
        default:
            return state;
    }
}

function updateNameAction(name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

function updateAgeAction(age) {
    return {
        type: 'SET_AGE',
        age: age
    }
}

const  store = createStore(userReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(updateNameAction('tanaka'));
store.dispatch(updateAgeAction('22'));

// dispatchは戻り値（Actionの内容そのもの）を得ることができる
console.log(store.dispatch(updateNameAction('hayashi')));

const { createStore } = require('redux');
const initState = 0;

function counterReducer(state = initState, action) {
    switch (action.type) {
        case "INC":
            return state + 1;
        case "DEC":
            return state - 1;
        default:
            return state;
    }
}

function createActionInc() {
    return {
        type: "INC"
    }
}

function createActionDec() {
    return {
        type: "DEC"
    }
}

function createActionNone() {
    return {
        type: "NONE"
    }
}

const store = createStore(counterReducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch(createActionInc());
store.dispatch(createActionInc());
store.dispatch(createActionDec());
store.dispatch(createActionNone());

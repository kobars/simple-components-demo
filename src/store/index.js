import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk";
import { countReducer } from './reducer/count'
import { menteesReducer } from './reducer/mentee'

const rootReducer = combineReducers({
    count: countReducer,
    mentee: menteesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState())
})
export default store;
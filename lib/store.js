import {createStore} from "redux";
import reducer from './reducer';

export const store = (initialState, options) => {
    return createStore(reducer, initialState);
};

export default store;

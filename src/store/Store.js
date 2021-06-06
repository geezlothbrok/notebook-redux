import noteReducers from "../reducers/noteReducers";
import {createStore} from 'redux';

export const store = createStore (noteReducers)
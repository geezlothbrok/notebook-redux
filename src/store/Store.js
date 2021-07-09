import noteReducers from "../reducers/noteReducers";
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { getFirebase, reduxReactFirebase, firebaseReducer } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from '../firebase/config';
import thunk from 'redux-thunk';

const reducer = combineReducers ({noteState: noteReducers, firebaseState: firebaseReducer});

const store = createStore (noteReducers, compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), reduxReactFirebase(firebase), reduxFirestore(firebase)));

export default store;
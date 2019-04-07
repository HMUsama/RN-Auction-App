import { combineReducers } from 'redux'
import createAuction from './CreateAuctionReducer'


import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'


const rootReducers  = combineReducers({
    CreateAuction:      createAuction,
    

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;


import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";
import authReducer from "./authReducer";
import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import {firestoreReducer} from 'redux-firestore';


const rootReducer=combineReducers({
    document: documentReducer,
    contact: contactReducer,
    education: educationReducer,
    auth : authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

console.log(documentReducer);

export default rootReducer;
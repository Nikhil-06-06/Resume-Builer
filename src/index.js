import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redux/reducers/rootReducer";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { configureStore } from '@reduxjs/toolkit';
import { reduxFirestore, getFirestore } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-0KUzn7kH7AGC924YEkWvk2uLn24Ozyk",
  authDomain: "resume-builder-4e9f1.firebaseapp.com",
  projectId: "resume-builder-4e9f1",
  storageBucket: "resume-builder-4e9f1.appspot.com",
  messagingSenderId: "436699531204",
  appId: "1:436699531204:web:111b6de547f2b091cb0691",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

// console.log('here', typeof thunk);

// const reduxStore = createStore(
//   rootReducer,
//   composeWithDevTools(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(firebase)
//   )
// );

const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { getFirebase, getFirestore }
      }
    }),
  reduxFirestore: firebase
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

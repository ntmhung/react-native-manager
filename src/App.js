/**
 * Created by minhhung on 6/8/18.
 */
import React, {Component} from "react";
import {View, Text} from "react-native";
import {Provider} from "react-redux";
import reducers from "./reducers";
import {createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
import firebase from "firebase";
import LoginForm from "./components/LoginForm";

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBNFCR2FqduIKiUZwbaObZQ4YOwOHmKoTI",
            authDomain: "manager-33157.firebaseapp.com",
            databaseURL: "https://manager-33157.firebaseio.com",
            projectId: "manager-33157",
            storageBucket: "manager-33157.appspot.com",
            messagingSenderId: "264676664141"
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        )
    }
}

export default App;

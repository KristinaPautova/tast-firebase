import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyD_xSCSC0E7AbWDvGWDZDsm4nc8qnFzTzs",
  authDomain: "test-firebase-f58c7.firebaseapp.com",
  databaseURL: "https://test-firebase-f58c7.firebaseio.com",
  projectId: "test-firebase-f58c7",
  storageBucket: "test-firebase-f58c7.appspot.com",
  messagingSenderId: "48006969289",
  appId: "1:48006969289:web:a56cc40a8505f795195a18"
}
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

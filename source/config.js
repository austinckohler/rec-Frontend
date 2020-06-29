import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyD4AC1T_YVYpWZ4PIqVS9VnF8RoOXoHDrg',
  authDomain: 'xplorado-9da45.firebaseapp.com',
  databaseURL: 'https://xplorado-9da45.firebaseio.com',
  projectId: 'xplorado-9da45',
  storageBucket: 'xplorado-9da45.appspot.com',
  messagingSenderId: '242528628544',
  appId: '1:242528628544:web:fdc0e3bbc364df937214a5',
  measurementId: 'G-CV4PSNW1VW',
};

let app = Firebase.initializeApp(config);
export const db = app.database();

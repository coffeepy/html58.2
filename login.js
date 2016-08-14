
function init() {
  var loginScreen = document.getElementById('login');
  var signupScreen = document.getElementById('sign-up');
  var welcomeScreen = document.getElementById('welcome');
  var chooseScreen = document.getElementById('choose')
  var loginBTN = document.getElementById('login-btn');
  var logoutBTN = document.getElementById('logout-btn')
  var signupBTN = document.getElementById('signup-btn');
  var backSignup = document.getElementById('back-btn-signup');
  var backLogin = document.getElementById('back-btn-login');
  var loginVerify = document.getElementById('login-verify');
  var registerBTN = document.getElementById('register-btn');
  var message = document.getElementById('messages')
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var pw = document.getElementById('pw');
  var loginEmail = document.getElementById('login-e');
  var loginPW = document.getElementById('login-pw');
  var user = document.getElementById('user');


  if (typeof(Storage) !== "undefined") {
    //run somecode
    console.log('storage accepted');
  } else {
    alert('You are not allowing HTML5 Web storage');
  };

  //toggle functions
  function showElem(elem, display){
    if (display) {
      var display = "visible";
    }
    else {
      var display = "hidden";
    };
    elem.className = display;
  };

  function swapScreens(screen1, screen2){
    showElem(screen1, false);
    showElem(screen2, true);
  };
  function getStoredItems(){
    storedEmail = localStorage.getItem('email');
    storedPW = localStorage.getItem('pw');
    submittedEmail =  loginEmail.value;
    submittedPW = loginPW.value;
  }
  //listeners
  loginBTN.onclick = function (){
    swapScreens(chooseScreen, loginScreen);
  }
  signupBTN.onclick = function (){
    swapScreens(chooseScreen,signupScreen);
  };
  backLogin.onclick = function (){
    swapScreens(loginScreen, chooseScreen);
  };
  backSignup.onclick = function (){
    swapScreens(signupScreen, chooseScreen);
  };
  registerBTN.onclick = function () {
    localStorage.setItem('email', email.value);
    localStorage.setItem('pw', pw.value);
    loginEmail.value = localStorage.getItem('email');
    loginPW.value = localStorage.getItem('pw');
    swapScreens(signupScreen, loginScreen);
  };
  loginVerify.onclick = function () {
    getStoredItems()
    if (storedEmail == submittedEmail && storedPW == submittedPW){
     swapScreens(loginScreen, welcomeScreen);
     user.innerHTML = storedEmail;
    }
    else {
      setTimeout(function(){
        message.innerHTML = "";
      }, 3000)
      message.innerHTML = "<h4>LOGIN FAILED</h4>";
    };
  };
  logoutBTN.onclick = function (){
    localStorage.removeItem('email');
    localStorage.removeItem('pw');
    swapScreens(welcomeScreen, chooseScreen);
  };
};

init();

var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/gmail.readonly';
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
   gapi.client.init({
        'clientId': '749172564092-dannrv43gk2tn80997qeuhn043mqg4q9.apps.googleusercontent.com',
        'scope': SCOPE
    }).then(function () {
   GoogleAuth = gapi.auth2.getAuthInstance();
   GoogleAuth.isSignedIn.listen(updateSigninStatus);
   var user = GoogleAuth.currentUser.get();
   setSigninStatus();

   $('#sign-in-or-out-button').click(function() {
     handleAuthClick();
   });
   $('#revoke-access-button').click(function() {
     revokeAccess();
   });
 });
}

function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
    GoogleAuth.signOut();
  } else {
    GoogleAuth.signIn();
  }
}

function revokeAccess() {
  GoogleAuth.disconnect();
}

function setSigninStatus() {
  var user = GoogleAuth.currentUser.get();
  var isAuthorized = user.hasGrantedScopes(SCOPE);
  if (isAuthorized) {
    var profile = GoogleAuth.currentUser.get().getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

   $('#sign-in-or-out-button').html('Sign out');
   $('#revoke-access-button').css('display', 'inline-block');
   $('#credit-score').css('display', 'inline-block');
   $('#amount').css('display', 'inline-block');
   $('#confirm-payment-button').css('display', 'inline-block');
   $('#auth-status').html('You are currently signed in.');
   } else {
   $('#sign-in-or-out-button').html('Sign In With Google');
   $('#revoke-access-button').css('display', 'none');
   $('#credit-score').css('display', 'none');
   $('#amount').css('display', 'none');
   $('#confirm-payment-button').css('display', 'none');
   $('#auth-status').html('Please Sign in to Google.');
 }
}

function updateSigninStatus() {
    setSigninStatus();
}

window.onload = function() {
   var js = document.createElement("script");
   js.type = "text/javascript";
   js.src = "https://code.jquery.com/jquery-3.4.1.slim.min.js";
   js.integrity = "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
   js.crossOrigin = "anonymous"
   document.body.appendChild(js);


   var js2 = document.createElement("script");
   js2.type = "text/javascript";
   js2.src = "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js";
   js2.integrity = "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
   js2.crossOrigin = "anonymous"
   document.body.appendChild(js2);

   var js3 = document.createElement("script");
   js3.type = "text/javascript";
   js3.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js";
   js3.integrity =   "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
   js3.crossOrigin = "anonymous"
   document.body.appendChild(js3);

   var lnk = document.createElement("link")
   lnk.rel = "stylesheet"
   lnk.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
   lnk.integrity = "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
   lnk.crossOrigin = "anonymous"
   document.head.append(lnk);
}

// var meta1 = document.createElement('meta');
// meta1.setAttribute("charset", "utf-8");
// meta1.content = document.location;
// document.getElementsByTagName('head')[0].appendChild(link);
/// will include the meta tags if required for bootstrap ///////////////

   
var signInOutButton = document.createElement("BUTTON");
signInOutButton.id = "sign-in-or-out-button"
signInOutButton.style = "margin-left: 25px"
var text = document.createTextNode("Sign In/Out");
signInOutButton.appendChild(text);

var revokeAccessButtom = document.createElement("BUTTON");
revokeAccessButtom.id = "revoke-access-button"
revokeAccessButtom.style = " margin-left: 25px"
var text2 = document.createTextNode("Revoke access");
revokeAccessButtom.appendChild(text2);

var p1 = document.createElement("p")
p1.id = "credit-score"
p1.style = " margin-left: 25px"
var text3 = document.createTextNode("Your Credit Score is 600");
p1.appendChild(text3);

var p2 = document.createElement("p")
p2.id = "amoun"
p2.style = " margin-left: 25px"
var text4 = document.createTextNode("Total Amount to be paid is 500");
p2.appendChild(text4);

var div1 = document.createElement("div")
div1.className = "modal-body"

div1.appendChild(p1)
div1.appendChild(p2)
div1.appendChild(signInOutButton)
div1.appendChild(revokeAccessButtom)

div2 = document.createElement("div")
div2.id = "auth-status"
div2.style = " padding-left: 25px"
div1.append(div2)

div3 = document.createElement("div")
div3.className = "modal-header"

div4 = document.createElement("div")
div4.className = "modal-content"

div4.appendChild(div1)

div44 = document.createElement("div")
div44.className = "modal-footer"

div5 = document.createElement("div")
div5.className = "modal-dialog modal-dialog-centered"
div5.role = "document"

div6 = document.createElement("div")
div6.className = "modal fade"
div6.id = "myModal1"
div6.role =  "dialog"

div7 = document.createElement("div")
div7.className = "modal-dialog modal-dialog-centered"
div7.role = "document"

div8= document.createElement("div")
div8.className = "modal-content"

div8.appendChild(div3)
div8.appendChild(div4)
div8.appendChild(div44)
div7.appendChild(div8)
div6.appendChild(div7)
document.body.appendChild(div6)
// document.getElementById("bx-pay-button").append(div6);

var Button2 = document.createElement("BUTTON");
Button2.type = "button"
Button2.className = "btn btn-info btn-lg"
Button2.id= "myBtn"
var text5 = document.createTextNode("Pay With BharatX");
Button2.appendChild(text5);
// document.body.appendChild(Button2)
document.getElementById("bx-pay-button").appendChild(Button2);

var ConfirmPayment = document.createElement("BUTTON");
ConfirmPayment.type = "button"
ConfirmPayment.id = "confirm-payment-button"
ConfirmPayment.className = "btn btn-primary"
var text55 = document.createTextNode("Confirm Payment");
ConfirmPayment.appendChild(text55);

div44.appendChild(ConfirmPayment)

var closebtn = document.createElement("BUTTON");
closebtn.type = "button"
closebtn.setAttribute("data-dismiss", "modal")
closebtn.className = "close"
closebtn.setAttribute("aria-label", "Close")

var clsx = document.createElement("span")
clsx.setAttribute("aria-hidden", "true")
clsx.innerHTML = "&times;"
closebtn.appendChild(clsx)

var header = document.createElement("h5")
header.className = "modal-title"
header.innerHTML = "Payment"
div3.appendChild(header)
div3.appendChild(closebtn)

$(document).ready(function(){
  $("#myBtn").click(function(){
    $("#myModal1").modal();
  });
});

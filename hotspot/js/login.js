let app_id = '805150661229257'           // id do app criado no facebook

let userInMk = ''                    // usuario e senha configurado no serviço de hotspot mikrotik
let passInMK = ''

window.fbAsyncInit = function() {
  FB.init({
    appId      : app_id,
    xfbml      : true,
    version    : 'v16.0'
  });
 

FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
  statusChangeCallback(response);        // Returns the login status.
});
};

function init_reset_user(){
  FB.logout(function(response) {
    // user is now logged out
  });
}

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
  // console.log('statusChangeCallback');
  // console.log(response);                   // The current login status of the person.
  if (response.status === 'connected') {   // Logged into your webpage and Facebook.
    authHotspotMikrotik()
    
  } else {                                 // Not logged into your webpage or we are unable to tell.
   alert('por favor, entre com sua conta do facebook!')
  }
}

function check_status_btn(response){
  if (response.status == 'connected') {
    redirect()
  }
}

function redirect() {
 
  location.replace("https://www.instagram.com/wrnet_provedor/")
}

function authenticate() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}

// autentica usuario ao microtik
function authHotspotMikrotik() {
  // console.log('authHotspotMikrotik');
  document.sendin.username.value = userInMk;
  document.sendin.password.value = passInMK;
  document.sendin.submit()
 
  // return false;
}
window.fbAsyncInit = function() {
    FB.init({
        appId: '805150661229257',
        xfbml: true,
        version: 'v16.0'
    });
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response)
    })
}

function fb_getStatus() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response)
    })
}
function statusChangeCallback(response) {
    if (response.status === 'connected') {
        authHotspotMikrotik()
    } 
    // else {
    //     alert('por favor, entre com sua conta do facebook!')
    // }
}
function check_status_btn(response) {
    if (response.status == 'connected') {
        redirect();
    }
}
function redirect() {
    location.replace("https://www.instagram.com/wrnet_provedor/")
}
;function authHotspotMikrotik() {
    document.sendin.username.value = 'client';
    document.sendin.password.value = 'A77ER32F@weKa!12';
    document.sendin.submit();
}

app.factory('services_social', ['services', '$rootScope', 'toastr', function(services, $rootScope, toastr) {
    let service = { initialize: initialize, log_google: log_google, log_github: log_github, login_social_singin: login_social_singin };
    return service;

    function initialize() {
        var config = {
            apiKey: "AIzaSyDvLROZ3sRHvAR4kU7wnjiP_kxCB7VNPVY",
            authDomain: "prueba-social-346513.firebaseapp.com",
            projectId: "prueba-social-346513",
            storageBucket: "",
            messagingSenderId: "1083042191876"
        };

        firebase.initializeApp(config);
    }


    function log_google() {

        var authService = firebase.auth();
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        authService.signInWithPopup(provider)
            .then(function(data) {
                login_social_singin(data);
            })
    }

    function log_github() {

        var authService = firebase.auth();
        var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('email');
        authService.signInWithPopup(provider)
            .then(function(data) {
                login_social_singin(data);
            })
    }

    function login_social_singin(user_data) {
        const username = user_data.user.displayName;
        const email = user_data.user.email
        const profile = user_data.user.photoURL
        const user_id = user_data.user.uid
        const provider = user_data.credential.providerId;
        const user = { 'username': username, 'email': email, 'profile': profile, 'user_id': user_id, "provider": provider };
        console.log(user);
        services.post('login', 'social_singin', { 'username': username, 'email': email, 'profile': profile, 'user_id': user_id, "provider": provider })
            .then(function(response) {
                localStorage.setItem('token', response);
                if (localStorage.getItem('details')) {
                    toastr.success('Volviendo a los detalles del coche');
                    setTimeout(function() {
                        location.href = "#/shop";
                    }, 2000);
                } else {
                    toastr.success('Logueado con exito');
                    location.reload();
                    setTimeout(function() {
                        location.href = "#/home";
                    }, 1000);
                }
            })
    }
}])
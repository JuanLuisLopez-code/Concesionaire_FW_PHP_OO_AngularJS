app.factory('services_register', ['services', '$rootScope', 'toastr', function(services, $rootScope, toastr, $location) {
    let service = { register_user: register_user, recovery: recovery };
    return service;

    function register_user(data) {
        services.post('login', 'register_c', { 'user': data['user'], 'pass': data['pass'], 'email': data['email'] })
            .then(function(response) {
                if (response == "Usuarios existente") {
                    $("#error_username").html('El usuario ya esta registrado');
                } else if (response == "Email existente") {
                    $("#error_email").html('El email ya esta registrado');
                } else {
                    toastr.success('Porfavor verifique su email, para poder continuar');
                    setTimeout(function() {
                        location.href = "#/home";
                    }, 5000);
                }
            })
    }

    function recovery(data) {
        if (data['email_recovery'] == undefined) {
            toastr.success('Porfavor escriba un email existente');
        } else {
            services.post('login', 'recovery_pass', { 'email_recovery': data['email_recovery'], 'passwd_recovery': data['passwd_recovery'] })
                .then(function(response) {
                    toastr.success('Porfavor revise su correo para cambiar la contraseña');
                })
        }
    }

}])
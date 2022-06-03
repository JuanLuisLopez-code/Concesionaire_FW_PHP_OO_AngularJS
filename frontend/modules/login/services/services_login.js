app.factory('services_login', ['services', '$rootScope', 'toastr', function(services, $rootScope, toastr, $location) {
    let service = { login_user: login_user, token_c: token_c };
    return service;

    function login_user(data) {
        services.post('login', 'login_c', { 'user': data['user_log'], 'passwd': data['pass_log'] })
            .then(function(response) {
                if (JSON.parse(response) == 'contraseña incorrecta') {
                    toastr.warning('Contraseña incorrecta');
                } else if (JSON.parse(response) == 'user no existe') {
                    toastr.warning('Usuario no exsitente');
                } else {
                    localStorage.setItem('token', response);
                    token_c();
                }
            })
    }

    function token_c() {
        var token = JSON.parse(localStorage.getItem('token'));
        services.post('login', 'token_c', { 'token': token })
            .then(function(response) {
                $rootScope.login_scope = response;
                $rootScope.token_scope_log = true;
                $rootScope.log_out_show = true;
                if (localStorage.getItem('details')) {
                    toastr.success('Volviendo a los detalles del coche');
                    setTimeout(function() {
                        location.href = "#/shop";
                    }, 5000);
                } else if (localStorage.getItem('move')) {
                    toastr.success('Volviendo a las compras');
                    setTimeout(function() {
                        location.href = "#/shop";
                    }, 5000);
                } else {
                    toastr.success('Logueado con exito');
                    setTimeout(function() {
                        location.href = "#/home";
                    }, 5000);
                }
            })
    }
}])
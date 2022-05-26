app.factory('services_paths', ['services', '$rootScope', 'toastr', function(services, $rootScope, toastr, $location) {
    let service = { verify: verify };
    return service;

    function verify(token_email_verify, type) {
        services.post('login', 'verify_email', { token_email_verify, type })
            .then(function(response) {
                toastr.success('Email verificado, ya puede loguearse');
            })
    }

}])
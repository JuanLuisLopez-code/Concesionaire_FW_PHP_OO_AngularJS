app.factory('services_security_login', ['services', '$rootScope', 'toastr', function(services, $rootScope, toastr) {
    let service = { check_login_interval: check_login_interval, log_out: log_out, protecturl: protecturl, refresh_token: refresh_token, refresh_session: refresh_session };
    return service;

    function check_login_interval() {
        setInterval(function() {
            services.post('login', 'actividad')
                .then(function(data) {
                    if (JSON.parse(data) != "activo") {
                        log_out();
                    }
                })
        }, 600000);

    }

    function protecturl() {
        var token = JSON.parse(localStorage.getItem('token'));
        services.post('login', 'controluser', { 'token': token })
            .then(function(data) {
                if (JSON.parse(data) == "anonimo") {
                    if (localStorage.getItem('token')) {
                        localStorage.removeItem('token');
                        localStorage.removeItem('move');
                        log_out();
                    }
                }
            })
    }

    function refresh_token() {
        var token = JSON.parse(localStorage.getItem('token'));
        setInterval(function() {
            services.post('login', 'refresh_token', { 'token': token })
                .then(function(data) {
                    localStorage.setItem('token', data);
                })
        }, 600000);

    }

    function refresh_session() {
        setInterval(function() {
            services.post('login', 'refresh_session');
        }, 600000);

    }

    function log_out() {
        console.log("asd")
        localStorage.removeItem('token');
        localStorage.removeItem('move');
        localStorage.removeItem('id');
        localStorage.removeItem('details');
        localStorage.removeItem('likes')
        services.post('login', 'delete_session');
        location.reload();
    }
}])
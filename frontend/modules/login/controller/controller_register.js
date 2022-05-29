app.controller('controller_register', function($rootScope, $scope, $route, services, services_register, $routeParams, services_paths, services_login) {
    $scope.log_reg = true;
    $scope.recovery_show = false;

    $scope.register = function() {
        let data = { 'user': $scope.user_register, 'pass': $scope.pass_register, 'email': $scope.email_register };
        services_register.register_user(data);
    }

    $scope.login = function() {
        let data_login = { 'user_log': $scope.user_login, 'pass_log': $scope.passwd };
        services_login.login_user(data_login);
    }

    $scope.recovery = function() {
        $scope.log_reg = false;
        $scope.recovery_show = true;
    }

    $scope.send_recovery = function() {
        let data = { 'email_recovery': $scope.email_recovery, 'passwd_recovery': $scope.pass_recovery };
        services_register.recovery(data);
    }


    let path = $route.current.originalPath.split('/');
    if (path[1] === 'verify') {
        let token_email_verify = $routeParams.token;
        let type = 'verify';
        services_paths.verify(token_email_verify, type)
    } else if (path[1] === 'recovery') {
        let token_email_verify = $routeParams.token;
        let type = 'recovery';
        services_paths.recovery(token_email_verify, type)
    }
})
app.controller('controller_register', function($rootScope, $scope, $route, services, services_register, $routeParams, services_paths) {
    $scope.log_reg = true;
    $scope.recovery = false;

    $scope.register = function() {
        let data = { 'user': $scope.user_register, 'pass': $scope.pass_register, 'email': $scope.email_register };
        services_register.register_user(data);
    }


    let path = $route.current.originalPath.split('/');
    if (path[1] === 'verify') {
        let token_email_verify = $routeParams.token;
        let type = 'verify';
        services_paths.verify(token_email_verify, type)
    }
})
app.controller('controller_register', function($rootScope, $scope, $route, services, services_register) {
    $scope.log_reg = true;
    $scope.recovery = false;

    $scope.register = function() {
        let data = { 'user': $scope.user_register, 'pass': $scope.pass_register, 'email': $scope.email_register };
        services_register.register_user(data);
    }
})
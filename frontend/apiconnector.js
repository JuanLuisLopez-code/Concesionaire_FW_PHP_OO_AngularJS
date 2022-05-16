app.factory("services", ['$http', '$q', function($http, $q) {
    let serviceBase = '/AngularJS_FW_PHP_OO_MVC/backend/index.php?page=';
    let obj = {};
    obj.get = function(module, functi) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: serviceBase + module + '&op=' + functi
        }).success(function(data, status, headers, config) {
            defered.resolve(data);
        }).error(function(data, status, headers, config) {
            defered.reject(data);
        });
        return promise;
    };

    obj.get_api = function(url) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: url
        }).success(function(data, status, headers, config) {
            defered.resolve(data);
        }).error(function(data, status, headers, config) {
            defered.reject(data);
        });
        return promise;
    };

    obj.post = function(module, functi) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: serviceBase + module + '&op=' + functi
        }).success(function(data, status, headers, config) {
            defered.resolve(data);
        }).error(function(data, status, headers, config) {
            defered.reject(data);
        });
        return promise;
    };

    obj.post = function(module, option, data) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: serviceBase + module + '&op=' + option,
            data: data
        }).success(function(response, status, headers, config) {
            defered.resolve(response);
        }).error(function(error, status, headers, config) {
            defered.reject(error);
        });
        return promise;
    };

    return obj;

}]);
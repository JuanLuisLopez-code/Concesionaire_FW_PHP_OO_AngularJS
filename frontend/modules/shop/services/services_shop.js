app.factory('services_shop', ['services', '$rootScope', function(services, $rootScope) {
    let service = { filter_home: filter_home, filter_shop: filter_shop };
    return service;

    function filter_home(filtros) {
        services.post('shop', 'redirect', { filtros })
            .then(function(response) {
                $rootScope.shopAll_scope = response;
            })
    }

    function filter_shop(filter) {
        services.post('shop', 'filter', { filter })
            .then(function(response) {
                // console.log(response)
                $rootScope.shopAll_scope = response;
            })
    }
}]);
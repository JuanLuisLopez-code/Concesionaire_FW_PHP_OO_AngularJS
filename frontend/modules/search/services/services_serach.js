app.factory('services_search', ['services', '$rootScope', function(services, $rootScope) {
    let service = { load_brands: load_brands };
    return service;

    function load_brands() {
        services.post('search', 'load_brands')
            .then(function(response) {
                $rootScope.brands_search = response;
                console.log(response);
            })
    }
}]);
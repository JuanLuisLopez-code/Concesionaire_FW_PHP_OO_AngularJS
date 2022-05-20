app.factory('services_search', ['services', '$rootScope', function(services, $rootScope) {
    let service = { load_brands: load_brands, load_category: load_category };
    return service;

    function load_brands() {
        services.post('search', 'load_brands')
            .then(function(response) {
                $rootScope.brands_search = response;
                console.log(response);
            })
    }

    function load_category(brand) {
        services.post('search', 'search_category', { brand })
            .then(function(response) {
                let cat_push = [];
                for (var i = 0; i < response.length; i++) {
                    cat_push.push(response[i]['cat_name']);
                }
                console.log(cat_push)
                $rootScope.categoria_search = cat_push;
            })
    }
}]);
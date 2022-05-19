app.factory('services_shop', ['services', '$rootScope', function(services, $rootScope) {
    let service = { filter_home: filter_home, filter_shop: filter_shop, details: details, visitas: visitas };
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
                $rootScope.shopAll_scope = response;
            })
    }

    function details(id) {
        var img_array = [];
        let single = [];
        services.post('shop', 'details', { id })
            .then(function(response) {
                for (var i = 0; i < response.length; i++) {
                    img_array.push(response[i].img);
                }
                single.push(response[0])
                console.log(img_array)
                $rootScope.img_array_scope = img_array;
                $rootScope.shopAll_scope = single;
            })
    }

    function visitas(id) {
        services.post('shop', 'visitas', { id })
    }
}]);
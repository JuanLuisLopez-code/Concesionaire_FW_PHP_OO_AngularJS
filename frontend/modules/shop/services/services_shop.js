app.factory('services_shop', ['services', '$rootScope', function(services, $rootScope) {
    let service = { filter_home: filter_home, filter_shop: filter_shop, details: details, visitas: visitas, highlight: highlight, filter_search: filter_search };
    return service;

    function filter_home(filtros) {
        services.post('shop', 'redirect', { filtros })
            .then(function(response) {
                var count1 = 2;
                $rootScope.loadMore = function() {
                    count1++;
                    $rootScope.shopAll_scope = response.slice(0, count1);
                }
            })
    }

    function highlight(filtros) {
        $rootScope.filtro_scope = filtros;
    }

    function filter_shop(filter) {
        services.post('shop', 'filter', { filter })
            .then(function(response) {
                var count1 = 2;
                $rootScope.loadMore = function() {
                    count1++;
                    $rootScope.shopAll_scope = response.slice(0, count1);
                }
            })
    }

    function filter_search(filters_search) {
        services.post('shop', 'filters_search', { filters_search })
            .then(function(response) {
                var count1 = 2;
                $rootScope.loadMore = function() {
                    count1++;
                    $rootScope.shopAll_scope = response.slice(0, count1);
                }
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
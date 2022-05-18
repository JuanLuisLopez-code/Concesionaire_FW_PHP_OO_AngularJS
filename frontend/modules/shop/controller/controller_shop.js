app.controller('controller_shop', function($rootScope, $scope, $route, services, shopAll, services_shop) {

    $scope.filter_button = function(filter_type, filter_category, filter_order) {
        var filter = [];

        if (filter_type != undefined) {
            filter.push(['combustible', $scope.filter_type]);
        }
        if (filter_category != undefined) {
            filter.push(['categoria', $scope.filter_category]);
        }
        if (filter_order != undefined) {
            filter.push(['orden', $scope.filter_order]);
        }
        localStorage.setItem('filter', JSON.stringify(filter));
        $route.reload();
    }


    if (localStorage.getItem("filters")) {
        services_shop.filter_home(JSON.parse(localStorage.getItem("filters")));
    } else if (localStorage.getItem("filter")) {
        services_shop.filter_shop(JSON.parse(localStorage.getItem("filter")));
    } else {
        $scope.shopAll_scope = shopAll;
    }



    $scope.filter_remove = function() {
        localStorage.removeItem("filter_type");
        localStorage.removeItem("filter_category");
        localStorage.removeItem("filter_order");
        localStorage.removeItem("filters");
        localStorage.removeItem("filter");
        $route.reload();
    }
});
app.controller('controller_shop', function($rootScope, $scope, $route, services, shopAll, services_shop, $window, services_likes, toastr) {
    localStorage.setItem('move', null);
    $scope.asd = true;
    $scope.img_carousel = false;
    $scope.div_more_cars = false;

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

    $scope.details = function() {
        services_shop.visitas(this.cars.id);
        localStorage.setItem('details', this.cars.id);
        $route.reload();
    }

    if (localStorage.getItem('details')) {
        services_shop.details(localStorage.getItem('details'));
        services_shop.more_cars(localStorage.getItem('details'));

        $scope.asd = false;
        $scope.img_carousel = true;
        $scope.div_more_cars = true;
    } else if (localStorage.getItem("filters")) {
        services_shop.filter_home(JSON.parse(localStorage.getItem("filters")));
    } else if (localStorage.getItem("filters_search")) {
        services_shop.filter_search(JSON.parse(localStorage.getItem("filters_search")));
    } else if (localStorage.getItem("filter")) {
        services_shop.highlight(JSON.parse(localStorage.getItem("filter")));
        services_shop.filter_shop(JSON.parse(localStorage.getItem("filter")));
    } else {
        shopAll = services_likes.response_likes(shopAll);
        var count1 = 2;
        $scope.loadMore = function() {
            count1++;
            $scope.shopAll_scope = shopAll.slice(0, count1);
        }
    }

    $scope.filter_remove = function() {
        localStorage.removeItem("filter_type");
        localStorage.removeItem("filter_category");
        localStorage.removeItem("filter_order");
        localStorage.removeItem("filters");
        localStorage.removeItem("filter");
        localStorage.removeItem("filters_search");
        localStorage.removeItem("details");
        $window.location.reload();
    }

    $rootScope.likes = function() {
        if (localStorage.getItem('token')) {
            services_likes.likes(this.cars.id);
        } else {
            toastr.success('Tiene que loguearse para dar like');
            setTimeout(function() {
                location.href = "#/login";
            }, 5000);
        }
    }
})
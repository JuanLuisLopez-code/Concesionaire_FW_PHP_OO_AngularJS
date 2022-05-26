var app = angular.module('AngularJS_FW_PHP_OO_MVC', ['ngRoute', 'toastr', 'ui.bootstrap', 'infinite-scroll']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when("/contact", {
            templateUrl: "frontend/modules/contact/view/contact.html",
            controller: "controller_contact"
        }).when("/home", {
            templateUrl: "frontend/modules/home/view/homepage.html",
            controller: "controller_home",
            resolve: {
                carousel: function(services) {
                    return services.post('home', 'carousel');
                },
                categoria: function(services) {
                    return services.post('home', 'categoria');
                },
                type: function(services) {
                    return services.post('home', 'type');
                },
                books: function(services) {
                    return services.get_api('https://www.googleapis.com/books/v1/volumes?q=car');
                }
            }
        }).when("/shop", {
            templateUrl: "frontend/modules/shop/view/home_shop.html",
            controller: "controller_shop",
            resolve: {
                shopAll: function(services) {
                    return services.post('shop', 'shopAll')
                }
            }
        }).when("/login", {
            templateUrl: "frontend/modules/login/view/login.html",
            controller: "controller_register"
        }).otherwise("/home", {
            templateUrl: "frontend/modules/home/view/homepage.html",
            controller: "controller_home",
            resolve: {
                carousel: function(services) {
                    return services.post('home', 'carousel');
                },
                categoria: function(services) {
                    return services.post('home', 'categoria');
                },
                type: function(services) {
                    return services.post('home', 'type');
                },
                books: function(services) {
                    return services.get_api('https://www.googleapis.com/books/v1/volumes?q=car');
                }
            }
        });
}]);

app.run(function($rootScope, services, services_search, $location) {
    services_search.load_brands();


    $rootScope.rotate_category = function(brand) {
        services_search.load_category(brand);
    }

    $rootScope.click_autocomplete = function(search_brand = undefined, search_category = undefined, autocomplete) {
        services_search.search_autocomplete(search_brand, search_category, autocomplete);
    }

    $rootScope.click_search = function(search_brand = undefined, search_category = undefined, autocomplete = undefined) {
        services_search.search(search_brand, search_category, autocomplete);
        $location.path("/shop");
    }

    $rootScope.prueba = function() {
        $rootScope.autocomplete = this.com.city;
        $rootScope.complete = null;
    }
});
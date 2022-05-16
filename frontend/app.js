var app = angular.module('AngularJS_FW_PHP_OO_MVC', ['ngRoute', 'toastr']);

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




// DEBUG
// services.post('home', 'categoria')
// .then(function(resolve) {
//     console.log(resolve)
// })
app.controller('controller_home', function($scope, services, categoria, type, carousel, books, $location) {
        $scope.carousel_scope = carousel;
        $scope.categoria_scope = categoria;
        $scope.type_scope = type;
        var books_array = [];

        books.items.forEach(books => {
            if (books.volumeInfo) {
                const const_books = {
                    'title': books.volumeInfo.title,
                    'thumbnail': books.volumeInfo.imageLinks.thumbnail,
                    'description': books.volumeInfo.description,
                    'link': books.accessInfo.webReaderLink
                }
                books_array.push(const_books);
            }
        });

        $scope.books_scope = books_array;

        $scope.click_carousel = function(id_brand) {
            let filters = [];

            localStorage.removeItem('filters');
            filters.push({ "marca": [id_brand] });
            localStorage.setItem('filters', JSON.stringify(filters));

            $location.path("/shop");
        }

        $scope.click_cat = function(cat_name) {
            let filters = [];

            localStorage.removeItem('filters');
            filters.push({ "categoria": [cat_name] });
            localStorage.setItem('filters', JSON.stringify(filters));

            $location.path("/shop");
        }

        $scope.click_type = function(type_name) {
            let filters = [];

            localStorage.removeItem('filters');
            filters.push({ "type": [type_name] });
            localStorage.setItem('filters', JSON.stringify(filters));

            $location.path("/shop");
        }

        // $timeout(function() {
        //     $('#slider').owlCarousel({
        //         items: 3,
        //         loop: true,
        //         margin: 10,
        //         nav: false,
        //         autoplay: true,
        //         autoplayTimeout: 4000,
        //         smartSpeed: 800
        //     });
        // }, 0);

    }).directive("owlCarousel", ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            transclude: false,
            link: function(scope) {
                scope.initCarousel = function(element) {
                    $timeout(function() {
                        // provide any default options you want
                        var defaultOptions = {};
                        var customOptions = scope.$eval($(element).attr('data-options'));
                        // combine the two options objects
                        for (var key in customOptions) {
                            defaultOptions[key] = customOptions[key];
                        }
                        // init carousel
                        $(element).owlCarousel(defaultOptions);
                    }, 50);
                };
            }
        };
    }])
    .directive('owlCarouselItem', [function() {
        return {
            restrict: 'A',
            transclude: false,
            link: function(scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }]);
app.controller('controller_home', function($scope, services, categoria, type, carousel, books, $location) {
    $scope.carousel_scope = carousel;
    $scope.categoria_scope = categoria;
    $scope.type_scope = type;
    var books_array = [];
    var prueba_slice = 2;

    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;

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

    $scope.MoreBooks = function() {
        prueba_slice++;
        prueba_slice++;
        $scope.books_scope = books_array.slice(0, prueba_slice);
    }

    $scope.books_scope = books_array.slice(0, prueba_slice);

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
})
app.controller('controller_home', function($scope, services, categoria, type, carousel, $timeout, books) {
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
    console.log($scope.books_scope.thumbnail);

    $timeout(function() {
        $('#slider').owlCarousel({
            items: 3,
            loop: true,
            margin: 10,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 800
        });
    }, 0);
});
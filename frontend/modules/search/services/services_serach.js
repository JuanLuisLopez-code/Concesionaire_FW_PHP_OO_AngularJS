app.factory('services_search', ['services', '$rootScope', function(services, $rootScope, $location) {
    let service = { load_brands: load_brands, load_category: load_category, search: search, search_autocomplete: search_autocomplete };
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

    function search_autocomplete(search_brand = undefined, search_category = undefined, autocomplete) {
        if (autocomplete != "") {
            services.post('search', 'autocomplete', { search_brand: search_brand, search_category: search_category, complete: autocomplete })
                .then(function(response) {
                    $rootScope.complete = response;
                }, function(error) {
                    console.log(error);
                });
        } else {
            $rootScope.complete = [];
        }
    }

    function search(search_brand = undefined, search_category = undefined, complete) {
        if (search_brand || search_category || complete != undefined && complete != "") {
            var filters_serch = [];
        }

        if (search_brand) {
            filters_serch.push({ "brand": search_brand });
        }
        if (search_category) {
            filters_serch.push({ "category": search_category });
        }
        if (complete != undefined && complete != "") {
            filters_serch.push({ "complete": complete });
        }

        if (filters_serch) {
            localStorage.setItem("filters_search", JSON.stringify(filters_serch));
        }

    }
}]);
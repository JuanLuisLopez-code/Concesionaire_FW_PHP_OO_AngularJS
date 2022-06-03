app.factory('services_likes', ['services', '$rootScope', function(services, $rootScope) {
    let service = { likes: likes, load_likes: load_likes, response_likes: response_likes, likes_details: likes_details };
    return service;


    function load_likes() {
        let token = JSON.parse(localStorage.getItem('token'));
        services.post('shop', 'load_likes', { 'token': token })
            .then(function(response) {
                let likes_array = [];
                response.forEach(position => {
                    likes_array.push(position['car_id'])
                });
                localStorage.setItem('likes', JSON.stringify(likes_array));
            })
    }

    function response_likes(response) {
        if (localStorage.getItem('token')) {
            let likes_temp = [];
            let likes_array = JSON.parse(localStorage.getItem('likes'));
            response.forEach(position => {
                if (likes_array.includes(position.id)) {
                    position.like = true;
                } else {
                    position.like = false;
                }
                likes_temp.push(position);
            });
            return likes_temp;
        } else {
            return response;
        }
    }

    function likes(id) {
        let token = JSON.parse(localStorage.getItem('token'));
        services.post('shop', 'control_likes', { 'token': token, 'id': id })
            .then(function(response) {
                if (response) {
                    angular.element(document.getElementById('like_' + id)).toggleClass('like_red')
                }
            })
    }

    function likes_details(id) {
        let token = JSON.parse(localStorage.getItem('token'));
        services.post('shop', 'control_likes', { 'token': token, 'id': id })
            .then(function(response) {
                if (response) {
                    angular.element(document.getElementById('like_' + id)).toggleClass('like_red')
                }
            })
    }
}])
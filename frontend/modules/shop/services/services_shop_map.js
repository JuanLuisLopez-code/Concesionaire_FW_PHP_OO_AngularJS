app.factory('services_shop_map', ['services', '$rootScope', function(services, $rootScope) {
    let service = { mapBox_all: mapBox_all };
    return service;


    function mapBox_all(shop) {
        console.log(shop)
        mapboxgl.accessToken = 'pk.eyJ1IjoiMjBqdWFuMTUiLCJhIjoiY2t6eWhubW90MDBnYTNlbzdhdTRtb3BkbyJ9.uR4BNyaxVosPVFt8ePxW1g';

        $rootScope.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-0.61667, 38.83966492354664], // starting position [lng, lat]
            zoom: 6 // starting zoom
        });
    }
}])
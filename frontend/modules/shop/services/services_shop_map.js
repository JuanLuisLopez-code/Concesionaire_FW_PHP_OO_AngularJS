app.factory('services_shop_map', ['services', '$rootScope', function(services, $rootScope) {
    let service = { mapBox_all: mapBox_all };
    return service;


    function mapBox_all(shop) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiMjBqdWFuMTUiLCJhIjoiY2t6eWhubW90MDBnYTNlbzdhdTRtb3BkbyJ9.uR4BNyaxVosPVFt8ePxW1g';

        $rootScope.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-0.61667, 38.83966492354664], // starting position [lng, lat]
            zoom: 6 // starting zoom
        });
        for (let i = 0; i < shop.length; i++) {
            const marker = new mapboxgl.Marker()
            const minPopup = new mapboxgl.Popup()
            minPopup.setHTML('<h3 style="text-align:center;">' + shop[i].brand_name + '</h3><p style="text-align:center;">Modelo: <b>' + shop[i].modelo + '</b></p>' +
                '<p style="text-align:center;">Precio: <b>' + shop[i].precio + '€</b></p>' +

                '<a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link" data-wow-delay=".4s" id="' + shop[i].id + '">Read More</a>')
            marker.setPopup(minPopup)
                .setLngLat([shop[i].longi, shop[i].lat])
                .addTo($rootScope.map);
        }
    }
}])
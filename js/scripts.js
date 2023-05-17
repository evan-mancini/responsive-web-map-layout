mapboxgl.accessToken = 'pk.eyJ1IjoiZXZhbm1hbmNpbmkiLCJhIjoiY2xnNXE5d2NlMDJxazNxcDhyc2g1eGo2eCJ9.9FsLDvuMxvT0C4cWbIsQAw';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-73.91787758438586, 40.70496076682871],
    zoom: 10.75
});

map.on('load', function () {
    map.addSource('subway_routes', {
        type: 'geojson',
        data: '.data/routes_subway.geojson'
    })
})

map.addLayer({
    id: 'fill-subway_routes',
    type: 'fill',
    source: 'subway_routes',
    paint: {
        'fill-color': '#1bc440'
    }
})

map.on('load', function () {
    map.addSource('expressbus_routes', {
        type: 'geojson',
        data: '.data/routes_expressbus.geojson'
    })
})

map.addLayer({
    id: 'fill-expressbus_routes',
    type: 'fill',
    source: 'expressbuss_routes',
    paint: {
        'fill-color': '#1bc440'
    }
})
mapboxgl.accessToken = ''
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})
function successLocation() {
    setupMap()
}
function errorLocation() {
    setupMap()
}
function testing(x) {
  console.log(x)
}
// Create map & set up functionality
function setupMap() {
    const map = new mapboxgl.Map({
        center: [-30.96, 4],
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 1
    })
    map.on('click', (e) => {
        const userLocation = [e.lngLat.lat, e.lngLat.lng]
        getLocation(userLocation)
        const marker = new mapboxgl.Marker()
        marker.setLngLat([e.lngLat.lng, e.lngLat.lat])
        marker.addTo(map)
        map.on('click', (e) => {
            marker.remove()
            });
    })   
}
// Get user location
function getLocation (userLocation) {
    let country = undefined
    let state = undefined
    let city = undefined
    const KEY = ""
    const LAT = userLocation[0]
    const LNG = userLocation[1]
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
          let parts = data.results[1].address_components;
          parts.forEach(part => {
            if (part.types.includes("country")) {
                country = part.long_name
                document.body.insertAdjacentHTML(
                "beforeend",
                `<p>COUNTRY: ${country}</p>`
              );
            }
            if (part.types.includes("locality")) {
                city = part.long_name
                document.body.insertAdjacentHTML(
                "beforeend",
                `<p>CITY: ${city}</p>`
              );
            }
            if (part.types.includes("administrative_area_level_1")) {
                state = part.long_name
                document.body.insertAdjacentHTML(
                "beforeend",
                `<p>STATE: ${state}</p>`
              );
            }
          });
        })
        .catch(err => console.warn(err.message));
}

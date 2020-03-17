function initMap() {

    //Set map options
    const options = {
        center: {
            lat: 50.660,
            lng: 18.702,
        },
        zoom: 16,
        disableDefaultUI: true,
    };

    //Create new map and place it in prepared div

    let map;
    map = new google.maps.Map(document.querySelector(".footer__map-container"), options);

    //Add marker

    const marker = new google.maps.Marker({
        position: {
            lat: 50.660,
            lng: 18.7027
        },
        map: map,
    });

    // Add function that after click show message

    const infoWindow = new google.maps.InfoWindow({
        content: `<h3>Nasza siedziba</h3>`
    })

    marker.addListener('click', function () {
        infoWindow.open(map, marker);
    });
}
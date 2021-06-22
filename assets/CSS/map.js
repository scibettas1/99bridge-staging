function initMap() {
    const myLatLng = { lat: 40.37934, lng: -74.310975  };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng,
      mapId: "f800eff10e0348a",
    });
    const image = "https://cdngeneral.rentcafe.com/dmslivecafe/2/70799/logo-map-outer-glow.png";
    new google.maps.Marker({
      position: myLatLng,
      map,
      icon: image,
    });
  }

initMap()
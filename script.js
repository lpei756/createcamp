$(document).ready(function () {
  $.getJSON("place_name.json", function (data) {
      $(".placecard-name span").each(function (index) {
          if (index < data.length) {
              $(this).text(data[index]);
          }
      });
  });

  $.getJSON("categories.json", function (data) {
      $(".placecard-category .placecard-text2 span").each(function (index) {
          if (index < data.length) {
              $(this).text(data[index]);
          }
      });
  });

  $.getJSON("address.json", function (data) {
    $(".placecard-address .placecard-text5 span").each(function (index) {
        if (index < data.length) {
            $(this).text(data[index]);
        }
    });
});

});


var userLocation;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(savePosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function savePosition(position) {
    userLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };
}

getLocation();


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

$.getJSON("places.json", function (data) {
    $(".placecard").each(function (index) {
        if (index < data.length && userLocation) {
            var distance = getDistanceFromLatLonInKm(
                userLocation.latitude, userLocation.longitude,
                data[index].lat, data[index].lng
            
            );
            $(this).find(".placecard-text4 span").text(distance.toFixed(1) + " km");
        }
    });
});

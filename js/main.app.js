var map;

function initialize_map() 
{
  var mapOptions = {
    center: geoPoint,
    zoom: 17,
    mapTypeControl: true,
    mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        //position: google.maps.ControlPosition.BOTTOM_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE
        //position: google.maps.ControlPosition.LEFT_CENTER
    },
    scaleControl: true,
    streetViewControl: true,
    scrollwheel: false,
    streetViewControlOptions: {
        //position: google.maps.ControlPosition.LEFT_TOP
    }
  };
  var map = new google.maps.Map(document.getElementById('maplayer'),
      mapOptions);

  var goldStar = {
    path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
    fillColor: 'yellow',
    fillOpacity: 0.8,
    scale: 1,
    strokeColor: 'gold',
    strokeWeight: 14
  };

  var marker = new google.maps.Marker({
    position: geoPoint,
    icon: 'http://gdgrecife.com/extended/img/gdg-marker.png',
    map: map
  });
}
google.maps.event.addDomListener(window, 'load', initialize_map);

function addMarker() {
  var marker = new google.maps.Marker({
    position: geoPoint,
    icon: 'img/gdgbh-marker.png',
    map: map
  });
}

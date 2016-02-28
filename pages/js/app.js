$(document).foundation();
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(14.63859,121.04641),
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);
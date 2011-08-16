
//<![CDATA[
            // this variable will collect the html which will eventually be placed in the side_bar 
            var side_bar_html = "";
            // arrays to hold copies of the markers and html used by the side_bar
            // because the function closure trick doesnt work there 
            var gmarkers = []; 
            var map = null;

function initialize() {
    // create the map
    var myOptions = {
        zoom: 12,
        maxZoom: 15,
        minZoom: 11,
        zoomControlOptions: { style: google.maps.ZoomControlStyle.SMALL },
        center: new google.maps.LatLng(47.6585, -122.3376),
        mapTypeControl: false,
        // mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        
        
    }
    
    map = new google.maps.Map(document.getElementById("location_map_canvas"),myOptions);

    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });

    var point = new google.maps.LatLng(47.668241,-122.38379);
    var marker = createMarker(point,'ballard','<div class="bubble"><p>Ballard</p><p>5458 Leary Ave NW</p><p>(at Market St.)</p><p>(206) 297-1334</p><p></p><p>Su-Th: 3pm-9:30pm</p><p>F & Sa: 3pm-10pm</p><p>Delivery: 4:30pm-9pm</p></div>')
    //<img class="facade" src="images/ballard.jpg"/>

    var point = new google.maps.LatLng(47.615399,-122.312864);
    var marker = createMarker(point,'capitolhill','<div class="bubble"><p>Capitol Hill</p><p>1424 East Pine St</p><p>(at 15th Ave)</p><p>(206) 325-5528</p><p>Daily: 11:30am-10:30pm</p><p>Delivery: 4:30pm-10pm</p></div>')
    //<img class="facade" src="images/capitol.jpg"/>

    var point = new google.maps.LatLng(47.634578,-122.357134);
    var marker = createMarker(point,'queenanne','<div class="bubble"><p>Queen Anne</p><p>1635 Queen Anne Ave</p><p>(at Blaine St.)</p><p>(206) 787-1198</p><p></p><p>Su-Th: 11:30am-9:30pm</p><p>F & Sa: 11:30am-10pm</p><p>Delivery: 4:30pm-9pm</p></div>')
    //<img class="facade" src="images/queenanne.jpg"/>

    var point = new google.maps.LatLng(47.623002,-122.330241);
    var marker = createMarker(point,'southlakeunion','<div class="bubble"><p>South Lake Union</p><p>434 Yale Avenue N</p><p>(at Republican St.)</p><p>(206) 623-0299</p><p></p><p>M-Th: 11:30am - 9:30pm</p><p>F: 11:30am-10pm</p><p>Sa: 3pm-10pm</p><p>Su: 3pm-9:30pm</p></div>')
    //<img class="facade" src="images/SLU.jpg"/>

    var point = new google.maps.LatLng(47.681905,-122.290209);
    var marker = createMarker(point,'wedgewood','<div class="bubble"><p>Wedgwood</p><p>7320 35th Ave NE</p><p>(at 75th St.)</p><p>(206) 658-2929</p><p></p><p>Su-Th: 11:30am-9:30pm</p><p>F & Sa: 11:30am-10pm</p><p>Delivery: 4:30pm-9pm</p></div>')
    //<img class="facade" src="images/wedgwood.jpg"/>

  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("hide_them").innerHTML = side_bar_html;
}

    var infowindow = new google.maps.InfoWindow(
      { 
        size: new google.maps.Size(150,50)
      });

// This function picks up the click and opens the corresponding info window
    function myclick(i) {
      google.maps.event.trigger(gmarkers[i], "click");
    }

    // A function to create the marker and set up the event window function 
    function createMarker(latlng, name, html) {
        var contentString = html;
        var image = 'images/pin_icon2.png';
        var shadow = 'images/shadow.png';
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            icon: image,
            shadow: shadow,
            zIndex: Math.round(latlng.lat()*-100000)<<5
            });



        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(contentString); 
            infowindow.open(map,marker);
            });
        // save the info we need to use later for the side_bar
        gmarkers.push(marker);
        // add a line to the side_bar html
        side_bar_html += '<a href="javascript:myclick(' + (gmarkers.length-1) + ')">' + name + '<\/a><br>';

    function initPolygons() {
        //Wedgwood Delivery Zone
        var wedgwood;
        var wedgwoodCoords = [
          new google.maps.LatLng(47.708144,-122.312164),
          new google.maps.LatLng(47.7093,-122.270966),
          new google.maps.LatLng(47.690815,-122.262383),
          new google.maps.LatLng(47.686192,-122.239037),
          new google.maps.LatLng(47.645499,-122.275772),
          new google.maps.LatLng(47.667468,-122.302208),
          new google.maps.LatLng(47.670243,-122.311821),
          new google.maps.LatLng(47.708144,-122.312164)
        ];

        // Construct the polygon
        // Note that we don't specify an array or arrays, but instead just
        // a simple array of LatLngs in the paths property
        var wedgwoodOptions = {
          paths: wedgwoodCoords,
          clickable: false,
          strokeColor: "#FF0000",
          strokeOpacity: 0.2,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.1
        }
        
        wedgwood = new google.maps.Polygon(wedgwoodOptions);
        wedgwood.setMap(map);
    
        //Ballard Delivery Zone
        var ballard;
        var ballardCoords = [
            new google.maps.LatLng(47.705083,-122.34478),
            new google.maps.LatLng(47.646367,-122.347355),
            new google.maps.LatLng(47.659144,-122.372932),
            new google.maps.LatLng(47.667468,-122.406578),
            new google.maps.LatLng(47.675097,-122.411041),
            new google.maps.LatLng(47.684112,-122.404518),
            new google.maps.LatLng(47.689428,-122.404861),
            new google.maps.LatLng(47.694743,-122.408981),
            new google.maps.LatLng(47.708375,-122.383575),
            new google.maps.LatLng(47.705199,-122.377481),
            new google.maps.LatLng(47.705025,-122.343922)
            ];

        // Construct the polygon
        // Note that we don't specify an array or arrays, but instead just
        // a simple array of LatLngs in the paths property
        
        
        var ballardOptions = {
          paths: ballardCoords,
          clickable: false,
          strokeColor: "#00FF00",
          strokeOpacity: 0.2,
          strokeWeight: 2,
          fillColor: "#00FF00",
          fillOpacity: 0.1
        }
        
        ballard = new google.maps.Polygon(ballardOptions);
        ballard.setMap(map);
        

        //queenAnne Delivery Zone
        var queenAnne;
        var queenAnneCoords = [
            new google.maps.LatLng(47.613338,-122.337425),
            new google.maps.LatLng(47.618574,-122.338493),
            new google.maps.LatLng(47.625618,-122.338343),
            new google.maps.LatLng(47.63827,-122.338343),
            new google.maps.LatLng(47.644328,-122.342248),
            new google.maps.LatLng(47.653941,-122.363834),
            new google.maps.LatLng(47.658335,-122.370701),
            new google.maps.LatLng(47.657988,-122.381344),
            new google.maps.LatLng(47.625603,-122.380314),
            new google.maps.LatLng(47.607783,-122.345724),
            new google.maps.LatLng(47.613338,-122.337441)
            ];

        // Construct the polygon
        // Note that we don't specify an array or arrays, but instead just
        // a simple array of LatLngs in the paths property
        
        var queenAnneOptions = {
          paths: queenAnneCoords,
          clickable: false,          
          strokeColor: "#FFFF00",
          strokeOpacity: 0.2,
          strokeWeight: 2,
          fillColor: "#FFFF00",
          fillOpacity: 0.1
        }
        
        queenAnne = new google.maps.Polygon(queenAnneOptions);
        queenAnne.setMap(map);

        //capitolHill Delivery Zone
        var capitolHill;
        var capitolHillCoords = [
            new google.maps.LatLng(47.613309,-122.337425),
            new google.maps.LatLng(47.609642,-122.3422),
            new google.maps.LatLng(47.607581,-122.345338),
            new google.maps.LatLng(47.601692,-122.340145),
            new google.maps.LatLng(47.601635,-122.296715),
            new google.maps.LatLng(47.606481,-122.296758),
            new google.maps.LatLng(47.608,-122.296264),
            new google.maps.LatLng(47.621344,-122.29606),
            new google.maps.LatLng(47.62253,-122.296146),
            new google.maps.LatLng(47.622848,-122.296178),
            new google.maps.LatLng(47.623311,-122.296425),
            new google.maps.LatLng(47.626124,-122.292337),
            new google.maps.LatLng(47.647176,-122.298303),
            new google.maps.LatLng(47.647407,-122.309418),
            new google.maps.LatLng(47.646482,-122.312894),
            new google.maps.LatLng(47.652929,-122.320147),
            new google.maps.LatLng(47.652987,-122.324181),
            new google.maps.LatLng(47.64174,-122.332678),
            new google.maps.LatLng(47.630809,-122.332592),
            new google.maps.LatLng(47.628264,-122.338171),
            new google.maps.LatLng(47.618574,-122.338461),
            new google.maps.LatLng(47.613309,-122.337425)
            ];
        
        // Construct the polygon
        // Note that we don't specify an array or arrays, but instead just
        // a simple array of LatLngs in the paths property
        
        var capitolHillOptions = {
          paths: capitolHillCoords,
          clickable: false,              
          strokeColor: "#E100FF",
          strokeOpacity: 0.2,
          strokeWeight: 2,
          fillColor: "#E100FF",
          fillOpacity: 0.1
        }
        
        capitolHill = new google.maps.Polygon(capitolHillOptions);
        capitolHill.setMap(map);
        }
        
        
        initPolygons();
    }

    


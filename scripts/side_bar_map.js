// $(function() {

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
    zoom: 6,
    maxZoom: 13,
    minZoom: 5,
    center: new google.maps.LatLng(43.0, -120.75),
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map_canvas"),
                                myOptions);

  google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
        });

  var point = new google.maps.LatLng(46.27245, -120.02761);  // #0
  var marker = createMarker(point,"Alvarez","<div class='infowindow'><H3>Alvarez Organic Farms</H3><p>340 Murray Road</p><p>Mabton, WA</p><p>(413) 262-4338</p><a href='http://www.Alvarezorganic.com' target='_blank'>alvarezorganic.com</a></div>")

  var point = new google.maps.LatLng(45.61788, -122.906799);  // #1
  var marker = createMarker(point,"Beaverton Mustard","<div class='infowindow'><H3>Beaverton Mustards</H3><p>7100 Northwest Century Boulevard,</p><p>Hillsboro, OR</p><p>(503) 646-8138</p><a href='http:www.beavertonfoods.com/' target='_blank'>beavertonfoods.com</a></div>")

  var point = new google.maps.LatLng(48.707049, -119.439068);  // #2
  var marker = createMarker(point,"Billy's Garden","<div class='infowindow'><H3>Billy's Organic Garden</H3><p>Tel: 800.417.6387</p><p>Fax: 509.486.4829</p><a href='http://www.billysgardens.com/' target='_blank'>billysgardens.com</a></div>")

  var point = new google.maps.LatLng(45.427431, -122.591972);  // #3
  var marker = createMarker(point,"Bob's Red Mill","<div class='infowindow'><H3>Bob&apos;s Red Mill</H3><p>13521 Southeast Pheasant Ct,</p><p>Milwaukie, OR</p><p>(503) 654-3215</p><a href='http://www.bobsredmill.com' target='_blank'>bobsredmill.com</a></div>")
  
  var point = new google.maps.LatLng(39.377303, -121.574707);  // #4
  var marker = createMarker(point,"California Olive Ranch","<div class='infowindow'><H3>California Olive Ranch</H3><p>2675 Lone Tree Road,</p><p>Oroville, CA</p><p>(530) 846-8000</p><a href='http://www.californiaoliveranch.com/' target='_blank'>californiaoliveranch.com</a></div>") 

  var point = new google.maps.LatLng(47.567188, -122.332136);  // #5
  var marker = createMarker(point,"Charlie's Produce","<div class='infowindow'><H3>Charlie's Produce</H3><p>4103 2nd Avenue South,</p><p>Seattle, WA</p><p>(206) 625-1412</p><a href='http://www.charliesproduce.com/' target='_blank'>charliesproduce.com</a></div>")

  var point = new google.maps.LatLng(36.96294, -121.544355);  // #6
  var marker = createMarker(point,"Christopher Ranch","<div class='infowindow'><H3>Christopher Ranch</H3><p>305 Bloomfield Avenue,</p><p>Gilroy, CA</p><p>(408) 847-1100</p><a href='http://www.christopherranch.com/' target='_blank'>christopherranch.com</a></div>")

  var point = new google.maps.LatLng(37.657598, -122.389838);  // #7
  var marker = createMarker(point,"Columbus Salame","<div class='infowindow'><H3>Columbus Salame</H3><p>493 Forbes Boulevard, South</p><p>San Francisco, CA</p><p>(510) 921-3400</p><a href='columbussalame.com' target='_blank'>columbussalame.com</a></div>")

  var point = new google.maps.LatLng(49.2624, -123.0330); // #8
  var marker = createMarker(point,"Daiya","<div class='infowindow'><H3>Daiya Foods</H3><p>2768 Rupert St<p>Vancouver, BC</p><p>(604) 569-0747</p><a href='http://www.daiyafoods.com/' target='_blank'>daiyafoods.com</a></div>")

  var point = new google.maps.LatLng(48.433363, -122.330894);  // #9
  var marker = createMarker(point,"Draper Valley Farms","<div class='infowindow'><H3>Draper Valley Farms</H3><p>1000 Jason Lane</p><p>Mt. Vernon, WA</p><p>(425) 793-4135</p><a href='http://www.drapervalleyfarms.com' target='_blank'>drapervalleyfarms.com</a></div>")

  var point = new google.maps.LatLng(47.598905, -122.33402);  // #10
  var marker = createMarker(point,"Dry Soda","<div class='infowindow'><H3>Dry Soda</H3><p>410 1st Ave S,</p><p>Seattle, WA</p><p>(206) 652-2345</p><a href='http://www.drysoda.com' target='_blank'>drysoda.com</a></div>")

  var point = new google.maps.LatLng(36.533364, -121.847238);  // #11
  var marker = createMarker(point,"Earthbound Farms","<div class='infowindow'><H3>Earthbound Farms</H3><p>7250 Carmel Valley Road,</p><p>Carmel Valley, CA</p><p>(831) 625-6219</p><a href='http://www.ebfarm.com' target='_blank'>ebfarm.com</a></div>")

  var point = new google.maps.LatLng(47.105653, -122.884827); // #12
  var marker = createMarker(point,"Fish Tale","<div class='infowindow'><H3>Fish Brewing Company</H3><p>515 Jefferson St. SE,</p><p>Olympia, WA</p><p>(360) 943-6480</p><a href='http://www.fishbrewing.com/brewpub/' target='_blank'>fishbrewing.com</a></div>")

  var point = new google.maps.LatLng(47.615698, -121.912491);  // #13
  var marker = createMarker(point,"Full Circle Farm","<div class='infowindow'><H3>Full Circle Farm</H3><p>31904 NE 8th St,</p><p>Carnation, WA</p><p>(425) 333-4677</p><a href='http://www.fullcirclefarm.com' target='_blank'>fullcirclefarm.com</a></div>")

  var point = new google.maps.LatLng(44.063062, -123.14039);  // #14
  var marker = createMarker(point,"Glorybee Foods","<div class='infowindow'><H3>Glorybee Foods</H3><p>120 North Seneca Road,</p><p>Eugene, OR</p><p>(541) 689-0913</p><a href='http://www.glorybee.com' target='_blank'>glorybee.com</a></div>")

  var point = new google.maps.LatLng(47.749638,-121.988043);  // #15
  var marker = createMarker(point,"HerbCo","<div class='infowindow'><H3>HerbCo</H3><p>16661 W Snoqualmie River Rd,</p><p>Duvall, WA</p><p>(425) 788-7903</p><a href='http://www.http://herbco.net/' target='_blank'>herbco.net</a></div>")

  var point = new google.maps.LatLng(47.55217, -122.32382); // #16
  var marker = createMarker(point,"Isernio","<div class='infowindow'><H3>Isernio Sausage Company</H3><p>5600 7th Avenue South</p><p>Seattle, WA 98108-2644</p><p>(206) 762-6207</p><a href='http://www.isernio.com' target='_blank'>isernio.com</a></div>")

  var point = new google.maps.LatLng(34.233034, -118.37002);  // #17
  var marker = createMarker(point,"Karoun Dairies","<div class='infowindow'><H3>Karoun Dairies</H3><p>9027 Glenoaks Boulevard,</p><p>Sun Valley, CA</p><p>(818) 767-7000</p><a href='http://www.karouncheese.com' target='_blank'>karouncheese.com</a></div>")

  var point = new google.maps.LatLng(38.250621, -122.379981);  // #18
  var marker = createMarker(point,"Laura Chenel's Chevre","<div class='infowindow'><H3>Laura Chenel's Chevre</H3><p>4310 Fremont Drive,</p><p>Sonoma, CA</p><p>(707) 996-4477</p><a href='http://www.laurachenel.com' target='_blank'>laurachenel.com</a></div>")

  var point = new google.maps.LatLng(39.802264, -121.85533);  // #19
  var marker = createMarker(point,"Mooney Farms","<div class='infowindow'><H3>Mooney Farms</H3><p>1220 Fortress Street,</p><p>Chico, CA</p><p>(530) 899-2661</p><a href='http://www.mooneyfarms.com' target='_blank'>mooneyfarms.com</a></div>")

  var point = new google.maps.LatLng(48.102223, -122.793181);  // #20
  var marker = createMarker(point,"Mt Townsend Creamery","<div class='infowindow'><H3>Mt Townsend Creamery</H3><p>338 Sherman Street,</p><p>Port Townsend, WA</p><p>(360) 379-0895</p><a href='http://www.mttownsendcreamery.com' target='_blank'>mttownsendcreamery.com</a></div>")

  var point = new google.maps.LatLng(48.72525, -117.667356);  // #21
  var marker = createMarker(point,"Olsen Farms","<div class='infowindow'><H3>Olsen Farms</H3><p>1900-C Rocky Creek Road</p><p>Colville, WA</p><p>(509) 685-1548</p><a href='http://www.olsenfarms.com' target='_blank'>olsenfarms.com</a></div>")

  var point = new google.maps.LatLng(47.046897, -122.763006);  // #22
  var marker = createMarker(point,"Ostrom Mushrooms","<div class='infowindow'><H3>Ostrom Mushrooms</H3><p>8322 Steilacoom Road SE</p><p>Olympia, WA</p><p>(206) 628-9800</p><a href='http://www.ostrommushrooms.com' target='_blank'>ostrommushrooms.com</a></div>")

  var point = new google.maps.LatLng(47.381621, -120.157739);  // #23
  var marker = createMarker(point,"Pipitone Farm","<div class='infowindow'><H3>Pipitone Farm</H3><p>5541 Penn Ave,</p><p>Rock Island, WA</p><p>509-884-0653</p><a href='mailto:pipitonefarms@msn.com'>pipitonefarms@msn.com</a></div>")

  var point = new google.maps.LatLng(47.233014, -122.059017);  // #24
  var marker = createMarker(point,"Rockridge Orchards","<div class='infowindow'><H3>Rockridge Orchards</H3><p>41127 212th Ave,</p><p>SE Enumclaw, WA</p><p>360-825-1962</p><a href='http://www.rockridgeorchards.com' target='_blank'>rockridgeorchards.com</a></div>")

  var point = new google.maps.LatLng(47.179183, -122.269785);  // #25
  var marker = createMarker(point,"Sidhu Farm","<div class='infowindow'><H3>Sidhu Farm</H3><p>1820 12th Ave SE,</p><p>Puyallup, WA</p><p>(253) 377-7845</p><a href='http://www.sidhufarms.org' target='_blank'>sidhufarms.org</a></div>")

  var point = new google.maps.LatLng(46.211274, -119.746127);  // #26
  var marker = createMarker(point,"Snoqualmie","<div class='infowindow'><H3>Snoqualmie Winery</H3><p>660 Frontier Road,</p><p>Prosser, WA</p><p>(509) 786-5558</p><a href='http://www.snoqualmie.com' target='_blank'>snoqualmie.com</a></div>")

  var point = new google.maps.LatLng(36.654843, -121.629702);  // #27
  var marker = createMarker(point,"Taylor Farms","<div class='infowindow'><H3>Taylor Farms</H3><p>1207 Abbott Street,</p><p>Salinas, CA</p><p>(831) 751-3081</p><a href='http://www.taylorfarms.com' target='_blank'>taylorfarms.com</a></div>")

  var point = new google.maps.LatLng(45.48397, -123.8462);  // #28
  var marker = createMarker(point,"Tillamock","<div class='infowindow'><H3>Tillamook Cheese</H3><p>4175 Highway 101 North<p>Tillamook, OR 97141</p><p>(503) 815-1300</p><a href='http://www.tillamook.com/' target='_blank'>tillamook.com</a></div>")

  var point = new google.maps.LatLng(46.956213, -119.557745);  // #29
  var marker = createMarker(point,"Tonnemaker Hill Farm  ","<div class='infowindow'><H3>Tonnemaker Hill Farm  </H3><p>9098 Road C Southwest,</p><p>Royal City, WA</p><p>(509) 346-2099</p><a href='http://www.tonnemaker.com' target='_blank'>tonnemaker.com</a></div>")

  var point = new google.maps.LatLng(47.613103, -122.344368); // #30
  var marker = createMarker(point,"Zoe","<div class='infowindow'><H3>Zoe's Meats</H3><p>2137 2nd Ave,</p><p>Seattle, WA</p><p>(206) 763-9637</p><a href='http://www.zoesmeats.com' target='_blank'>zoesmeats.com</a></div>")
 
 
 
  // put the assembled side_bar_html contents into the side_bar div
  document.getElementById("side_bar").innerHTML = side_bar_html;
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
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
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
}



// });
    // This Javascript is based on code provided by the
    // Community Church Javascript Team
    // http://www.bisphamchurch.org.uk/   
    // http://econym.org.uk/gmap/
    // from the v2 tutorial page at:
    // http://econym.org.uk/gmap/basic2.htm 
//]]>

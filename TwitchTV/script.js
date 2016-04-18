var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

$(document).ready(function(){
  
});


$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});
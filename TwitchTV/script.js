var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","ESL_SC2"];
var channelData = [];
$(document).ready(function(){
  getDataFromAPI();
  		  		displayTwitchStreamers();
});
function getDataFromAPI(){
	//need name, display_name and logo from channels, I need offline/onlene status from streams and game if online -probably not regular name
	for(var i=0; i<channels.length; i++){
		$.getJSON('https://api.twitch.tv/kraken/streams/'+channels[i]+'?callback=?', function(data) {
			channelData.push(data);
	  		console.log(data);
	  		console.log(data.stream);
	  		console.log(data._links.channel);
	  		console.log(data._links.self);
		});
	}
	for(var j=0; j<channels.length; j++){
		$.getJSON('https://api.twitch.tv/kraken/channels/'+channels[j]+'?callback=?', function(data) {
			channelData.push(data);
	  		console.log(data);
	  		console.log(data.stream);
	  		console.log(data._links.channel);
	  		console.log(data._links.self);
		});
	}
		console.log("channel data length" + channelData.length);

}
function displayTwitchStreamers(){

	 var theTemplateScript = $("#twitch-streamers-template").html();
	 var theTemplate = Handlebars.compile(theTemplateScript);
	 var templateData = [];
	 console.log(channelData.length);
	 for(var i=0; i<channelData.length; i++){
	 	if(data[i].stream == null){
	 		console.log("test");
	 	}
	 }

	 var context = {
    	streamers: ["o","2"]
  	};
	  // Pass our data to the template
  	var theCompiledHtml = theTemplate(context);

  	// Add the compiled html to the page
  	$(document.body).append(theCompiledHtml);

}
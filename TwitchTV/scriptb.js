var channels = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff","ESL_SC2", "brunofin"];
var streamsData = [];
$(document).ready(function(){
  getStreamsFromAPI();
  for(var i=0; i<streamsData.length; i++){
  	console.log(streamsData[i].stream);
  }
  //displayTwitchStreamers();

});
function streamer(name){
	this.name = name;
}
function getStreamsFromAPI(){
	//need name, display_name and logo from channels, I need offline/onlene status from streams and game if online -probably not regular name
	for(var i=0; i<channels.length; i++){
		//var name = channels[i];
		//var s = new streamer(name.toString());
		$.getJSON('https://api.twitch.tv/kraken/streams/'+channels[i]+'?callback=?', function(data) {
			//if(data.stream == null){
			//	s.online = "offline";
			//}
			//else if (typeof data.stream != "undefined") {
   			//	s.online = "non-existant user";
			//}
			//else{
			//	s.online = "online";
			//}
			//channelData.push(s);
			//console.log(data);
			//		console.log(s.name);
			//console.log(s.online);
	  		//console.log(data.stream);
	  		//console.log(data._links.channel);
	  		//console.log(data._links.self);
	  		streamsData.push(data);
	  		console.log(data);
		});


	  		
	}
	//for(var j=0; j<channels.length; j++){
	//	$.getJSON('https://api.twitch.tv/kraken/channels/'+channels[j]+'?callback=?', function(data) {
			//channelData.push(data);
	  		//console.log(data);
	  		//console.log(data.stream);
	  		//console.log(data._links.channel);
	  		//console.log(data._links.self);
		//});
//	}
		//console.log("channel data length" + channelData.length);

}
function displayTwitchStreamers(){

	 var theTemplateScript = $("#twitch-streamers-template").html();
	 var theTemplate = Handlebars.compile(theTemplateScript);
	 var templateData = [];
	 //console.log(channelData.length);
	 for(var i=0; i<channelData.length; i++){
	 	if(data[i].stream == null){
	 		console.log("test");
	 	}
	 }

	 var context = {
    	streamers: []
  	};
	  // Pass our data to the template
  	var theCompiledHtml = theTemplate(context);

  	// Add the compiled html to the page
  	$(document.body).append(theCompiledHtml);

}
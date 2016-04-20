
function getStreams(channels) {
  // Transform an array of channel names into an array of Promises
  // representing the asynchronous action of getting the info
  // about each channels stream.
  const streamData = channels.map(
    channel => $.getJSON(
      'https://api.twitch.tv/kraken/streams/'+channel+'?callback=?'
    )
  );
  //Transform an array of channel names into an array holding info about 
  //each channel
  const channelData = channels.map(
  	channel => $.getJSON(
  	  'https://api.twitch.tv/kraken/channels/'+channel+'?callback=?'
  	)
  );
  // now I need to transform the pertinent info from both streamData and channelData
  //into an array of TwitchUsers


  // Return a new promise which will resolve when *all* channels
  // have been queried.
  return Promise.all(streamData);
}
function determineStreamStatus(element, index, array){
	console.log("here");
	if(element.stream == null){
		twitchUsers[index].online = "offline";
		console.log("offline");
	}
	else if (typeof element.stream != "undefined") {
		twitchUsers[index].online = "non-existant user";
		console.log("non-existant");
	}
	else{
		twitchUsers[index].online = "online";
		console.log("online")
	}

}

const channels = [
  "freecodecamp", "storbeck", "terakilobyte", "habathcx",
  "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff",
  "ESL_SC2", "brunofin"
];
var streamData = [];
var channelData = [];
var twitchUsers = [];
getStreams(channels).then(
  // infos is an array of resolved data about the channels
  // I will need to take the channel info and display it
  infos => infos.forEach(
    info => console.log(info)
  )
);






















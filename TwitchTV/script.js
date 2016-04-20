
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
  console.log(streamData.length);
  console.log(channelData.length);//tomorrow make sure I return the twitchUsers array instead of streamData

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

var twitchUsers = [];
getStreams(channels).then(
  // infos is an array of resolved data about the channels
  // I will need to take the channel info and display it
  infos => infos.forEach(
    info => console.log(info)
  )
);
/*$(document).ready(function() {
  var channels = [
    "freecodecamp", "storbeck", "terakilobyte", "habathcx",
    "RobotCaleb", "thomasballinger", "noobs2ninjas", "beohoff",
    "ESL_SC2", "brunofin"
  ];

  var test = [];
  var test2 = [];

  function getData() {
    var promises = [];
    for (var i = 0; i < channels.length; i++) {
      promises.push(
        $.getJSON(
          'https://api.twitch.tv/kraken/streams/'+channels[i]+'?callback=?'
        )
      );
    }

    return $.when.apply($, promises).then(function() {
      for(var j=0; j<promises.length; j++){
        test.push(promises[j]);
      }
    });
  }
  function getData2() {
    var promises = [];
    for (var i = 0; i < channels.length; i++) {
      promises.push(
        $.getJSON(
          'https://api.twitch.tv/kraken/channels/'+channels[i]+'?callback=?'
        )
      );
    }

    return $.when.apply($, promises).then(function() {
      for(var j=0; j<promises.length; j++){
        test2.push(promises[j]);
      }
    });
  }
  function finalTest(e, i, a){
  		console.log(test[i]);
  }

  getData().then(function() {
    console.log("do I have data?: ");
    for(var j=0; j<test.length; j++) {
       console.log(test[j].responseJSON);
     }
  });
    getData2().then(function() {
    console.log("do I have data?: ");
    for(var j=0; j<test2.length; j++) {
       console.log(test2[j].responseJSON);
     }
  });
    console.log(test.length);
    test.forEach(finalTest);

});*/





















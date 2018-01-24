console.log("Bot is starting12333");

var conf = require("./config");
var twit = require('twit');

var t = new twit(conf);

function gottweet(err,data,response)
{
	text = [];
	//console.log(data)
	var len = data.length;
	for(var i=0;i<len;i++)
	{
		text.push({
			text:data[i].full_text
		})
		//console.log(data[i].user.name)
	}
	console.log(text)
}


t.get('statuses/user_timeline', { screen_name: '@aliaa08', tweet_mode:'extended' }, gottweet)
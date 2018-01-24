
console.log("Bot for fetching the list is starting"); // indicating th

var dict = [];
var tweets;
df = {};

var avg = {};

var counter = 0;
var name_list = [];


var csvdata = require("csvdata");
var conf = require("./config");
var twit = require('twit');
var t = new twit(conf);



function gotData(err,data,response)
{
	var l = data.users.length;
	var dt = data.users;

	for(var i =0;i<l;i++)
	{
		dict.push({
			screen_name: dt[i].screen_name,
    		followers_count: dt[i].followers_count,
    		friends_count:dt[i].friends_count,
    		statuses_count:dt[i].statuses_count
		});

	}
	get_tweets(dict)
	
	
}
t.get('friends/list', { screen_name: '@bot_thunderbolt' }, gotData)





function calc(text,name)
{
	var text_ana = [];
	//console.log(name);
	var l = text.length;
	for(var i=0;i<l;i++)
	{
		var d = countFr(text[i].text);
		text_ana.push(d);
	}
	df[name] = text_ana;
	name_list.push(name)
	counter ++;
}



function calcavg()
{

	var l = name_list.length;
	for(var i=0;i<l;i++)
	{
		var r = { a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,' ':0,'#':0,'@':0 };
		var chr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ','#','@'];
		var n = String(name_list[i]);
		var td = df[name_list[i]]
		var g = td.length;
		for(var j=0;j<g;j++)
		{
			for(c in chr)
			{
				var str = chr[c];
				
				r[str] = r[str] + td[j][str];
			}
		}
		for(c in chr)
			{
				var str = chr[c];
				
				r[str] = r[str]/g;
				r[str] = Math.round(r[str] * 100) / 100;
			}
		r['name'] = name_list[i]; 

		avg[name_list[i]] = r;

	}

	console.log("done")
	csvdata.write('./dataframe.csv', avg, {header: 'name,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z, ,#,@'})

}

function extractTweetText()
{
	text = [];
	var len = tweets.length;
	for(var i=0;i<len;i++)
	{
		text.push({
			text:tweets[i].full_text
		})
		var name = String(tweets[i].user.name)
	}
	calc(text,name);
}

function gottweet(err,data,response)
{
	tweets = Object.assign([],data)
	extractTweetText();

	if(counter >=19)
	{
		 //console.log(df[name_list[0]][0].a);
		calcavg();

	}
	
}



function get_tweets(dict)
{
	var l = dict.length;
	for(var i=0;i<l;i++)
	{
		var sn = dict[i].screen_name
		t.get('statuses/user_timeline', { screen_name: sn ,tweet_mode:'extended' },gottweet);

	}
}




function countFr(text)
{
	var ch;
	
var ret = { a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0,' ':0,'#':0,'@':0 };

	text = text.toLowerCase();
	var l = text.length;
	for(var i=0;i<l;i++)
	{
		ch = text.charAt(i);
		if (ch in ret)
		{
			ret[ch] ++;
		}
		else
		{
			continue;
		}
	}
	for(rd in ret)
	{
		ret[rd] = ret[rd]*(100/l)
		ret[rd] = Math.round(ret[rd] * 100) / 100;

	}

	return ret;
	

}

	//console.log(df[name].length);










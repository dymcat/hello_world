into($.srcroot+"/#/web.js");

$.content=Tool.readString($.srcroot+"/websocket.html");

var server=$.server;
var user=$.session;
setInterval(function(){
	var room=server.getGlobal("websocket");
	if(!room){return;}
	var context=room[user];
	if(!context){return;}
	var content=lang.strify(new Date())+" -> "+Math.random();
	print(content);
	com.dymcat.netty.HttpServer.sendString(context,content);
},5000);

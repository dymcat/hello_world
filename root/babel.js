into($.srcroot+"/#/web.js");

$.content=Tool.readString($.srcroot+"/babel.html");

setTimeout(function(){
	into("https://unpkg.com/babel-standalone@6/babel.min.js");
	var input="const getMessage=()=>'Hello World !';";
	var output=Babel.transform(input,{presets:["es2015"]}).code;
	print(output);
	print("--------------------");
	//presets:["es2015"]
	//presets:["es2015","react","stage-0"]
	//presets:["es2017","react","stage-3"]
	var result=Babel.transform(Tool.readString($.srcroot+"/babel.ts"),{presets:["es2017","react","stage-3"]});
	print(result.code);
	print(result.map);
	print(result.ast);
},1000*1);

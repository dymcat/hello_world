into($.srcroot+"/"+$.server.air()+"/lang.js");

var web={};

web.out=function(data){
	return Tool.out(data,$.server.print(),$.server.debug());
}
web.err=function(data){
	return Tool.err(data,$.server.print(),$.server.debug());
}

web.arg2par=function(args){
	if(typeof(args)=="string"){
		args=args.split("\/");
		for(var i=0;i<$.args.length;i++){
			if(i==args.length){break;}
			$.pars[args[i]]=$.args[i];
		}
	}
	return $.pars;
}
web.iframe=function(data){
	$.type="text/html";
	$.content=typeof(data)=="string"?"<script>parent.location.href='"+(data==""?$.request.headers().get("Referer"):data)+"';</script>":"<script>parent.showErrorMessage("+lang.strify(data)+");</script>";
}

web.cookie=function(json){
	if(typeof(json)=="string"){return com.dymcat.netty.HttpServer.getCookieValue($.request,json);}
	if(!$.cookie){
		$.cookie=json;
	}else if(lang.isArray($.cookie)){
		$.cookie.push(json);
	}else{
		$.cookie=[$.cookie,json];
	}
}
web.down=function(name){
	name=name.replace(/^.*[\/\\]/,"");
	var agent=$.request.headers().get("User-Agent")||"";
	if(!$.header){$.header={};}
	$.header["Content-Disposition"]="attachment;filename="+(agent.indexOf(" Firefox/")>-1||agent.indexOf(" Safari/")>-1&&agent.indexOf(" Chrome/")==-1?new java.lang.String(name.getBytes($.charset||"UTF-8"),"ISO-8859-1"):java.net.URLEncoder.encode(name));
}
web.i18n=function(text,data){
	return $.server.i18n($.language,text,data==undefined?null:data);
}

var println="<--------------------------------------------------<";
for(var key in $){
	if(key=="request"||key=="decoder"||key=="websocket"||key=="content"){continue;}
	println+=(println==""?"":"\r\n")+"$."+key+"="+$[key];
}
web.out(println+"\r\n"+">-------------------------------------------------->");

print("web.js=>"+lang.strify(new Date()));

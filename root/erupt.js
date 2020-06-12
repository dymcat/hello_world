into($.srcroot+"/#/web.js");

if($.end=="html"){
	$.content=Tool.readString($.srcroot+"/erupt.html");
	$.server.setGlobal("erupt",new java.util.concurrent.ConcurrentHashMap());
}else if($.end=="json"){
	$.status=404;
	if($.args.length==1){
		if($.args[0]=="set"){
			$.server.getGlobal("erupt")[$.pars.random]=$.pars.base64;
			$.content={random:$.pars.random,base64:$.pars.base64};
		}else if($.args[0]=="get"){
			$.content={random:$.pars.random,base64:$.server.getGlobal("erupt")[$.pars.random]};
		}
	}
	if($.content){$.status=200;}
}

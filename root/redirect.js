into($.srcroot+"/#/web.js");

if($.args.length==0){
	$.content=Tool.readString($.srcroot+"/redirect.html");
}else{
	var href="/";
	if($.args[0]=="1"){
		$.redirect="3;url="+href;
		print("3秒后跳转");
	}else if($.args[0]=="2"){
		$.status=204;
		print("保持源页面204");
	}else if($.args[0]=="3"){
		$.status=205;
		print("保持源页面205");
	}else if($.args[0]=="4"){
		$.status=301;
		$.redirect=href;
		print("立即跳转301");
	}else if($.args[0]=="5"){
		$.status=302;
		$.redirect=href;
		print("立即跳转302");
	}else if($.args[0]=="6"){
		$.status=303;
		$.redirect=href;
		print("立即跳转303");
	}else if($.args[0]=="7"){
		$.status=307;
		$.redirect=href;
		print("立即跳转307");
	}else if($.args[0]=="8"){
		$.status=308;
		$.redirect=href;
		print("立即跳转308");
	}else if($.args[0]=="9"){
		$.redirect=href;
		print("立即302跳转");
	}else if($.args[0]=="10"){
		$.redirect="";
		print("刷新源页面");
	}
}

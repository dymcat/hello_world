into($.srcroot+"/#/web.js");

var p=$;
print("即将准备异步处理任务=>"+lang.strify(new Date()));
setTimeout(function(){
	p.content="<h1><center>姗姗来迟</center></h1>";
	p.promise.setSuccess();
	print("已经完成异步处理任务=>"+lang.strify(new Date()));
},1000*5);
print("正在进行异步处理任务=>"+lang.strify(new Date()));

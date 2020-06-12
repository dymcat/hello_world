/*
这是一个返回JSON数据的Hello World
由于本例太简单，没有用到#/lang.js（语言级别的公共库）里面的方法，所以没有引用lang.js或web.js（系统级别的公共库，他里面默认引用了lang.js，如果需要引用公共库，建议引用web.js）
由于文件位于WEB根（root）目录下，文件名为hello-json.js，.js是后台JS扩展名，必须和项目根目录下的server.js的扩展名一致
去掉扩展名，得到的是hello-json，所以以下访问链接都能被这个文件拦截
hello-json							（请求链接不带扩展名，将会使用默认扩展名.html）
hello-json.json						（推荐这个，.json表明客户端需要的是JSON数据，与当前返回的内容格式刚好一致）
hello-json.文件类型					（注意：请求链接扩展名永远表示客户端需要的内容格式）
hello-json/参数1/参数2.json			（由于WEB根目录不存在hello-json文件夹，但是存在hello-json.js，所以 参数1 和 参数2 被解析为参数，而不是后台JS文件名）
hello-json/参数1/参数2.文件类型		（说明如上）
*/

$.content={
	flag:true
	,data:{
		id:123
		,name:"张三"
		,sex:"男"
		,age:25
		,isVIP:false
	}
	,list:[
		3.1415926
		,"Hello JSON"
		,true
	]
};

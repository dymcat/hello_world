/*
这是一个返回HTML页面的Hello World
由于本例太简单，没有用到#/lang.js（语言级别的公共库）里面的方法，所以没有引用lang.js或web.js（系统级别的公共库，他里面默认引用了lang.js，如果需要引用公共库，建议引用web.js）
其他示例里面都有一个跟访问链接一样名字的HTML页面文件（如：form.html），其实HTML文件不是必须的，后台JS文件才是必须的，你应该观察到这个JS里面有一段代码是读取相关HTML文件的内容，然后赋值给$.content
由于文件位于WEB根（root）目录下，文件名为hello-html.js，.js是后台JS扩展名，必须和项目根目录下的server.js的扩展名一致
去掉扩展名，得到的是hello-html，所以以下访问链接都能被这个文件拦截
hello-html							（请求链接不带扩展名，将会使用默认扩展名.html）
hello-html.html						（推荐这个，.html表明客户端需要的是HTML页面，与当前返回的内容格式刚好一致）
hello-html.文件类型					（注意：请求链接扩展名永远表示客户端需要的内容格式）
hello-html/参数1/参数2.html			（由于WEB根目录不存在hello-html文件夹，但是存在hello-html.js，所以 参数1 和 参数2 被解析为参数，而不是后台JS文件名）
hello-html/参数1/参数2.文件类型		（说明如上）
*/

$.content="<html>"
	+"<head>"
	+"</head>"
	+"<body>"
	+"<h1>"
	+"	<center>Hello HTML</center>"
	+"</h1>"
	+"</body>"
	+"</html>";

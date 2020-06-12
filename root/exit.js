/*
以下语句都可以停止执行后续脚本
exit();
quit();
exit(1);
quit(1);
exit("");
quit("");
exit(true);
quit(true);
exit(null);
quit(null);
*/
into($.srcroot+"/#/web.js");

$.content="<html>";
$.content+="<head>";
$.content+="</head>";
$.content+="<body>";
$.content+="<h1>";
$.content+="	<center>Hello";
print("exit before");
exit();
print("exit after");
$.content+=" HTML</center>";
$.content+="</h1>";
$.content+="</body>";
$.content+="</html>";

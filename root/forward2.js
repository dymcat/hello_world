into($.srcroot+"/#/web.js");

print("在转向后的页面输出转向之前的返回内容："+$.content);
$.content="<h1><center>forward2</center></h1>";
print("在转向后的页面输出重新设置的返回内容："+$.content);

into($.srcroot+"/#/web.js");

$.content=Tool.readString($.srcroot+"/i18n.html");
$.content=$.content.replace("Welcome to here",web.i18n("Welcome to here"));
$.content=$.content.replace(/\{urlbase\}/g,$.urlbase);

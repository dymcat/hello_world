function sjs($){
	if(!$.data.code){return false;}
	var engine=Tool.ScriptEngineFactory.getScriptEngine(Tool.ScriptEngineBuildOption);
	engine.eval(Tool.DefaultEvalIntoCode);
	if($.config.into){engine.eval($.config.into);}
	engine.eval("function print(data,step){com.dymcat.netty.HttpServer.sendString($.channel,JSON.stringify({mark:$.$_MARK_$,data:data,step:step==null?1:step}));}");
	engine.put("$",$);
	try{
		engine.eval($.config.babel?Tool.getBabelScriptEngine().invokeFunction("transform",$.data.code):$.data.code);
	}catch(e){
		var error=e.toString().replace(/\r\n|\n|\r/g,'<br/>');
		while(error.match(/( )(?=(\&ensp\;)*\^ in \<eval\> at line number )/)){
			error=error.replace(/( )(?=(\&ensp\;)*\^ in \<eval\> at line number )/,"&ensp;");
		}
		if(!$.$_MARK_$&&error.indexOf("javax.script.ScriptException: <eval>:")==0){
			var all=$.data.code.split(/\r\n|\n|\r/);
			var line=parseInt(error.substring(37).replace(/\:.*$/,""));
			if(all.length>=line&&error.indexOf(all[line-1])>37){
				for(var i=line-2;i>=0;i--){
					if(all[i].indexOf("$.$_MARK_$='")==0){
						com.dymcat.netty.HttpServer.sendString($.channel,JSON.stringify({mark:all[i].substring(12).replace(/'.*$/,""),data:error,step:-1}));
						break;
					}
				}
			}
		}else{
			engine.eval("print('"+error+"',-1);");
		}
	}
	engine.eval("print(null,0);");
}
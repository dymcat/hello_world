into($.srcroot+"/#/web.js");

if($.end=="html"){
	$.content=Tool.readString($.srcroot+"/form.html");
}else if($.end=="submit"){
	$.type="text/html";
	$.content=template.note(1)
	.replace("{time}",lang.strify(new Date()))
	.replace("{uri}",$.request.uri())
	.replace("{path}",$.uriview)
	.replace("{method}",$.request.method())
	.replace("{version}",$.request.protocolVersion())
	.replace("{result}",$.request.decoderResult())
	.replace("{header}",function(){
		var out="";
		for(var key in $.header){
			out+="<div>"+key+"="+$.header[key]+"</div>";
		}
		return out;
	}())
	.replace("{parameter}",function(){
		var out="";
		for(var key in $.pars){
			var value=$.pars[key];
			if(typeof(value)=="string"){value=[value];}
			if(lang.isArray(value)){
				for(var i=0;i<value.length;i++){
					out+="<div>"+key+"=";
					if(value[i].contains("/@/")&&new java.io.File($.srcroot+"/"+value[i]).isFile()){
						out+="<a target='_blank' href='/"+value[i]+"'>"+value[i]+"</a>";
						//if($.server.mime(value[i]).startsWith("image/")){out+="<img src='/"+value[i]+"' width='100%'/>";}
					}else{
						out+=value[i];
					}
					out+="</div>";
				}
			}
		}
		return out;
	}());
}

function template(){/*
<html>
<head>
<meta charset="UTF-8"/>
<style>
	body{font-family:等线,宋体,Arial,Tahoma,Verdana;}
	table{width:100%;border-collapse:collapse;}
	th,td{padding:5px;border:solid 1px LightBlue;}
	th{background-color:Azure;}
</style>
</head>
<body>
	<table>
		<tr><th><a href="javascript:history.back();">返回</a></th><td>{time}</td></tr>
		<tr><th>uri</th><td>{uri}</td></tr>
		<tr><th>path</th><td>{path}</td></tr>
		<tr><th>method</th><td>{method}</td></tr>
		<tr><th>version</th><td>{version}</td></tr>
		<tr><th>result</th><td>{result}</td></tr>
		<tr><th>header</th><td>{header}</td></tr>
		<tr><th>parameter</th><td>{parameter}</td></tr>
	</table>
</body>
</html>
*/}

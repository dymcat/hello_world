into($.srcroot+"/#/web.js");

if($.end=="html"){
	var note=template.note(1);
	var list=getDataForPage();
	var html="";
	for(var i=0;i<list.length;i++){
		html+=note
		.replace("{name}",list[i].name)
		.replace("{sex}",list[i].sex)
		.replace("{age}",list[i].age)
		.replace("{birth}",list[i].birth)
		.replace("{nation}",list[i].nation)
		.replace("{createTime}",list[i].createTime);
	}
	$.content=Tool.readString($.srcroot+"/ajax.html");
	$.content=$.content.replace("{init-data}",html);
}else if($.end=="json"){
	$.content=getDataForPage();
}

function template(){/*
	<tr>
		<td>{name}</td>
		<td>{sex}</td>
		<td>{age}</td>
		<td>{birth}</td>
		<td>{nation}</td>
		<td>{createTime}</td>
	</tr>
*/}

function getDataForPage(){
	var nation=["汉族","壮族","回族","满族","维吾尔族","苗族","彝族","土家族","藏族","蒙古族","侗族","布依族","瑶族","白族","朝鲜族","哈尼族","黎族","哈萨克族","傣族","畲族","傈僳族","东乡族","仡佬族","拉祜族","佤族","水族","纳西族","羌族","土族","仫佬族","锡伯族","柯尔克孜族","景颇族","达斡尔族","撒拉族","布朗族","毛南族","塔吉克族","普米族","阿昌族","怒族","鄂温克族","京族","基诺族","德昂族","保安族","俄罗斯族","裕固族","乌孜别克族","门巴族","鄂伦春族","独龙族","赫哲族","高山族","珞巴族","塔塔尔族"];
	var list=[];
	for(var i=0;i<50;i++){
		var age;
		list.push({
			name:Tool.randomGB3755(lang.random(2,4))
			,sex:Math.random()<0.5?"男":"女"
			,age:age=lang.random(10,99)
			,birth:new Date().getFullYear()-age+"-"+parseInt(Math.random()*12+1)+"-"+parseInt(Math.random()*28+1)
			,nation:nation[Math.random()<0.5?0:parseInt(Math.random()*nation.length)]
			,createTime:lang.strify(new Date(new Date().getTime()-1000*60*60*24*365*10*Math.random()))
		});
	}
	return list;
}

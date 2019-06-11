function checkUser(str){
	var username=document.getElementById("uid").value;
	var utip=document.getElementById("utip");
	if(username==""){
		//alert("用户名为空")
		utip.innerHTML="用户名为空"
		return false;
		
	}else{
		utip.innerHTML="";
		retuen true;
	}
}
function checkPwd(str){
	var username=document.getElementById("pwd").value;
	var utip=document.getElementById("ptip");
	if(pwd.length<6||pwd.length>16){
		
		ptip.innerHTML="密码长度不符合要求"
		return false;
		
	}
		retuen true;
	}
}
function checkEmail(str){
	var username=document.getElementById("email").value;
	var utip=document.getElementById("etip");
	if(email.indexOf("@")==-1){
		
		etip.innerHTML="邮箱必须包含@"
		return false;
		
	}else if(email.indexOf(".")<=email.indexOf("@")){
		etip.innerHTML="邮箱必须包含@"
		return false;}
		
		retuen true;
	}
//验证用户名
<input type="text" name="username" id="user" onblur="checkuser()"/><span id="utip"></span>
}

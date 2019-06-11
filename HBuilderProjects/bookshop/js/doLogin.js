/**
 * 
 */
//验证用户名
function checkUser() {
	var user=document.getElementById("uid").value;
	var utip=document.getElementById("utip");
	if(user==""){
		utip.innerHTML="用户名为空";
			return false;
	}
	else{
		utip.innerHTML="";
		return true;
	}
}
//验证密码
function checkPwd(){
	var pwd=document.getElementById("pwd").value;
	var utip=document.getElementById("ptip");
	if(pwd.length<6||pwd.length>16){
		ptip.innerHTML="密码长度不符合要求";
			return false;
	}
	else{
		ptip.innerHTML="";
		return true;
	}
}
//响应表单提交事件
function check(){
	if(!checkUser()){
		return false;
	}
	else if(!checkPwd()){
		return false;
	}
	else{
		return true;
	}
}
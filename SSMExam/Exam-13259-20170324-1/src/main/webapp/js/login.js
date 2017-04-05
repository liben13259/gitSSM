/**
 * 检查登陆
 */
$(function(){
	$("#login").click(function(){
		//进行信息的提示
		$("#name_msg").html("");
		$("#password_msg").html("");
		//得到输入框的信息
		var firstName = $("#firstName").val().trim();
		var password = $("#password").val().trim();
		//进行非空判断
		var flag = true;
		if(firstName == "" || firstName == null){
			$("#name_msg").html("用户名不能为空");
			flag = false;
		}
		if(password == "" || password == null){
			$("#password_msg").html("密码不能为空");
			flag = false;
		}
		//进行AJAX请求
		if(flag){
			$.ajax({
				url:"http://localhost:8088/Exam-13259-20170324-1/login",
				type:"post",
				dataType:"json",
				data:{"name":firstName,"password":password},
				success:function(result){
					if(result.status == 0){
						window.location.href="index.jsp";
					}else if(result.status == 1){
						$("#name_msg").html(result.msg);
					}else{
						$("#password_msg").html(result.msg);
					}
				}
			});
		}
	});
});
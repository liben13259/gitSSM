<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
	<head>
		<link type="text/css" href="/Exam-13259-20170324-1/css/show.css" rel="stylesheet"/>
		<script type="text/javascript" src="/Exam-13259-20170324-1/js/jquery-3.2.0.min.js"></script>
		<script type="text/javascript" src="/Exam-13259-20170324-1/js/show.js"></script>
		<script type="text/javascript">
		//登陆以后执行的操作	
		$(function(){
			
				//显示所有列表
				show();
				//进行删除操作
				$("#customer_list").on("click",".btn_delete",deleteCustomer);
				//进行更新操作
				$("#customer_list").on("click",".btn_update",showPage);
				//进行跳转操作
				insertCustomer();
				//进行插入操作
			})
		</script>
		<title>编辑页面</title>
	</head>

	<body>
		<div id="head01">
			<img src="/Exam-13259-20170324-1/images/a.PNG"/>
			13259 李犇
			<span id="show1">MARY</span>
			<input type="button" value="退出登录" id="logout"/>
		</div>
		<div id="head02">
			<input type="button" value="显示" id="show" tabindex="1">
			<input type="button" value="新增" id="add" tabindex="2" onclick="insertCustomer()">
		</div>
		<div id="head03">
			客户管理
			<div id="showHead">
			</div>
			<div id="showList">
				<span id="s1">客户列表</span>
				<table id="customer_list" cellpadding="0" cellspacing="0" border="1px">
					<tr>
						<th>CUSTOMERID</th>
						<th>STOREID</th>
						<th>FIRSTNAME</th>
						<th>LASTNAME</th>
						<th>ADDRESSID</th>
						<th>EMAIL</th>
						<th>CREATEDATE</th>
						<th>LASTUPDATE</th>
						<th>OPERATION</th>
					</tr>
					<!-- 动态生成列表 -->
				</table>
				<div id="pageOPS">
					<input type="button" value="上一页" id="up">
					<span id="load">跳转到<input type="text" id="input">页<input type="button" id="in" value="确定"></span>
					<input type="button" value="下一页" id="down">
					<input type="button" value="尾页" id="over">
				</div>
			</div>
			<div id="insertList">
				*STOREID:<input type="text" id="storeId"><span id="m1"></span><br>
				*FIRSTNAME:<input type="text" id="firstName"><span id="m2"></span><br>
				*LASTNAME:<input type="text" id="lastName"><span id="m3"></span><br>
				EMAIL:<input type="text" id="email"><span id="m4"></span><br>
				*ADDRESSID:<input type="text" id="addressId"><span id="m5"></span><br>
				<input type="button" value="确定" id="addSure">
			</div>
			<div id="updateList">
				*STOREID:<input type="text" id="storeId1"><span id="m11"></span><br>
				*FIRSTNAME:<input type="text" id="firstName1"><span id="m21"></span><br>
				*LASTNAME:<input type="text" id="lastName1"><span id="m31"></span><br>
				EMAIL:<input type="text" id="email1"><span id="m41"></span><br>
				*ADDRESSID:<input type="text" id="addressId1"><span id="m51"></span><br>
				<input type="button" value="确定" id="updateSure">
			</div>
		</div>
	</body>
</html>

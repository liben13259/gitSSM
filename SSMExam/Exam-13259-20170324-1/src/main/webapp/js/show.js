/**
 * 退出登录
 */
$(function(){
	$("#logout").click(function(){
		window.location.href="login.jsp";
	})
})

/**
 * 用于显示所有的customer信息
 */
function show(){
	$("#show").click(function(){
		//取消格式
		$("#customer_list").html("");
		//得到当前的pageId
		var pageId = $("#customer_list tr").data("pageId");
		//对pageId进行为空判断
		if(pageId == undefined){
			pageId = 1;
		}
		//对上一页添加点击事件
		$("#up").click(function(){
			pageId = pageId - 1;
			if(pageId < 1){
				pageId = 1;
			}
			show();
		});
		//对跳转进行点击事件
		$("#in").click(function(){
			pageId = $("#input").val().trim();
			show();
		});
		//对下一页添加点击事件
		$("#down").click(function(){
			pageId = pageId + 1;
			if(pageId > 51){
				pageId = 51;
			}
			show();
		});
		//对尾页进行点击事件
		$("#over").click(function(){
			pageId = 51;
			show();
		});
		
		$.ajax({
			url:"http://localhost:8088/Exam-13259-20170324-1/show",
			type:"post",
			dataType:"json",
			data:{"pageId":pageId},
			success:function(result){
				if(result.status == 0){
					var customeres = result.data;
					for(var i = 0; i < customeres.length; i++){
						var customerId = customeres[i].customerId;
						var storeId = customeres[i].storeId;
						var firstName = customeres[i].firstName;
						var lastName = customeres[i].lastName;
						var addressId = customeres[i].addressId;
						var email = customeres[i].email;
						var createDate = customeres[i].createDate;
						var lastUpdate = customeres[i].lastUpdate;
						var c_td = '<tr><td>';
							c_td += customerId;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += storeId;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += firstName;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += lastName;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += addressId;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += email;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += createDate;
						    c_td += '</td>';
						    c_td += '<td>';
							c_td += lastUpdate;
						    c_td += '</td>';
						    c_td +=	'<td>';
						    c_td +=	'<input type="button" value="删除" class="btn_delete" tabindex="1"/>';
						    c_td += '<input type="button" value="修改" class="btn_update" tabindex="2"/>';
						    c_td += '</td></tr><br>';
						var $td = $(c_td);
						$td.data("customerId",customerId);
						//console.log($td.data);
						$("#customer_list").append($td);
						$td.data("pageId",pageId);
						//console.log($td.data);
					}
					
				}
				$("#showList").show();
				$("#insertList").hide();
				$("#updateList").hide();
			}
		});
	});
}
	
	/**
	 * 进行列表的删除
	 */
	function deleteCustomer(){
			var ok = confirm("确定删除笔记本吗？");
			if(!ok){
				return;
			}
			//得到绑定的ID
			var customerId = $(this).parents("tr").data("customerId");
			//发送ajax请求
			$.ajax({
				url:"http://localhost:8088/Exam-13259-20170324-1/delete",
				type:"post",
				dataType:"json",
				data:{"customerId":customerId},
				success:function(result){
					if(result.status == 0){
						alert(result.msg);
						window.location.href="index.jsp";
					}
				}
			})
	}
	
	/**
	 * 对数据进行更新
	 */
	function showPage(){
		$("#showList").hide();
		$("#insertList").hide();
		$("#updateList").show();
		$("#updateSure").click(function(){
			$("#m1").html("");
			$("#m2").html("");
			$("#m3").html("");
			$("#m5").html("");
			var customerId = $(".btn_update").parents("tr").data("customerId");
			var storeId = $("#storeId1").val();
			var firstName = $("#firstName1").val();
			var lastName = $("#lastName1").val();
			var email = $("#email1").val();
			var addressId = $("#addressId1").val();
			var flag = true;
			if(storeId == "" || storeId == null){
				$("#m11").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(firstName == "" || firstName == null){
				$("#m21").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(lastName == "" || lastName == null){
				$("#m31").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(addressId == "" || addressId == null){
				$("#m51").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(flag){
				$.ajax({
					url:"http://localhost:8088/Exam-13259-20170324-1/update",
					type:"post",
					dataType:"json",
					data:{"customerId":customerId,"storeId":storeId,"firstName":firstName,"lastName":lastName,"email":email,"addressId":addressId},
					success:function(result){
						if(result == 0){
							var c_td = '<tr><td>';
								c_td += customerId;
						    	c_td += '</td>';
						    	c_td += '<td>';
								c_td += storeId;
						    	c_td += '</td>';
						    	c_td += '<td>';
								c_td += firstName;
						    	c_td += '</td>';
						    	c_td += '<td>';
								c_td += lastName;
						    	c_td += '</td>';
						    	c_td += '<td>';
								c_td += addressId;
						    	c_td += '</td>';
						    	c_td += '<td>';
								c_td += email;
						   		c_td += '</td>';
						    	c_td +=	'<td>';
						    	c_td +=	'<input type="button" value="删除" class="btn_delete" tabindex="1"/>';
						    	c_td += '<input type="button" value="修改" class="btn_update" tabindex="2"/>';
						    	c_td += '</td></tr><br>';
						    	var $td = $(c_td);
								$td.data("customerId",customerId);
								$("#customer_list").append($td);
								confirm("修改成功!");
								
								window.location.href="index.jsp";
						}
						alert("修改成功!");
						window.location.href="index.jsp";
					}
				});
			}	
		})
	}
	
	/**
	 * 进行页面的跳转
	 */
	function insertCustomer(){
		$("#add").click(function(){
			$("#showList").hide();
			$("#insertList").show();
			$("#updateList").hide();
		})
	}
	/**
	 * 进行插入操作
	 */
	$(function(){
		$("#addSure").click(function(){
			$("#m1").html("");
			$("#m2").html("");
			$("#m3").html("");
			$("#m5").html("");
			var storeId = $("#storeId").val();
			var firstName = $("#firstName").val();
			var lastName = $("#lastName").val();
			var email = $("#email").val().trim();
			var addressId = $("#addressId").val();
			var flag = true;
			if(storeId == "" || storeId == null){
				$("#m1").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(firstName == "" || firstName == null){
				$("#m2").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(lastName == "" || lastName == null){
				$("#m3").html("<font color=red>不能为空</font>");
				flag = false;
			}
			if(addressId == "" || addressId == null){
				$("#m5").html("<font color=red>不能为空</font>");
				flag = false;
			}
			
			if(flag){
			$.ajax({
				url:"http://localhost:8088/Exam-13259-20170324-1/insert1",
				type:"post",
				dataType:"json",
				data:{"storeId":storeId,"firstName":firstName,"lastName":lastName,"email":email,"addressId":addressId},
				success:function(result){
					if(result == 0){
							var c_td = '<tr>';
								c_td += '<td>';
								c_td += storeId;
							    c_td += '</td>';
							    c_td += '<td>';
								c_td += firstName;
							    c_td += '</td>';
							    c_td += '<td>';
								c_td += lastName;
							    c_td += '</td>';
							    c_td += '<td>';
								c_td += addressId;
							    c_td += '</td>';
							    c_td += '<td>';
								c_td += email;
							    c_td += '</td>';
							    c_td +=	'<td>';
							    c_td +=	'<input type="button" value="删除" class="btn_delete" tabindex="1"/>';
							    c_td += '<input type="button" value="修改" class="btn_update" tabindex="2"/>';
							    c_td += '</td></tr><br>';
							var $td = $(c_td);
							$td.data("customerId",customerId);
							$("#customer_list").append($td);
					}
					alert("插入成功!");
					window.location.href="index.jsp";
				}
			});
		}
	});
});
	
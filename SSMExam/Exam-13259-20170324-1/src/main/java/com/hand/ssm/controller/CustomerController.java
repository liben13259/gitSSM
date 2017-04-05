package com.hand.ssm.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hand.ssm.entities.Customer;
import com.hand.ssm.entities.Result;
import com.hand.ssm.service.CustomerService;

@Controller
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;//自动注入业务层接口
	
	/*
	 * 用于显示customer表中的所有的信息
	 */
	@RequestMapping("/show")
	@ResponseBody
	public Result findAll(String pageId){
		int cid = Integer.parseInt(pageId);
		Result result = customerService.findAll((cid-1)*15);
		return result;
	}
	
	/*
	 * 此方法用户检查用户登录 
	 */
	@RequestMapping("/login")
	@ResponseBody
	public Result checkLogin(String name,String password,HttpSession session){
		Result result = customerService.findByName(name, password);
		session.setAttribute("name", name);
		return result;
	}
	
	/*
	 * 用于删除数据库的对应的信息
	 */
	@RequestMapping("/delete")
	@ResponseBody
	public Result deleteById(String customerId){
		int id = Integer.parseInt(customerId);
		Result result = customerService.deleteById(id);
		return result;
	}
	
	/*
	 * 用于对数据库的数据的增加
	 */
	@RequestMapping("/insert1")
	@ResponseBody
	public Result insertCustomer(String storeId,String firstName,String lastName,String email,String addressId){
		Customer customer = new Customer();
		customer.setStoreId(Integer.parseInt(storeId));
		customer.setFirstName(firstName);
		customer.setLastName(lastName);
		customer.setEmail(email);
		customer.setAddressId(Integer.parseInt(addressId));
		Result result = customerService.insertCustomer(customer);
		return result;
	}
	
	/*
	 * 进行更新操作
	 */
	@RequestMapping("/update")
	@ResponseBody
	public Result updateCus(String customerId,String storeId,String firstName,String lastName,String email,String addressId){
		Customer customer = new Customer();
		customer.setCustomerId(Integer.parseInt(customerId));
		customer.setStoreId(Integer.parseInt(storeId));
		customer.setFirstName(firstName);
		customer.setLastName(lastName);
		customer.setEmail(email);
		customer.setAddressId(Integer.parseInt(addressId));
		Result result = customerService.updateCustomer(customer);
		return result;
		
	}
}

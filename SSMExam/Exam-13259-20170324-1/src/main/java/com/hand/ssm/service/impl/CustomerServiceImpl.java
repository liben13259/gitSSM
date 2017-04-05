package com.hand.ssm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hand.ssm.entities.Customer;
import com.hand.ssm.entities.Result;
import com.hand.ssm.mapper.CustomerMapper;
import com.hand.ssm.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerMapper customerMapper;//自动注入mapper文件

	//定义一个结果集来传递参数
	Result r = new Result();
	/*
	 * 利用list保存所有的信息并返回
	 */
	public Result findAll(int cursor) {
		List<Customer> list = customerMapper.findAll(cursor);
		r.setData(list);
		r.setMsg("加载成功!");
		r.setStatus(0);
		return r;
	}

	/*
	 * 对登录进行检查 
	 */
	public Result findByName(String name,String password) {
		String firstName = customerMapper.findByName(name);
		if(firstName == null){
			r.setStatus(1);
			r.setMsg("用户名错误!");
			return r;
		} 
		if(!password.equals(firstName)){
			r.setStatus(2);
			r.setMsg("密码错误!");
			return r;
		}
		r.setStatus(0);
		r.setMsg("登陆成功!");
		return r;
	}

	/*
	 * 进行删除
	 */
	public Result deleteById(int id) {
		customerMapper.deleteById(id);
		r.setStatus(0);
		r.setMsg("删除成功!");
		return r;
	}

	/*进行插入
	 * 
	 */
	public Result insertCustomer(Customer customer) {
		customerMapper.addCustomer(customer);
		r.setStatus(0);
		r.setMsg("插入成功!");
		return r;
	}

	/*
	 * 进行更新
	 */
	public Result updateCustomer(Customer customer) {
		customerMapper.updateCustomer(customer);
		r.setStatus(0);
		r.setMsg("更新成功!");
		return r;
	}

	/*
	 * 进行总页数的查询
	 */
	public Result findCount() {
		int sum = customerMapper.findCount();
		r.setData(sum);
		r.setStatus(0);
		return r;
	}
}

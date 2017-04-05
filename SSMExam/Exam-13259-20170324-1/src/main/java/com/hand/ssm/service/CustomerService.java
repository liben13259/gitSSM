package com.hand.ssm.service;

import com.hand.ssm.entities.Customer;
import com.hand.ssm.entities.Result;

public interface CustomerService {
	public Result findAll(int cursor);//查找customer所有的信息
	public Result findByName(String name,String password);//根据用户输入的名字返回一个boolean值
	public Result deleteById(int id);//根据ID删除对应的customer的信息
	public Result insertCustomer(Customer customer);//根据用户输入的进行插入
	public Result updateCustomer(Customer customer);//根据用户输入的进行更新
	public Result findCount();//查找所有的记录
}

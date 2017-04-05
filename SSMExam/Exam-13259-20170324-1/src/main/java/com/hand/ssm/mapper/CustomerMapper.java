
package com.hand.ssm.mapper;

import java.util.List;

import com.hand.ssm.entities.Customer;

public interface CustomerMapper {
	public List<Customer> findAll(int cursor);//显示所有的Customer
	public String findByName(String name);//根据名字查找对应的信息
	public void addCustomer(Customer customer);//根据用户所提供的customer进行插入
	public void deleteById(int id);//根据ID删除对应的customer的信息
	public void updateCustomer(Customer customer);//根据用户提供的信息对数据库的信息进行更新
	public int findCount();//查询customer表中又几条记录
}

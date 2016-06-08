package com.ankurchashmaghar.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Projections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.ankurchashmaghar.model.User;

@Repository
public class HibernateDaoImpl<T> implements HibernateDao<T> {

	
	@Autowired
	SessionFactory sessionFactory;

	@Override
	public void save(T entity) {
		// TODO Auto-generated method stub
		sessionFactory.getCurrentSession().saveOrUpdate(entity);
	}

	@Override
	public List<T> getAllUsers(T entity) {
		// TODO Auto-generated method stub
		
		return sessionFactory.getCurrentSession().createCriteria(entity.getClass()).list();
	}

	@Override
	public List<User> getUserList(int intValue, int i, User user) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Criteria criteria = session.createCriteria(user.getClass());
		criteria.setFirstResult(intValue);
		criteria.setMaxResults(i);
		return criteria.list();
	}

	@Override
	public Long countList(User user) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();

		Query query = session.createQuery("select count(*) from User");
		
		
		return (Long) query.uniqueResult();

	}

	@Override
	public User getUserById(int id) {
		// TODO Auto-generated method stub
		Session session = sessionFactory.openSession();
		Query query = session.createQuery("from User where userId="+id);
		return (User) query.list().get(0);
	}
	
}

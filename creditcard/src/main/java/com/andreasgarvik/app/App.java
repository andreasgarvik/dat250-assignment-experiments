package com.andreasgarvik.app;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

class App {

    public static void main(String[] args) {
        EntityManager em = ContextFactory.getContext();
        em.getTransaction().begin();
        Person p = new Person();
        p.setName("Andreas1");
        em.persist(p);
        em.getTransaction().commit();

        Query q = em.createQuery("select p from Person p");
        List<Person> pList = q.getResultList();
        for (Person person : pList) {
            System.out.println(person.getName());
        }
        System.out.println("Size: " + pList.size());

        em.close();
    }
}

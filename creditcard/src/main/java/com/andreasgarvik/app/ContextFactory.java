package com.andreasgarvik.app;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class ContextFactory {
  private final static EntityManagerFactory factory = Persistence.createEntityManagerFactory("creditcardPU");

  public static EntityManager getContext() {
    return factory.createEntityManager();
  }
}

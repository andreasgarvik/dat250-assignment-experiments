package com.andreasgarvik.todoapi;

import static java.lang.Long.parseLong;
import static spark.Spark.*;
import static spark.route.HttpMethod.post;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class App {

  final static List<Todo> todos = new ArrayList<>();

  public static void main(String[] args) {

    if (args.length > 0) {
      port(Integer.parseInt(args[0]));
    } else {
      port(8080);
    }

    after((req, res) -> {
      res.type("application/json");
    });

    get("/todo", (req, res) -> {
      Gson gson = new Gson();
      return new Gson().toJson(todos);
    });

    get("/todo/:id", (req, res) -> {
      Gson gson = new Gson();
      Long id = parseLong(req.params(":id"));
      Optional<Todo> op = todos.stream().filter(t -> t.getId() == id).findFirst();
      if (op.isEmpty()) {
        return null;
      }
      Todo t = op.get();
      return t.toJson();
    });

    post("/todo", (req, res) -> {
      Gson gson = new Gson();
      Todo t = gson.fromJson(req.body(), Todo.class);
      todos.add(t);
      return t.toJson();
    });

    put("/todo/:id", (req, res) -> {
      Gson gson = new Gson();
      Long id = parseLong(req.params(":id"));
      Optional<Todo> op = todos.stream().filter(t -> t.getId() == id).findFirst();
      if (op.isEmpty()) {
        return null;
      }
      Todo t = op.get();
      Todo tr = gson.fromJson(req.body(), Todo.class);
      t.setDescription(tr.getDescription());
      t.setSummary(tr.getSummary());
      return t.toJson();
    });

    delete("/todo/:id", (req, res) -> {
      Gson gson = new Gson();
      Long id = parseLong(req.params(":id"));
      Optional<Todo> op = todos.stream().filter(t -> t.getId() == id).findFirst();
      if (op.isEmpty()) {
        return null;
      }
      Todo t = op.get();
      todos.remove(t);
      return t.toJson();
    });

  }

}

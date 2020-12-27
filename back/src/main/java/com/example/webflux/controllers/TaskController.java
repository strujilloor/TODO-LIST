package com.example.webflux.controllers;

import com.example.webflux.models.Task;
import com.example.webflux.models.TaskList;
import com.example.webflux.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("api")
@CrossOrigin()
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public Flux<Task> getAllTasks() {
        return  taskService.findAll();
    }

    @GetMapping("/tasks/{id}")
    public Mono<Task> getTaskById(@PathVariable Long id) {
        return taskService.findById(id);
    }

    @PostMapping("/tasks")
    public Mono<Task> save(@RequestBody Task task){
        return taskService.save(task);
    }

    @PutMapping("/tasks")
    public Mono<Task> update(@RequestBody Task task){
        if(task.getId() != null){
            return taskService.save(task);
        }
        throw new RuntimeException("No existe el id para actualizar");
    }

    @DeleteMapping("/tasks/{id}")
    public Mono<Void> delete(@PathVariable("id") Long id) {
        return taskService.delete(id);
    }

    @DeleteMapping("/lists/{id}")
    public Mono<Void> deleteByListId(@PathVariable("id") String id) { return taskService.deleteByListId(id); }

    @GetMapping("/lists")
    public Flux<TaskList> getAllAsList() {
        return taskService.findAllLists();
    }
}

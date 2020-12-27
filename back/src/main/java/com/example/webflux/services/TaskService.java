package com.example.webflux.services;

import com.example.webflux.TaskRepository;
import com.example.webflux.models.Task;
import com.example.webflux.models.TaskList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Flux<TaskList> findAllLists() { return taskRepository.findAllLists(); }

    public Flux<Task> findAllByListId(Long id) { return taskRepository.findAllByListId(id); }

    public Flux<Task> findAll() { return taskRepository.findAll(); }

    public Mono<Task> findById(Long id) { return taskRepository.findById(id); }

    public Mono<Task> save(Task task) { return taskRepository.save(task); }

    public Mono<Void> delete(Long id) { return taskRepository.deleteById(id); }

    public Mono<Void> deleteByListId(String id) { return taskRepository.deleteByListId(id); }
}

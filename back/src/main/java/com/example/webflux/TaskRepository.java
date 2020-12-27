package com.example.webflux;

import com.example.webflux.models.Task;
import com.example.webflux.models.TaskList;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface TaskRepository
        extends ReactiveCrudRepository<Task, Long> {

    @Query("SELECT * FROM tasks WHERE list_id = :listid")
    Flux<Task> findAllByListId(Long listid);

    @Query("SELECT list_id AS id, list_name AS name FROM tasks GROUP BY list_id")
    Flux<TaskList> findAllLists();

    @Query("DELETE FROM tasks WHERE list_id = :listid")
    Mono<Void> deleteByListId(String listid);
}

package com.example.webflux.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("tasks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Task {
    @Id
    private Long id;
    private String name;
    private boolean completed;
    private String listId;
    private String listName;
}

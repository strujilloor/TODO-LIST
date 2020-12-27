package com.example.webflux.dto;

import com.example.webflux.models.Task;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO implements Serializable {
    private Long id;
    private String name;
    private List<Task> tasks;
}

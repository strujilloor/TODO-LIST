package com.example.webflux;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.annotation.Id;
import org.springframework.data.r2dbc.repository.config.EnableR2dbcRepositories;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

@SpringBootApplication
@EnableR2dbcRepositories
@Log4j2
public class WebfluxApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebfluxApplication.class, args);
	}

	@Bean
	ApplicationRunner run(OrderRepository repository) {
		return args -> repository.findAll().subscribe(log::info);
	}
}

@Table("orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
class Order {
	@Id
	private Long id;
	private String fn;
}

interface OrderRepository extends ReactiveCrudRepository<Order, Long> {

}

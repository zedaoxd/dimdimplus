package br.com.bruno.backend.repositories;

import br.com.bruno.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByEmail(String email);

    Optional<User> findByResetPasswordToken(String token);
}

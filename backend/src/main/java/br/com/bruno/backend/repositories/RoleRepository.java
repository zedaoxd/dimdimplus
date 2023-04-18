package br.com.bruno.backend.repositories;

import br.com.bruno.backend.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, String> {
    
        Role findByAuthority(String authority);
}

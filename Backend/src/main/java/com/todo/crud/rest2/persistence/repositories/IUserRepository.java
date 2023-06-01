package com.todo.crud.rest2.persistence.repositories;

import com.todo.crud.rest2.persistence.repositories.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface IUserRepository extends JpaRepository<UserEntity,Long> {
    List<UserEntity> findByUserNameLike (String userName);
}

package com.contactListManager.contactList.User.repository;

import com.contactListManager.contactList.User.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
}

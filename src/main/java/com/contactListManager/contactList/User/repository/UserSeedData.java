package com.contactListManager.contactList.User.repository;

import com.contactListManager.contactList.User.model.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class UserSeedData implements CommandLineRunner {

    private UserRepository userRepository;

    public UserSeedData(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        User user1 = new User("william123", "1111");
        User user2 = new User("rohit123", "2222");
        User user3 = new User("shivu123", "3333");
        User user4 = new User("tristan123", "4444");
        User user5 = new User("walter123", "5555");

        this.userRepository.deleteAll();

        List<User> userList = List.of(user1, user2, user3, user4, user5);

        this.userRepository.saveAll(userList);

    }
}

package com.contactListManager.contactList.User.controller;

import com.contactListManager.contactList.Contact.model.Contact;
import com.contactListManager.contactList.User.model.User;
import com.contactListManager.contactList.User.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {

    private UserRepository userRepository;

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/")
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/{username}")
    public User getUserById(@PathVariable("username") String username){

        List<User> users = this.userRepository.findAll();

        User user = users.stream()
                .filter(u -> u.getUsername().equals(username)).findAny().orElse(null);

        return user;
    }

    @PostMapping("/")
    public void addUser(@RequestBody User user){
        var x = user;
        this.userRepository.insert(user);
    }

    @PutMapping("/{username}")
    public void updateUser(@PathVariable("username") String username, @RequestBody User updatedUser){

        List<User> users = this.userRepository.findAll();

        User user = users.stream()
                .filter(u -> u.getUsername().equals(username)).findAny().orElse(null);

        this.userRepository.save(user);
    }

    @DeleteMapping("/{username}")
    public void deleteUser(@PathVariable("username") String username){

        List<User> users = this.userRepository.findAll();

        User user = users.stream()
                .filter(u -> u.getUsername().equals(username)).findAny().orElse(null);

        this.userRepository.delete(user);
    }
}

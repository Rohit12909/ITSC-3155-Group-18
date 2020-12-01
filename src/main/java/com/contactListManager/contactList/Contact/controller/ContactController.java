package com.contactListManager.contactList.Contact.controller;

import com.contactListManager.contactList.Contact.model.Contact;
import com.contactListManager.contactList.Contact.repository.ContactRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/contacts")
public class ContactController {

    private ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository){
        this.contactRepository = contactRepository;
    }

    @GetMapping("/")
    public List<Contact> getAllContacts() {
        return this.contactRepository.findAll();
    }

    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable("id") String id){

        List<Contact> contacts = this.contactRepository.findAll();

        Contact contact = contacts.stream()
                .filter(c -> c.getId().equals(id)).findAny().orElse(null);

        return contact;
    }

    @PostMapping("/")
    public void addContact(@RequestBody Contact contact){
        contact.setId(UUID.randomUUID().toString().substring(0, 8));
        this.contactRepository.insert(contact);
    }

    @PutMapping("/{id}")
    public void updateContact(@PathVariable("id") String id, @RequestBody Contact updatedContact){

        List<Contact> contacts = this.contactRepository.findAll();

        Contact contact = contacts.stream()
                .filter(c -> c.getId().equals(id)).findAny().orElse(null);

        contact.setName(updatedContact.getName());
        contact.setPhoneNumber(updatedContact.getPhoneNumber());
        contact.setEmail(updatedContact.getEmail());

        this.contactRepository.save(contact);
    }

    @DeleteMapping("/{id}")
    public void deleteContact(@PathVariable("id") String id){

        List<Contact> contacts = this.contactRepository.findAll();

        Contact contact = contacts.stream()
                .filter(c -> c.getId().equals(id)).findAny().orElse(null);

        this.contactRepository.delete(contact);
    }
}

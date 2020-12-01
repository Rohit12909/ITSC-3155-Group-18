
package com.contactListManager.contactList.Contact.repository;

import com.contactListManager.contactList.Contact.model.Contact;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class ContactSeedData implements CommandLineRunner{

    private ContactRepository contactRepository;

    public ContactSeedData(ContactRepository contactRepository){
        this.contactRepository = contactRepository;
    }

    @Override
    public void run(String... args) throws Exception{

        Contact contact1 = new Contact(UUID.randomUUID().toString().substring(0, 8),"William McCormick", "111-111-1111", "william@gmail.com");
        Contact contact2 = new Contact(UUID.randomUUID().toString().substring(0, 8),"Rohit Rathor", "222-222-2222", "rohit@gmail.com");
        Contact contact3 = new Contact(UUID.randomUUID().toString().substring(0, 8),"Shivu Sharma", "333-333-3333", "shivu@gmail.com");
        Contact contact4 = new Contact(UUID.randomUUID().toString().substring(0, 8),"Tristan Poole", "444-444-4444", "tristan@gmail.com");
        Contact contact5 = new Contact(UUID.randomUUID().toString().substring(0, 8),"Walter Roth", "555-555-5555", "walter@gmail.com");

        this.contactRepository.deleteAll();

        List<Contact> contactList = List.of(contact1, contact2, contact3, contact4, contact5);

        this.contactRepository.saveAll(contactList);

    }
}

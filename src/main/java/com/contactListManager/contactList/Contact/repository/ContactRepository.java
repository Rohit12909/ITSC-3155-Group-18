package com.contactListManager.contactList.Contact.repository;

import com.contactListManager.contactList.Contact.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends MongoRepository<Contact, String> {
}

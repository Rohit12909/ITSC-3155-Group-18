package com.contactListManager.contactList.Contact.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Contact {

    @Id
    private String id;

    private String name;
    private String phoneNumber;
    private String email;
}

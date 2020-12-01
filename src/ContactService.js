import axios from 'axios';
 
const CONTACT_API_BASE_URL = "http://localhost:8080/contacts/";
 
class ContactService {
 
    getContacts(){
        return axios.get(CONTACT_API_BASE_URL);
    }
 
    addContact(contact){
        return axios.post(CONTACT_API_BASE_URL, contact);
    }
 
    getContactById(id){
        return axios.get(CONTACT_API_BASE_URL + id);
    }
 
    updateContact(id, contact){
        return axios.put(CONTACT_API_BASE_URL + id, contact);
    }

    deleteContact(id){
        return axios.delete(CONTACT_API_BASE_URL + id);
    }
}
 
export default new ContactService();
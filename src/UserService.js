import axios from 'axios';
 
const USER_API_BASE_URL = "http://localhost:8080/users/";
 
class ContactService {
 
    getUsers(){
        return axios.get(USER_API_BASE_URL);
    }
 
    addUser(user){
        return axios.post(USER_API_BASE_URL, user);
    }
 
    getUserById(username){
        return axios.get(USER_API_BASE_URL + username);
    }
 
    updateUser(id, user){
        return axios.put(USER_API_BASE_URL + id, user);
    }

    deleteUser(id){
        return axios.delete(USER_API_BASE_URL + id);
    }
}
 
export default new ContactService();
import axios from "axios";

const USER_API_BASE_URL="http://localhost:8080/api/v1/";

class AuthAndRegistration{
    registration(user){
        return axios.post('http://localhost:8080/api/v1/registration', user)
    }
    auth(user){
        return axios.delete('http://localhost:8080/api/v1/auth', user)
    }
}
export default new AuthAndRegistration();
import axios from 'axios';
const callLogin = (email) => {
    
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login', {
        email: email,
    })
}

export default callLogin






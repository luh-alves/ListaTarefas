import axios from 'axios'

const registerUser = (fullName, email) => {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users', {
        fullName: fullName,
        email: email
    })
}
export default registerUser
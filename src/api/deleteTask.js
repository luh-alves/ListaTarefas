import axios from 'axios'
const deleteTask = (token, id) => {
    return axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
export default deleteTask

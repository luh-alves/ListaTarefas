import axios from 'axios'
const updateTasksOnBackEnd = (token, task) => {
    return axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${task.id}`,
        task,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}
export default updateTasksOnBackEnd
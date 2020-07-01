import axios from 'axios'
const createTask = (token, task) => {
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/tasks',
    {
        description:task.description,
        completed: task.completed
    },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
export default createTask

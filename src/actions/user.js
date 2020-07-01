const addUser = (userData) => {
    return {
        type: 'ADD_USER',
        userData: userData
    }
}

export default addUser
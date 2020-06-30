const initialState = {
    userData: { user: {} },
    tasks:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, userData: action.userData };
        case 'UPDATE_TASKS':
            return { ...state, tasks: [...action.tasks] }
        default:
            return state
    }
}
export default reducer


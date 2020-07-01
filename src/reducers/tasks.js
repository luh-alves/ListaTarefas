const initialState = {
    tasks: []
}

//passo para meu store
const taskAdd = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, on: action.on };
        case 'UPDATE_TASK':
            return { ...state, algumaCoisa: action.text }
        default:
            return state
    }
}
export default taskAdd


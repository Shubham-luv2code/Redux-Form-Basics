import {GET_EMP_DETAILS} from './../Action/actionTypes'

const initState = {
    empData: {}
}
const empDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_EMP_DETAILS:
        return state =  {
            ...state,
            empData : action.empData
        }

    default:
        return state
    }
}

export default empDetailsReducer;
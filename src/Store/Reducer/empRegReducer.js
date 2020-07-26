import {GET_EMP_DETAILS,ERROR_FETCH,LOADER_ACTION_TYPE} from './../Action/actionTypes'

const initState = {
    empData: {},
}
const empDetailsReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_EMP_DETAILS:
        return state =  {
            ...state,
            empData : action.empData,
            validEmp: action.validEmp,
        }
        case ERROR_FETCH:
        return state =  {
            ...state,
            empData : action.empData,
            validEmp: action.validEmp,
        }
        case LOADER_ACTION_TYPE:
        return state =  {
            ...state,
            isLoading: action.isLoading
        }
        

    default:
        return state
    }
}

export default empDetailsReducer;
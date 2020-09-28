import {GET_EMP_DETAILS,ERROR_FETCH,LOADER_ACTION_TYPE,USER_GROUP_TYPE} from './../Action/actionTypes'

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
            allowedAction: action.allowedAction
        }
        case ERROR_FETCH:
        return state =  {
            ...state,
            empData : action.empData,
            validEmp: action.validEmp
        }
        case USER_GROUP_TYPE:
        return state =  {
            ...state,
            userGroupData : action.userGroupData,
            allowedAction: action.allowedAction,
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
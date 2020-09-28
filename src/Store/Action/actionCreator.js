import {getEmpDetails,getUserGroups} from './../StoreAPI/empRegApi';
import {GET_EMP_DETAILS,ERROR_FETCH,LOADER_ACTION_TYPE,USER_GROUP_TYPE} from './actionTypes';

const loaderActionCreator = (isLoading) => {
    return {
        type: LOADER_ACTION_TYPE,
        isLoading: isLoading
    };
};

export const getEmpActionCreator = (id,userGroupData) => {
    return (dispatch, getState) => {
        dispatch(loaderActionCreator(true));
        return getEmpDetails(id)
            .then((data) => {
                if(data.status === 200){
                    dispatch(loaderActionCreator(false))
                    dispatch({ type: GET_EMP_DETAILS, empData: data.data,validEmp:true,allowedAction: userGroupData.find(x => x.id == id) === undefined ? false : true})
                    return Promise.resolve()
                }
                else if(data.status >= 400){
                    dispatch(loaderActionCreator(false))
                    dispatch({ type: ERROR_FETCH, empData: {} ,validEmp:true,allowedAction: userGroupData.find(x => x.id == id) === undefined ? false : true})
                    return Promise.reject()
                }
            },
            error =>{
                console.log(error,'error')
                dispatch({ type: ERROR_FETCH, empData: {},validEmp:true ,allowedAction: userGroupData.find(x => x.id == id) === undefined ? false : true})
                return Promise.reject()
            }
        )
            .catch(err => {throw err})
    }
}
export const getUserGroupCreator = () => {
    return (dispatch, getState) => {
        dispatch(loaderActionCreator(true));
        return getUserGroups()
            .then((data) => {
                if(data.status === 200){
                    dispatch(loaderActionCreator(false))
                    dispatch({ type: USER_GROUP_TYPE, userGroupData: data.data,userInGroup:true})
                    return Promise.resolve()
                }
                else if(data.status >= 400){
                    dispatch(loaderActionCreator(false))
                    dispatch({ type: USER_GROUP_TYPE, userGroupData: {} ,userInGroup:false})
                    return Promise.reject()
                }
            },
            error =>{
                console.log(error,'error')
                dispatch({ type: USER_GROUP_TYPE, userGroupData: {},userInGroup:false })
                return Promise.reject()
            }
        )
            .catch(err => {throw err})
    }
}
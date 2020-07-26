import {getEmpDetails} from './../StoreAPI/empRegApi';
import {GET_EMP_DETAILS,ERROR_FETCH,LOADER_ACTION_TYPE} from './actionTypes';

const loaderActionCreator = (isLoading) => {
    return {
        type: LOADER_ACTION_TYPE,
        isLoading: isLoading
    };
};

export const getEmpActionCreator = (id) => {
    return (dispatch, getState) => {
        dispatch(loaderActionCreator(true));
        return getEmpDetails(id)
            .then((data) => {
                if(data.status === 200){
                    dispatch(loaderActionCreator(false))
                    dispatch({ type: GET_EMP_DETAILS, empData: data.data,validEmp:true})
                    return Promise.resolve()
                }
                else if(data.status >= 400){
                    dispatch(loaderActionCreator(false))
                    dispatch({ type: ERROR_FETCH, empData: {} ,validEmp:false})
                    return Promise.reject()
                }
            },
            error =>{
                console.log(error,'error')
                dispatch({ type: ERROR_FETCH, empData: {},validEmp:false })
                return Promise.reject()
            }
        )
            .catch(err => {throw err})
    }
}
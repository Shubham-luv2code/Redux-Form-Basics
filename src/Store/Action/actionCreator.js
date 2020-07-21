import {getEmpDetails} from './../StoreAPI/empRegApi';
import {GET_EMP_DETAILS} from './actionTypes';

export const getEmpActionCreator = (id) => {
    return (dispatch, getState) => {
        return getEmpDetails(id)
            .then((data) => {
                if(data.status === 200){
                    dispatch({ type: GET_EMP_DETAILS, empData: data.data })
                    return Promise.resolve()
                }
                else if(data.status >= 400){
                    dispatch({ type: GET_EMP_DETAILS, empData: {} })
                    return Promise.reject()
                }
            },
            error =>{
                console.log(error,'error')
                dispatch({ type: GET_EMP_DETAILS, empData: {} })
                return Promise.reject()
            }
        )
            .catch(err => {throw err})
    }
}


export const getEmpDetails = (empId) => {
    
    return fetch(`https://jsonplaceholder.typicode.com/users/${empId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json().then(data =>({
        status:response.status,
        data
    })))
        .catch(err => {throw err})
}
export const getUserGroups = () => {
    
    return fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json().then(data =>({
        status:response.status,
        data:data.splice(0,5)
    })))
        .catch(err => {throw err})
}
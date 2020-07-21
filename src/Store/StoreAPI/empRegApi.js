

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
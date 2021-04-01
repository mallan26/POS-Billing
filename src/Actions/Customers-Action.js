import axios from 'axios'

//Adding Customer to Server
export function startAddCustomers(formData){
    return(dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/customers`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(setAddCustomer(result))
                console.log('customer Data', result)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export function setAddCustomer(data){
    return {
        type : "ADD_CUSTOMER",
        payload : data
    }
}

//getting Customers list
export function startGetCustomertList() {
    return(dispatch) => {
        axios.get('http://dct-billing-app.herokuapp.com/api/customers', {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(setCustomersList(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export function setCustomersList(data){
    return {
        type: "LIST_CUSTOMERS",
        payload : data
    }
}

// Removing Customer
export const startGetRemove = (id) => {
    return(dispatch)=> {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            alert(`${result.name} is Successfully removed !`)
            dispatch(remove(id))
        })
    }
}

export const remove=(id) => {
    return {
        type : "REMOVE",
        payload : id
    }
}

// editing/updating a customer
export const startGetEdit = (formData, id) => {
    return(dispatch)=> {
        axios.put(`http://dct-billing-app.herokuapp.com/api/customers/${id}`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            alert(`${result.name} is Successfully Updated !`)
            dispatch(setEditCustomer(result))
        })
    }
}

export const setEditCustomer=(result) => {
    return {
        type : "EDIT",
        payload : result
    }
}

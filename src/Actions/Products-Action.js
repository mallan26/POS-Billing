import axios from 'axios'



//Registering the Product to the server
export function startAddProduct(formData) {
    return(dispatch) =>  {
        axios.post(`http://dct-billing-app.herokuapp.com/api/products`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(setAddProduct(result))
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export function setAddProduct(data){
    return {
        type : "ADD_PRODUCT",
        payload : data
    }
}

// Getting the products list from the server
export function startGetProductList() {
    return(dispatch) =>  {
        axios.get('http://dct-billing-app.herokuapp.com/api/products', {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(setProductsList(result))
           // navigate('/register')
            console.log('product List data:', result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export function setProductsList(data){
    return {
        type : "PRODUCT_LIST",
        payload : data
    }
}

// Edit action Creator
export const startGetEdit = (formData, id) => {
    return(dispatch)=> {
        axios.put(`http://dct-billing-app.herokuapp.com/api/products/${id}`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=>{
            const result = response.data
            alert(`${result.name} is Successfully Updated !`)
            dispatch(setEditProduct(result))
        })
    }
}

export const setEditProduct=(result) => {
    return {
        type : "EDIT",
        payload : result
    }
}

//removing a product
export const startGetRemove = (id) => {
    return(dispatch)=> {
        axios.delete(`http://dct-billing-app.herokuapp.com/api/products/${id}`, {
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
import axios from 'axios'


// posting a bill to server
export function startPostBill(formData) {
    return(dispatch) => {
        axios.post(`http://dct-billing-app.herokuapp.com/api/bills`, formData, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response)=> {
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(setNewBill(result))
                console.log('bill data', result)
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export function setNewBill(data){
    return {
        type : "ADD_BILL",
        payload : data
    }
}

//start Get bill
export const startGetBills=()=>{
    return (dispatch)=>{
        axios.get('http://dct-billing-app.herokuapp.com/api/bills' , {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
        .then((response)=>{
            const result = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else {
                dispatch(getBill(result))
            }
        })
    }
}

export const getBill =(data)=>{
    return {
        type : "GET_BILLS" ,
        payload : data
    }
}

//removing a bill
export const startRemoveBill = (id)=>{
    return(dispatch)=>{
        axios.delete(`http://dct-billing-app.herokuapp.com/api/bills/${id}` , {
            headers : {
                "Authorization":`Bearer ${localStorage.getItem('token')}`
            }})
            .then((response)=>{
                const result = response.data
                if(Object.keys(result).includes('errors')){
                    alert(result.message)
                } else {
                    dispatch(Remove(result))
                    alert('successfully removed the bill')
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
}

export const Remove =(data)=>{
    return {
        type : "REMOVE" ,
        payload : data
    }
}
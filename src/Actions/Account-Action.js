import axios from 'axios'

export function startGetAccountData() {
    return(dispatch) =>  {
        axios.get(`http://dct-billing-app.herokuapp.com/api/users/account`, {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(setUserData(result))
            //console.log('user data:', result)
        })
        .catch((err) => {
            alert(err.message)
        })
    }
}

export function setUserData(data){
    return {
        type : "ACCOUNT_DATA",
        payload : data
    }
}
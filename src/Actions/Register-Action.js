import axios from 'axios'

export function startGetData(formData, navigate){ 
    return(dispatch) => {
        axios.post('http://dct-billing-app.herokuapp.com/api/users/register', formData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')){
                alert(result.message)
            } else {
                alert('Successfully Created an Account')
                dispatch(setData(result))
                navigate('/signin')
                //console.log('Response data', result) 
            }
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
}

export function setData(data) {
    return {
        type : 'POST_DATA',
        payload : data
    }
}

export const clearStore = () => {
    return {
        type : 'CLEAR'
    }
}
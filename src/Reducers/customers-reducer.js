const initialCustomerValue = []

export default function customerReducer(state = initialCustomerValue, action){
    switch(action.type){
        case "ADD_CUSTOMER" : {
            return [...state, {...action.payload}]
        }
        case "LIST_CUSTOMERS" : {
            return [...action.payload]
        }
        case "EDIT" : {
            return state.map(ele => {
                if(ele._id ===action.payload._id){
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })
        }
        case "REMOVE" : {
            return state.filter(ele => ele._id !== action.payload)
        }
        default : {
            return initialCustomerValue
        } 
    }
}
const initialProductValue = []

    export default function productReducer(state = initialProductValue, action){
        switch(action.type) {
            case "ADD_PRODUCT" : {
                return  [...state, {...action.payload}]
            }
            case "PRODUCT_LIST" : {
                return [...action.payload]
            }
            case "REMOVE" : {
                return state.filter(ele=>ele._id !== action.payload)
            }
            case "EDIT" : {
                return state.map(ele => {
                    if(ele._id === action.payload._id){
                        return {...ele , ...action.payload}
                    } else {
                        return {...ele}
                    }
                })
            }
            default : {
                return initialProductValue
            }
        }
    }


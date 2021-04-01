const initialUserValue = []

    export default function accountReducer(state = initialUserValue, action){
        switch(action.type) {
            case "ACCOUNT_DATA" : {
                return  {...action.payload}
            }
            default : {
                return initialUserValue
            }
        }
    }
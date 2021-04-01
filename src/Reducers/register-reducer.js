const initialRegisterValue = []

    export default function registerReducer(state = initialRegisterValue, action){
        switch(action.type) {
            case 'POST_DATA' : {
                return [...state, {...action.payload}]
            }
            case 'CLEAR' : {
                return initialRegisterValue
            }
            default : {
                return [...state]
            }
        }
    }
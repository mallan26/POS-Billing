const initialCartValue = []

export default function cartReducer(state=initialCartValue, action) {
    switch(action.type){
        case "ADD_ITEMS" : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}
import { createStore, combineReducers, applyMiddleware} from 'redux'
import registerReducer from '../Reducers/register-reducer'
import accountReducer from '../Reducers/account-reducer'
import thunk from 'redux-thunk'
import productReducer from '../Reducers/product-reducer'
import customerReducer from '../Reducers/customers-reducer'
import cartReducer from '../Reducers/cart-reducer'
import billReducer from '../Reducers/bill-reducer'

//import { useReducer } from 'react'

export default function configureStore() {
    const store = createStore(combineReducers({
        FormData : registerReducer,
        account : accountReducer,
        products : productReducer,
        customers : customerReducer,
        cartItems : cartReducer,
        bills : billReducer
        }), applyMiddleware(thunk))
        return store
    }
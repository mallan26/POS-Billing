import React from 'react'
import CustomersForm from './CustomersForm'

export default function editCustomers({id, name, mobile, email, handleToggle}) {

    return (
        <div>
        <CustomersForm id={id} 
                       name={name} 
                       mobile={mobile} 
                       email={email}
                       handleToggle={handleToggle}/>
        </div>
    )
}
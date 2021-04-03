import React, {useState} from 'react'
import { useSelector} from 'react-redux'
import ProductsItem from './ProductsItem'

export default function ProductsList(){
    const [search , setSearch] = useState('')

    const data = useSelector((state) => {
        return state.products
    })

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch =()=>{
        const result = data.filter(ele=>{
            return ele.name.toLowerCase().includes(search.toLowerCase())
        })
        return result
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return (
        <div>
            <h2> Search Product </h2>
            <form onSubmit={handleSubmit}>
            <input type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Search Product"
                    />
            </form>
            { handleSearch().map((ele)=> {
            return <ProductsItem key={ele._id} {...ele}/> })
        }
         </div>
    )
} 
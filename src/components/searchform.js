import { useState } from 'react'

const SearchForm = (props) => {
    const [searchText, setSearchText] = useState('')

    const handleInputChange = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <form>
            <input type='text' data-testid='input-id' onChange={(e) => handleInputChange(e)} value={searchText} placeholder='City' />
            <button  
                type='submit' 
                onClick={(event) => {
                    event.preventDefault()
                    props.onSubmit(searchText)
                }} 
                data-testid='submit-id'
            >Search</button>
        </form>
    )
}

export default SearchForm

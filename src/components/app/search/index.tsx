import React, { useState } from 'react'

const Search = () => {
    const [city, setCity] = useState<string>('')

    const onSubmit = (e: any) => {
        e.preventDefault()
        if(!city) return;
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit} className="find-location">
                <input type="text" placeholder="Find your location..." onChange={(e) => setCity(e.target.value)}/>
                <input type="submit" value="Find" />
            </form>
        </div>
    )
}

export default Search

import React, { useEffect, useState } from 'react'
import { getInfo } from '../../../helpers/userInfo'
import { searchPropsI } from '../../../interfaces/search/search.interface'

const Search = ({ getLocation }: searchPropsI) => {
    const [city, setCity] = useState<string>('')

    const getUserCity = () => {
        getInfo().then(res => getLocation(res.name))
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if (!city) return;
        getLocation(city)
        setCity('')
    }

  
    useEffect(() => {
        getUserCity()
    }, [])


    return (
        <div className="container">
            <form onSubmit={onSubmit} className="find-location">
                <input type="text" placeholder="Find your location..." onChange={(e) => setCity(e.target.value)} value={city} />
                <input type="submit" value="Find" />
            </form>
        </div>
    )
}

export default Search
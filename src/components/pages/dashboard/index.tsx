import React from 'react'
import ForecastTable from '../../app/forecastTable'
import Search from '../../app/search'

const Dashboard = () => {
    return (
        <>
            <div className="hero" data-bg-image="images/banner.png" style={{ backgroundImage: 'url(/images/banner.png)' }}>
                <Search />
            </div>
            <ForecastTable/>
        </>
    )
}

export default Dashboard
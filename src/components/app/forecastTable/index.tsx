import React from 'react'

const ForecastTable = () => {
    return (
        <div className="forecast-table">
            <div className="container">
                <div className="forecast-container">
                    <div className="today forecast">
                        {/* <div className="forecast-header">
                            <div className="day">Monday</div>
                            <div className="date">{new Date().toLocaleDateString()}</div>
                        </div> */}
                        <div className="forecast-content">
                            <div className='leftSection' style={{ background: 'url(https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', WebkitBackgroundSize: 'cover' }}>
                                {/* <img src="https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg" alt="day" style={{ width: '5rem' }} /> */}
                                <div className='title-container'>
                                    <div className="location">New York</div>
                                    <div className="date">{new Date().toLocaleDateString()}</div>
                                </div>
                                <div className='temperature-container'>
                                    <div className="degree">
                                        <div className="num">23<sup>o</sup>C</div>
                                    </div>

                                    <div className="forecast-icon">
                                        <img src="images/icons/icon-1.svg" alt="" width="45" />
                                    </div>

                                    {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
                                        <span><img src="images/icon-umberella.png" alt="" />20%</span>
                                        <span><img src="images/icon-wind.png" alt="" />18km/h</span>
                                        <span><img src="images/icon-compass.png" alt="" />East</span>
                                    </div> */}
                                </div>
                            </div>

                            <div className='rightSection'>
                                hola
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForecastTable
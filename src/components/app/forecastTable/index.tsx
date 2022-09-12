import { forecastPropsI } from "../../../interfaces/forecast/forecast.interface";

const ForecastTable = ({weather, forecast}: forecastPropsI) => {
    const fakeStats = [{ label: 'Max Temperature', value: '13.6C' }, { label: 'Min Temperature', value: '10.6C' }, { label: 'Thermal sensation', value: '13.6C' }, { label: 'Humidity', value: '5%' }, { label: 'Wind Speed', value: '6.17m/s' }];
    console.log(weather);
    
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
                                <div className='title-container'>
                                    <div className="location">{weather?.name}</div>
                                    {/* <div className="date">{new Date().toLocaleDateString() || ''}</div> */}
                                </div>
                                <div className='temperature-container'>
                                    <div className="degree">
                                        <div className="num">{Math.ceil((weather?.main?.temp || 0) - 274.15).toFixed(0)}<sup>o</sup>C</div>
                                    </div>

                                    <div className="forecast-icon">
                                        <img src="images/icons/icon-1.svg" alt="" width="45" />
                                    </div>

                                </div>
                            </div>

                            <div className='rightSection'>
                                <div className='listStats'>
                                    {fakeStats.map((el, i) => (
                                        <span key={`element-${i}`}>{el.label}: {el.value}</span>
                                    ))}
                                </div>
                                <div className='icons-weather'>

                                    <div className='icon-item-info'>
                                        <span style={{ marginRight: '0', color: '#fff', fontSize: '1.2rem' }}>6/5/2021 15h</span>
                                        <div className='icon-info'>
                                            <img src="images/icons/icon-13.svg" alt="" width="48" />
                                            <p style={{ color: '#fff', fontSize: '1.2rem' }}>Lluvia ligera</p>
                                        </div>
                                        <div className="degree">23<sup>o</sup>C</div>
                                    </div>


                                    <div className='icon-item-info'>
                                        <span style={{ marginRight: '0', color: '#fff', fontSize: '1.2rem' }}>6/5/2021 15h</span>
                                        <div className='icon-info'>
                                            <img src="images/icons/icon-13.svg" alt="" width="48" />
                                            <p style={{ color: '#fff', fontSize: '1.2rem' }}>Lluvia ligera</p>
                                        </div>
                                        <div className="degree">23<sup>o</sup>C</div>
                                    </div>


                                    <div className='icon-item-info'>
                                        <span style={{ marginRight: '0', color: '#fff', fontSize: '1.2rem' }}>6/5/2021 15h</span>
                                        <div className='icon-info'>
                                            <img src="images/icons/icon-13.svg" alt="" width="48" />
                                            <p style={{ color: '#fff', fontSize: '1.2rem' }}>Lluvia ligera</p>
                                        </div>
                                        <div className="degree">23<sup>o</sup>C</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForecastTable
import { forecastPropsI } from "../../../interfaces/forecast/forecast.interface";

const ForecastTable = ({ weather, forecast }: forecastPropsI) => {
    const stats = [{ label: 'Max Temperature', value: Math.ceil((weather?.main?.temp_max || 0) - 274.15).toFixed(0) }, { label: 'Min Temperature', value: Math.ceil((weather?.main?.temp_min || 0) - 274.15).toFixed(0) }, { label: 'Thermal sensation', value: Math.ceil((weather?.main?.feels_like || 0) - 274.15).toFixed(0) }, { label: 'Humidity', value: weather?.main?.humidity }, { label: 'Wind Speed', value: weather?.wind.speed }];

    return (
        <div className="forecast-table">
            <div className="container">
                <div className="forecast-container">
                    <div className="today forecast">
                        <div className="forecast-content">
                            <div className='leftSection' style={{ background: 'url(https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)', WebkitBackgroundSize: 'cover' }}>
                                <div className='title-container'>
                                    <div className="location">{weather?.name}</div>
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
                                    {stats.map((el, i) => (
                                        <span key={`element-${i}`}>{el.label}: {el.value}{el.label == 'Humidity' ? '%' : el.label == 'Wind Speed' ? 'm/s' : <><sup>o</sup>C</>}</span>
                                    ))}
                                </div>

                                <div className='icons-weather'>
                                    {
                                        forecast?.list.map((el, i) => (
                                            i > 0 && i < 4 ?
                                            <div className='icon-item-info' key={`smallWeather-${i}`}>
                                                <span style={{ marginRight: '0', color: '#fff', fontSize: '1.2rem' }}>{el.dt_txt}</span>
                                                <div className='icon-info'>
                                                    <img src="images/icons/icon-13.svg" alt="" width="48" />
                                                    <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom:'0', marginTop:'1rem'}}>{el.weather[0].description}</p>
                                                </div>
                                                <div className="degree">{Math.ceil((el?.main?.temp || 0) - 274.15).toFixed(0)}<sup>o</sup>C</div>
                                            </div> 
                                            :
                                            ''
                                        ))
                                    }
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
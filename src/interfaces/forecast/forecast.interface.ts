export interface forecastPropsI {
    weather?: weatherI
    forecast?: forecastI
}

export interface weatherI {

    coord: coordsI
    weather: Array<subWeatherI>
    base: string
    main: mainI
    visibility: number
    wind: windI
    clouds: cloudI
    dt: number
    sys: sysI
    timezone: number
    id: number
    name: string
    cod: number
}

export interface coordsI {
    lon: number
    lat: number
}

export interface subWeatherI {
    id: number
    main: string
    description: string
    icon: string

}

export interface mainI {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

export interface windI {
    speed: number
    deg: number
}

export interface cloudI {
    all: number
}

export interface sysI {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

export interface forecastI {
    city: cityI
    cnt: number
    cod: string
    list: Array<any>
}

export interface cityI {
    coord: coordsI
    country: string
    id: number
    name: string
    population: string
    sunrise: string
    sunset: string
    timezone: string
}

import {weatherAPI} from "../dal/dal";

const GET_DATA = 'GET_DATA'
const ERROR = 'ERROR'

const initialState = {
    weatherData: {
        city: null,
        clouds: null,
        temp: null,
        windSpeed: null,
        humidity: null,
        fellsLike: null,
    },
    errorData: null

}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, weatherData: {...action.payload}, errorData: null}
        case ERROR:
            return {...state, errorData: {...action.payload}, weatherData: {city: null, clouds: null,
                temp: null, windSpeed: null, humidity: null, fellsLike: null}}

        default:
            return state
    }
}
const getData = (clouds, temp, windSpeed, city, humidity, feelsLike) =>
    ({type: GET_DATA, payload: {clouds, temp, windSpeed, city, humidity, feelsLike}})

const errorData = (error) => ({type: ERROR, payload: {error}})

export const getDataThunk = (value) => async (dispatch) => {
    try {
        const response = await weatherAPI.getData(value)
        const clouds = response.weather[0].main
        const temp = response.main.temp
        const windSpeed = response.wind.speed
        const city = response.name
        const humidity = response.main.humidity
        const feelsLike = response.main.feels_like
        dispatch(getData(clouds, temp, windSpeed, city, humidity, feelsLike))
    } catch (error) {
        debugger
        dispatch(errorData(error))
    }


}


export default mainReducer

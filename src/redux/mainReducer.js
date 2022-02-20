import {weatherAPI} from "../dal/dal";

const GET_DATA = 'GET_DATA'

const initialState = {
    city: null,
    clouds: null,
    temp: null,
    windSpeed: null,
}


const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}
const getData = (clouds, temp, windSpeed,city) =>
    ({type: GET_DATA, payload: {clouds, temp, windSpeed,city}})

export const getDataThunk = (value) => async (dispatch) => {
    const response = await weatherAPI.getData(value)
    const clouds = response.weather[0].main
    const temp = response.main.temp
    const windSpeed = response.wind.speed
    const city = response.name
    debugger
    dispatch(getData(clouds,temp,windSpeed,city))

}


export default mainReducer

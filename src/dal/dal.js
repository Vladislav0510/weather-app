import axios from "axios";

const API_KEY = 'f9a23bb6c172cebb886d60daebd2041c'
const instance = axios.create({
 baseURL: 'https://api.openweathermap.org/data/2.5/'
})


export const weatherAPI = {
    getData (value) {
        return instance.get(`weather?q=${value}&appid=${API_KEY}`)
            .then(response => response.data)
    }
}
//console.log(weatherAPI.getData('Minsk'))


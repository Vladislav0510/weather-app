import {connect} from "react-redux";
import Footer from "./Footer";

const mapStateToPtops = (state) => {
    return {
        windSpeed: state.main.weatherData.windSpeed,
        humidity: state.main.weatherData.humidity,
        feelsLike: state.main.weatherData.feelsLike,
    }
}

export default connect(mapStateToPtops, {})(Footer)
import {connect} from "react-redux";
import Content from "./Content";

const mapStateToProps = (state) => {
    debugger
    return {
        city: state.main.weatherData.city,
        clouds: state.main.weatherData.clouds,
        temp: state.main.weatherData.temp,
        error: state.main.weatherData.error
    }
}

export default connect(mapStateToProps, {})(Content)
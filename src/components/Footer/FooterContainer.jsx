import {connect} from "react-redux";
import Footer from "./Footer";

const mapStateToPtops = (state) => {
    return {
        windSpeed: state.main.windSpeed,
        humidity: state.main.humidity,
        feelsLike: state.main.feelsLike,
    }
}

export default connect(mapStateToPtops, {})(Footer)
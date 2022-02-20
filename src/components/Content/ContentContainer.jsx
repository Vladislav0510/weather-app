import {connect} from "react-redux";
import Content from "./Content";

const mapStateToProps = (state) => {
    return {
        city: state.main.city,
        clouds: state.main.clouds,
        temp: state.main.temp,
        windSpeed: state.main.windSpeed,

    }
}

export default connect(mapStateToProps, {})(Content)
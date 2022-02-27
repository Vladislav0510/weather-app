import Header from "./Header";
import {getDataThunk} from "../../redux/mainReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    debugger
    return {
        error: state.main.errorData
    }
}

export default connect( mapStateToProps, {getDataThunk})(Header)
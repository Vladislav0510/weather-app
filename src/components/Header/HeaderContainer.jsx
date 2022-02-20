import Header from "./Header";
import {getDataThunk} from "../../redux/mainReducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {

    }
}

export default connect( mapStateToProps, {getDataThunk})(Header)
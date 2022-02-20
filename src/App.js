import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";


const App = () => (
    <div className="wrapper">
        <HeaderContainer/>
        <ContentContainer/>
    </div>
);

export default App;

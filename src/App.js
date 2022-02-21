import './App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import ContentContainer from "./components/Content/ContentContainer";
import FooterContainer from "./components/Footer/FooterContainer";


const App = () => (
    <div className="wrapper">
        <HeaderContainer/>
        <ContentContainer/>
        <FooterContainer/>
    </div>
);

export default App;

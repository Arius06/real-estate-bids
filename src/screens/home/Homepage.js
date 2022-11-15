import './homepage.css'
import dropDownArrow from './images/dropdown-icon.png'
import Searchbar from "./components/Searchbar";
import Apartments from "../../Apartments";

const Homepage = () => {
    return (
        <>
            <div className="homepage-wrapper">
                <div className="homepage-headers">
                    <h1>БЫСТРАЯ ПРОДАЖА\ПОКУПКА НЕДВИЖИМОСТИ</h1>
                    <div className="homepage-description">
                        <p>Объявления собственников о продаже квартир, комнат, коттеджей, домов, дач</p>
                    </div>
                </div>
                <div className="square-options">
                    <div className="square-button"><p>КУПИТЬ НЕДВИЖИМОСТЬ</p></div>
                    <p>?</p>
                    <div className="square-button"><p>КУПИТЬ НЕДВИЖИМОСТЬ</p></div>
                </div>
                <div className="choose-city">
                    <div className="small-square-button">
                        <p>Выбрать город</p>
                        <img src={dropDownArrow} alt="arrow"/>
                    </div>
                </div>
                <p className="informative-text">найдите то, что вам нужно</p>
                <Searchbar />
            </div>
            <Apartments />
        </>
    )
}

export default Homepage;
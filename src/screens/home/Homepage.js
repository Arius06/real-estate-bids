import './homepage.css'
import dropDownArrow from './images/dropdown-icon.png'
import Searchbar from "./components/Searchbar";

const Homepage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="headers">
                    <h1>БЫСТРАЯ ПРОДАЖА\ПОКУПКА НЕДВИЖИМОСТИ</h1>
                    <div className="description">
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
                <Searchbar />
            </div>
        </>
    )
}

export default Homepage;
import './buyscreen.css'
import Searchbar from "../home/components/Searchbar";
import dropdownArrow from "../home/images/dropdown-icon.png"
import map from "../apart-details/images/map.png"
import Buyoffercard from "./components/Buyoffercard";
import Pageselector from "./components/Pageselector"

const Buyscreen = () => {

    return (
        <div className="buy-page-body">
            <div className="buy-section-body">
                <div className="buy-title">
                    <p>Купить квартиру</p>
                </div>
                <div className="buy-text-section">
                    <p className="buy-paragraph">Важно правильно расставить приоритеты и купить квартиру на вторичном
                        рынке в очень хорошем состоянии.<br/> Например, в домах, которые были введены в эксплуатацию
                        всего несколько лет назад.<br/>
                        Наиболее интенсивная продажа квартир происходит в микрорайонах с развитой инфраструктурой, где в<br/> шаговой
                        доступности детские сады, школы, остановки общественного транспорта и т. д.<br/>
                        Следует отметить, что не всякая «новостройка» сейчас может это показать. Так называемая<br/>
                        «вторичка» – отличный вариант купить квартиру и не тратиться на ремонт.</p>
                    <a href="#"><p className="search-needs">Найдите то, что вам нужно ...</p></a>
                </div>
                <Searchbar/>
                <div className="filter-options">
                    <div className="filter-option">
                        <p>Вторичка (165)</p>
                        <img className="closed-option" src={dropdownArrow} alt="arrow"/>
                    </div>
                    <div className="filter-option">
                        <p>Новостройка (17)</p>
                        <img className="closed-option" src={dropdownArrow} alt="arrow"/>
                    </div>
                    <div className="filter-option">
                        <p>Ком. недвижимость (22)</p>
                        <img className="closed-option" src={dropdownArrow} alt="arrow"/>
                    </div>
                    <div className="filter-option">
                        <p>Дома, котеджи, дачи (125)</p>
                        <img className="closed-option" src={dropdownArrow} alt="arrow"/>
                    </div>
                </div>
                <div className="buy-apart-info-text">
                    <p className="blue-info-text">1-комнатные 2-комнатные 3-комнатные 4-комнатные Многокомнатные Комнаты
                        Студии</p>
                </div>
            </div>
            <div className="buy-offers-wrapper">
                <div className="main-content-body">
                    <div className="map-section">
                        <img src={map} alt="map"/>
                    </div>
                    <div className="buy-offers-section">
                        <Buyoffercard/>
                        <Buyoffercard/>
                        <Buyoffercard/>
                    </div>
                </div>
            </div>
            <div className="secondary-body-section">
                <div className="buy-ad-block"><p>Рекламный блок</p></div>
            </div>
            <div className="bottom-offer">
                <Buyoffercard/>
            </div>
            <div className="page-surfer">
                <Pageselector/>
            </div>
        </div>
    )
}

export default Buyscreen;
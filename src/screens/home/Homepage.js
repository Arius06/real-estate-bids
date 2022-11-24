import './homepage.css'
import dropDownArrow from './images/dropdown-icon.png'
import arrowSelector from './images/arrow-selector.png'
import Searchbar from "./components/Searchbar";
import Apartments from "./Apartments";

const Homepage = () => {

    // IN THE WORKS
    // const infoBoxSwitcher = event => {
    //     const selector = document.querySelector(".arrow-selector")
    //     const links = document.querySelectorAll(".question-link")
    //     links.forEach(item => {
    //         item.classList.remove("clicked-question-link")
    //     })
    //     event.currentTarget.classList.add("clicked-question-link")
    //     if (event.classList.contains("link-one")) {
    //         return selector.style.right = "840px"
    //     }
    //     if (event.currentTarget.classList.contains("link-two")) {
    //         return selector.style.right = "536px"
    //     }
    //     if (event.currentTarget.classList.contains("link-three")) {
    //         return selector.style.right = "250px"
    //     }
    // }

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
                <Searchbar/>
            </div>
            <div className="main-homepage-body">
                <div className="homepage-first-container">
                    <div className="fast-buy-section">
                        <h1>Хотите быстро продать?</h1>
                        <div className="homepage-fastbuy-button"><p>ПОДАТЬ ОБЪЯВЛЕНИЕ</p></div>
                    </div>
                    <div className="home-buy-section-info">
                        <div className="home-text-box">
                            <p>Для этого Вам потребуется менее 1 минуты - зарегистрироваться, указав имя, электронную
                                почту и номер телефона.<br/>
                            <a href="#">Зарегистрироваться</a>
                            </p>
                        </div>
                        <div className="home-question-links">
                            <a id="question-link link-one">Чем мы можем помочь?</a>
                            <a id="question-link link-two">Как пользоваться?</a>
                            <a id="question-link link-three">Это безопасно?</a>
                        </div>
                        <img src={arrowSelector} alt="link-selector" className="arrow-selector"/>
                        <div className="switchable-info-box">
                            <p>Отличительной чертой нашего магазина является принцип английского аукциона.
                                Это позволяет собственникам и покупателям напрямую и без посредников заключать наиболее <b>выгодные и быстрые</b> сделки по покупке\продаже недвижимости. Для покупателей купить лучшее жилье по минимальной цене, главное не упустить момент и сделать вовремя свою ставку. Для собственников в быстрой и выгодной продаже квартиры - борьба между покупателями только повышает ее стоимость! <b>С нами вы легко найдёте того, которого вы ищете!</b></p>
                        </div>
                    </div>
                </div>
            </div>

                <Apartments/>

        </>
    )
}

export default Homepage;
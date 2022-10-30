import './detailsScreen.css'
import previewImg from './images/preview.png'
import mapImage from './images/map.png'
import profilepic from './images/profile-pic.png'
import Sharesection from "./components/Sharesection";
import Otheroffers from "./components/Otheroffers";

const DetailsScreen = () => {
    return (
        <>
            <div className="wrapper">
                <div className="title">
                    <h1>Квартира, 1 комнаты, 37 м²</h1>
                    <div className="countdown">
                        <h3>До снятия объекта с продажи <b>14</b> дней и <b>12:00:08</b> часов</h3>
                    </div>
                </div>
                <div className="splitterElement"><h4>Квартира в Омске / 1 - комнатная</h4></div>
                <div className="main-content">
                    <div className="visualResources">
                        <img src={previewImg} alt="preview image" id="apart-image"/>
                        <img src={mapImage} alt="map image" id="map-image"/>
                        <iframe src="https://www.youtube.com/embed/VoVaDsxdvqY"
                                title="Apartment presentation."
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen id="video-box"></iframe>
                    </div>
                    <div className="detailsTabs">
                        <div className="infoBlock">
                            <div className="titleIsland"><h4>Торги</h4></div>
                            <div className="card-content">
                                <div className="buying-options">
                                    <h3>Рыночная цена</h3>
                                    <div className="price1"><p>4 365 000 ₽</p></div>
                                    <div className="buybutton1"><p>Вопрос продавцу</p></div>
                                </div>
                                <div className="buying-options">
                                    <h3>Текущая цена</h3>
                                    <div className="price2"><p>4 065 000 ₽</p></div>
                                    <div className="buybutton2"><p>Купить сейчас</p></div>
                                </div>
                                <div className="buying-options">
                                    <h3>Блиц цена</h3>
                                    <div className="price3"><p>4 065 000 ₽</p></div>
                                    <div className="buybutton3"><p>Сделать ставку</p></div>
                                </div>
                            </div>
                            <p id="warning-text">Уведомить об изменении цены</p>
                        </div>
                        <div className="infoBlock">
                            <div className="titleIsland" id="widerIsland"><h4>Характеристики объекта/дома</h4></div>
                            <div className="text-box">
                                <p className="details-text">Предложение от
                                    .........................................................собственника<br/>
                                    Тип объекта
                                    ...............................................................1-комнатные<br/>
                                    Тип объявления ..........................................................Продам<br/>
                                    Количество комнат......................................................1<br/>
                                    Вид объекта................................................................Вторичка
                                    Площадь
                                    ....................................................................34.9<br/>
                                    Этаж
                                    ..........................................................................9<br/>
                                    Этажей в доме ............................................................9<br/>
                                    Тип дома
                                    ....................................................................Панельный<br/>
                                    Площадь кухни ...........................................................7<br/>
                                    Срок сдачи .................................................................1979</p>
                            </div>
                        </div>
                        <div className="infoBlock">
                            <div className="titleIsland"><h4>Описание</h4></div>
                            <div className="text-box">
                                <p className="details-text">Продам 1-комнатную квартиру в Ново-Савиновском районе.
                                    Квартира находится по адресу Маршала Чуйкова 7, на 9/9 этаже, так же есть
                                    дополнительное техническое помещение.
                                    В дома был капитальный ремонт. В квартире есть все для комфортного проживания,
                                    опрятный ремонт, новая мебель, большая 6-м лоджия. В шаговой доступности: садики,
                                    магазины, торговые центры и парки. В стоимость квартиры входит мебель. Один
                                    собственник, чистая продажа, ключи в день сделки. Риелторов прошу не беспокоить.
                                    Людям с наличными сделаем скидку.</p>
                            </div>
                        </div>
                        <div className="last-bids">
                            <div className="seeMore"><p>Вы также смотрели...</p></div>
                            <div className="section-title"><p>Последние ставки</p></div>
                            <div className="last-three-bids">
                                <div className="bid-preview">
                                    <img src={profilepic} alt="profile-picture" id="profpic"/>
                                    <div className="bidder-details">
                                        <p id="bidder-name">Александр</p>
                                        <p id="bid-text">ставка</p>
                                        <p id="bid-sum">1 375 000 ₽</p>
                                    </div>
                                    <img src={profilepic} alt="profile-picture" id="profpic"/>
                                    <div className="bidder-details">
                                        <p id="bidder-name">Сергей</p>
                                        <p id="bid-text">ставка</p>
                                        <p id="bid-sum">1 375 000 ₽</p>
                                    </div>
                                    <img src={profilepic} alt="profile-picture" id="profpic"/>
                                    <div className="bidder-details">
                                        <p id="bidder-name">Вадим</p>
                                        <p id="bid-text">ставка</p>
                                        <p id="bid-sum">1 375 000 ₽</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Sharesection/>
                    </div>
                </div>
                <div className="other-offers">
                    <div className="others-header"><p>Похожие объекты</p></div>
                    <Otheroffers/>
                </div>
            </div>
        </>
    )
}

export default DetailsScreen;
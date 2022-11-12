import React from 'react';
import "../../components/contact_page/Contac_page.css"
import TestObjects from "../../components/contact_page/imgObj";
import "./Auction_screen.css";

const AuctionScreen = () => {
    return (
        <div className="allPage">
            <div className="title">
                <p>Как купить объект на аукционе</p>
                <h2>До снятия <br/>
                    объекта с продажи <span>14</span> <br/>
                    дней и <span>12:00:08</span> часов</h2>
            </div>

            <div className="aboutUs">
                <p>Квартира в Омске / 1 - комнатная</p>
                <h3>Вы также смотрели...</h3>
            </div>

            <div className="faces">
                <div className="divTitle">
                    <p>Правила покупки объекта на аукционе.</p>
                </div>
                <p className="rulesForBuyingText">На аукционе можно: делать ставки, задавать вопросы собственнику и бронировать объекты. <br/>
                    1. Забронировать недвижимость и остановить торги можно во время аукциона, оплатив символическую
                    сумму 50 рублей. Это сделано специально, и для того, чтобы покупатель смог показать собственнику
                    свои серьезные намерения приобрести жилье и исключить фейковые предложения. <br/>
                    2. При брони объекта, лот срывается из общего списка и становится не доступен для других участников
                    аукциона до момента отклика собственника.
                    При остановки торгов в личном кабинете покупателя сразу будут доступны контакты продавца (номер
                    телефона, e-mail и соц.сети при наличии таковых).
                    Остановка продажи объекта не означает его покупку. Если собственнику не подойдет Ваше предложение,
                    он в праве выставить объект на торги вновь.
                    Это важно! По окончании срока размещения объекта на аукционе (21 день) всем участникам площадки
                    будут доступны контакты продавца.
                    Но нужно также не забывать и о том, что во время аукциона объект может быть продан и Вы потеряете
                    лучший вариант на рынке.</p>

            </div>

            <div className="faces">
                <div className="divTitle">
                    <p>Небольшой юридический сан минимум</p>
                </div>

                <iframe className="auctionScrVideo" src="https://www.youtube.com/embed/C5q0ULg0nmY?start=1255"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>

            <div className="rateArticle">

                <div className="rateArticleFD">
                    <a href="src/screens/auction_screen/Auction_screen">Оцени статью</a>
                    <div>
                        <img src={TestObjects.imG10} alt=""/>
                        <img src={TestObjects.imG10} alt=""/>
                        <img src={TestObjects.imG10} alt=""/>
                        <img src={TestObjects.imG10} alt=""/>
                        <img src={TestObjects.imG10} alt=""/>
                    </div>
                </div>
                <div>
                    <a href="src/screens/auction_screen/Auction_screen">Понравилась статья - поделись с другом</a>
                    <div>
                        <img className="vK" src={TestObjects.imG} alt=""/>
                        <img src={TestObjects.imG1} alt=""/>
                        <img src={TestObjects.imG2} alt=""/>
                        <img src={TestObjects.imG3} alt=""/>
                        <img src={TestObjects.imG4} alt=""/>
                        <img src={TestObjects.imG5} alt=""/>
                        <img src={TestObjects.imG7} alt=""/>
                        <img src={TestObjects.imG6} alt=""/>
                    </div>
                </div>
            </div>

            <div className="blockAD">
                <p>Рекламный блок</p>
            </div>

        </div>
    );
};

export default AuctionScreen;
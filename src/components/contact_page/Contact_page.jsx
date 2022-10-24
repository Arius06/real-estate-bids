import React from 'react';
import "./Contac_page.css"

import TestObjects from "./imgObj";

const ContactPage = () => {
    return (
        <div className="allPage">
            <div className="title">
                <p>Контакты</p>
                <div>
                    <a href="#">Задать вопрос в соц. сетях</a>
                    <div className="socialN">
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

            <div className="aboutUs">
                <p>О нашей команде</p>
            </div>

            <div className="wAWDoing">
                <div className="divTitle">
                    <p>Пару слов о том, что мы делаем</p>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/C5q0ULg0nmY?start=1255"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                    <p>На аукционе можно: делать ставки, задавать вопросы собственнику и бронировать объекты. <br/>
                        1. Забронировать недвижимость и остановить торги можно во время аукциона, оплатив символическую
                        сумму 50 рублей. Это сделано специально, и для того, чтобы покупатель смог показать собственнику
                        свои серьезные намерения приобрести жилье и исключить фейковые предложения.</p>
                </div>
            </div>

            <div className="faces">
                <div className="divTitle">
                    <p>Лица</p>
                </div>
                <div className="specificP">
                    <div>
                        <a href="#">Руководитель проекта</a>
                        <img src={TestObjects.imG9} alt=""/>
                        <div>
                            <h3>Задать вопрос</h3>
                            <p>Сейчас онлайн</p>
                        </div>
                    </div>
                    <div>
                        <a href="#">Специалист по недвижимости</a>
                        <img src={TestObjects.imG9} alt=""/>
                        <div>
                            <h3>Задать вопрос</h3>
                            <p>Сейчас онлайн</p>
                        </div>
                    </div>
                    <div>
                        <a href="#">Юридические вопросы</a>
                        <img src={TestObjects.imG9} alt=""/>
                        <div>
                            <h3>Задать вопрос</h3>
                            <p>Сейчас онлайн</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="faces">
                <div className="divTitle">
                    <p>Написать нам</p>
                </div>

                <div className="WriteToUsDiv">
                    <div className="messageForm">
                        <h2>Форма сообщений</h2>
                        <label htmlFor="name">Имя</label>
                        <input id="name" placeholder="Введите имя" type="text"/>
                        <label htmlFor="message">Сообщение</label>
                        <textarea cols="400" rows="5" id="message" placeholder="Введите сообщение" type="text"/>
                        <div>
                            <button>ОТПРАВИТЬ</button>
                            <div>
                                <p>Введите код с картинки</p>
                                <div>
                                    <p>5 7 3 2</p>
                                    <input type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="messages">
                        <h2>Сообщения</h2>
                        <div> </div>
                    </div>


                </div>
            </div>


            <div className="reviews">
                <div className="divTitle">
                    <p>Отзывы</p>
                </div>

                <div className="reviewsInfo">
                    <img src={TestObjects.imG8} alt=""/>
                    <div>
                        <div>
                            <div>
                                <h3>Продажа бабушкиной квартиры</h3>
                                <p>Наталья</p>
                            </div>
                            <div>
                            <img src={TestObjects.imG10} alt=""/>
                            <img src={TestObjects.imG10} alt=""/>
                            <img src={TestObjects.imG10} alt=""/>
                            <img src={TestObjects.imG10} alt=""/>
                            <img src={TestObjects.imG10} alt=""/>
                            </div>
                        </div>
                        <p>У нас в советском районе в Омске однушка после бабушки осталась. Дом в принципе неплохой,
                            только квартира не очень - ремонт давно требовался. Мы решили ее продать, добавить и купить
                            новую квартиру сыну, поближе к нам ( в Кировском живем ). Заморачиваться по поводу переделок
                            не хотелось - долго, затратно. Решили так продавать. Выставили везде, где можно, объявления.
                            Цену вроде поставили недорогую - 1 млн 500 тыс.</p>
                            <a href="#">Показать полностью +</a>

                    </div>
                </div>

                <button>СМОТРЕТЬ ВСЕ ОТЗЫВЫ</button>

            </div>


        </div>
    );
};

export default ContactPage;
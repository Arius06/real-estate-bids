import React from "react";
import './footer.css'
import MobileIcon from "./images/pngwing.com (5).png"
import VkIcon from "./images/pngwing.com (1).png"
import FbIcon from "./images/pngwing.com (2).png"
import OkIcon from "./images/pngwing.com (3).png"
import IgIcon from "./images/pngwing.com (4).png"
import Arrow from "./images/arrow.png"

const Footer = () => {

    const elements = {
        "sales": {
            title: ["Продажа"],
            element: [
                'Квартиры, комнаты',
                'Однокомнатные',
                'Двухкомнатные',
                'Дома, участки, дачи',
                'Коммерческая недвижимость',
                'Гаражи'
            ]
        },
        "newBuildings": {
            title: ["Новостройки"],
            element: ["Жилые комплексы",
                "Квартиры в новостройках",
                "Коттеджные посёлки"
            ]
        },
        "optional": {
            title: ["Дополнительно"],
            element:
                [
                    "Агентства",
                    "Застройщики",
                    "Цены",
                ],
            aditional: [
                "Способы оплаты",
                "Техподдержка",
                "Контакты",
                "Правила",
                "Политика конфиденциальности"
            ]
        },

    }
    return (
        <div className="footer">
            <div className="list">
                <div>
                    <ul>
                        {
                            elements.sales.title.map((item) => {
                                return (
                                    <h3>{item}</h3>
                                )
                            })
                        }
                        {
                            elements.sales.element.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className="newBuildings">
                        {
                            elements.newBuildings.title.map((item) => {
                                return (
                                    <h3>{item}</h3>
                                )
                            })
                        }
                        {
                            elements.newBuildings.element.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                        <li className="mobileVersion">
                            <img src={MobileIcon} alt="Iphone image" className="dimension"/>
                            <span>Мобильная версия сайта</span>
                        </li>
                    </ul>
                    <ul>
                        {
                            elements.optional.title.map((item) => {
                                return (
                                    <h3>{item}</h3>
                                )
                            })
                        }
                        {
                            elements.optional.element.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        {
                            elements.optional.aditional.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="icons">
                    <a href="https://vk.com/" target="_blank">
                        <img src={VkIcon} alt="link to vk" className="dimensions"/>
                    </a>
                    <a href="https://www.facebook.com/login.php/" target="_blank">
                        <img src={FbIcon} alt="link to facebook" className="dimensions"/>
                    </a>
                    <a href="https://ok.ru/" target="_blank">
                        <img src={OkIcon} alt="link to ok" className="dimensions"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={IgIcon} alt="link to instagram" className="dimensions"/>
                    </a>
                </div>
            </div>
            <h5 className="text">Магазин недвижимости "S KVARTIROI" © 2016-2020 Все права защищены.</h5>
            <div className="containerButton">
                <div className="toTopButton" onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                    <img src={Arrow} alt="To top" className="topArrow"/>
                </div>
            </div>

        </div>
    )
}
export default Footer;
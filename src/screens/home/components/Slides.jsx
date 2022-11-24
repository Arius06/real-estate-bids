import './slides.css';
import Left from "../../../assets/images/Left.png";
import Right from "../../../assets/images/Right.png";
import Image from "../../../assets/images/Image (6).png";
import Icon from "../../../assets/images/Heart.png";
import Countdown from "react-countdown";

const timer = ({ days, hours, minutes}) => {
    return <div className="countdown-first">{days}:{hours}:{minutes}</div>;
}

const Slides = () => {


    return (
        <div className="slideshow-container">

            <div className="prev"><a onClick="plusSlides(-1)"> <img src={Left}/></a></div>

            <div className="container">

                <div className="left-part">
                    <div><img width={"394px"} src={Image}/></div>
                    <div className="txt"> 13 дней до снятия объекта с продажи!</div>
                    <div className="timer"> Осталось часов: <Countdown date={Date.now() + 999999999} renderer={timer}/></div>
                </div>
                <div className="right-part">
                    <div className="begin">
                        <div className="lot">Лот № 00176</div>
                        <div className="heart"><img src={Icon}/></div>
                    </div>
                    <div className="list">
                        <div className="one">Квартира, 2 комнаты, 60 м²</div>
                        <div className="two"> <span className="font-bold">Недвижимость:</span> квартира в Омске</div>
                        <div className="three"> <span className="font-bold">Адрес:</span> улица Широтная, д. 158к3</div>
                        <div className="four"> <span className="font-bold">Текущая цена:</span> <span style={{color: "white"}}>4 823 000</span> рублей</div>
                        <div className="five"> <span className="font-bold">Блиц цена:</span> <span style={{color: "red"}}>5 300 000 </span> рублей</div>
                    </div>
                    <div className="button-container">
                        <button className="button-offer"> <span className="font-bold-white">ПРЕДЛОЖИТЬ ЦЕНУ</span></button>
                        <button className="button-offer"> <span className="font-bold">КУПИТЬ СЕЙЧАС</span></button>
                    </div>
                </div>

            </div>

            <div className="next"><a onClick="plusSlides(1)"> <img src={Right}/></a></div>
        </div>
    )
}

export default Slides;

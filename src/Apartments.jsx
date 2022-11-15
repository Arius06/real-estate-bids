import './apartaments.css';
import Dropdown from "./Dropdown";
import Slides from "./Slides";

const Apartments = () => {

    return (
        <div className={"App"}>
            <div className={"first"}>
                <div className={"title"}>
                    Что такое аукцион недвижимости?
                </div>
            </div>
            <div className={"second"}>
                <div className={"text"}>
                    Аукцион недвижимости - это инновационный скоростой метод продажи любого объекта недвижимости по
                    максимальной цене в конкретный срок. Это позволяет собственникам и покупателям напрямую и без
                    посредников заключать наиболее выгодные и бытрые (до 21 дня) сделки. С нами вы легко найдёте того,
                    кого
                    вы ищите!
                </div>
            </div>
            <div className={"third"}>
                <div className={"sale"}>
                    Недвижимость в продаже
                </div>
            </div>
            <Dropdown />
            <div className={"rooms"}>
                1-комнатные 2-комнатные 3-комнатные 4-комнатные Многокомнатные Комнаты Студии
            </div>
            <Slides />
        </div>

    )
}
export default Apartments;
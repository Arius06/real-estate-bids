import './apartaments.css';
import Dropdown from "./components/Dropdown";
import Slides from "./components/Slides";

const Apartments = () => {

    return (
        <div className="section-one-container">
            <div className="title-first-section">
                Что такое аукцион недвижимости?
            </div>
            <div className="text-text">
                Аукцион недвижимости - это инновационный скоростой метод продажи любого объекта недвижимости по
                максимальной цене в конкретный срок. Это позволяет собственникам и покупателям напрямую и без
                посредников заключать наиболее выгодные и бытрые (до 21 дня) сделки. С нами вы легко найдёте того,
                кого
                вы ищите!
            </div>
            <div className="title-first-section">
                Недвижимость в продаже
            </div>
            <Dropdown/>

            <Slides/>
        </div>

    )
}
export default Apartments;
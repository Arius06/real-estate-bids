import './offercard.css'
import previewimage from '../images/preview.png'

const Otheroffers = () => {
    return (
        <div className="other-offers">
            <div className="offer">
                <div className="offer-header">
                    <p className="headertext1">Квартира, 1 комната, 37 м2</p>
                    <p className="headertext2">Квартира в Омске/1 комнатные</p>
                </div>
                <div className="offer-box">
                    <img src={previewimage} alt="preview-image"/>
                    <div className="offer-specs">
                        <div className="description">
                            <p>Предложение от...собственника<br/>
                                Тип......................1-комнатные</p>
                        </div>
                        <div className="current-price">
                            <p>Текущая цена<br/>
                                <b>4 065 000 р.</b></p>
                        </div>
                        <div className="timer">
                            До окончания торгов<br/>
                            осталось <b>14</b> дней и <b>12:00:08</b><br/>часов.
                        </div>
                        <div className="blitz-price">
                            <p>Блиц цена<br/>
                                <b>4 065 000 р.</b></p>
                        </div>
                        <div className="learn-more-button">
                            <p>ПОДРОБНЕЕ</p>
                        </div>
                        <div className="watch-later">
                            <a href="#"><p><b>Посмотреть позже</b></p></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Otheroffers;
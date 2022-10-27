import './detailsScreen.css'
import previewImg from './images/preview.png'

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
                <div className="visualResources">
                    <img src={previewImg} alt="preview image"/>
                </div>
                <div className="detailsTabs">
                    <div className="infoBlock">
                        <div className="titleIsland"><h4>Торги</h4></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsScreen;
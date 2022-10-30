import telegram from '../images/telega.png'
import okru from '../images/okru.png'
import facebook from '../images/facebook.png'
import myworld from '../images/myworld.png'
import twitter from '../images/twitter.png'
import whatsapp from '../images/whatsapp.png'
import viber from '../images/viber.png'
import vk from '../images/vk.png'
import './sharesection.css'

const Sharesection = () => {
    return (
        <div className="icon-section">
            <p>Посоветуйся с другом</p>
            <div className="icons">
                <a href="https://vk.com"><img src={vk} alt="vk-icon" id="vkicon"/></a>
                <a href="https://ok.ru"><img src={okru} alt="okru-icon"/></a>
                <a href="https://www.facebook.com"><img src={facebook} alt="fb-icon"/></a>
                <a href="https://www.myworld.com/md-ro"><img src={myworld} alt="mw-icon"/></a>
                <a href="https://twitter.com"><img src={twitter} alt="twt-icon"/></a>
                <a href="https://www.viber.com/en/"><img src={viber} alt="viber-icon"/></a>
                <a href="https://telegram.org"><img src={telegram} alt="teleg-icon"/></a>
                <a href="https://www.whatsapp.com"><img src={whatsapp} alt="wa-icon"/></a>
            </div>
        </div>
    )
}

export default Sharesection;
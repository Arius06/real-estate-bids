import './otheroffers.css'
import Offercard from './Offercard'

const Otheroffers = () => {
    return (
        <div className="other-offers">
            <Offercard/>
            <Offercard/>
            <div className="advertisment-box"><p>Рекламный блок</p></div>
            <Offercard/>
        </div>
    )
}

export default Otheroffers;
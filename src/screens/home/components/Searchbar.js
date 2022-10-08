import './searchbar.css'
import dropDownArrow from '../images/dropdown-icon.png'
import searchIcon from '../images/search-icon.png'

const Searchbar = () => {
    return (
        <>
            <p>Hайдите то, что вам нужно</p>
            <div className="search-bar">
                <input type="text" className="first-search" placeholder="Продажа"/>
                <img src={dropDownArrow} alt="arrow"/>
                <input type="text" className="second" placeholder="Тип жилья"/>
                <img src={dropDownArrow} alt="arrow"/>
                <input type="text" className="third" placeholder="Район, микрорайон"/>
                <img src={dropDownArrow} alt="arrow"/>
                <input type="text" className="fourth" placeholder="Населённый пункт, улица, дом"/>
                <input type="text" className="fifth" placeholder="Цена от"/>
                <input type="text" className="last-search" placeholder="Цена до"/>
            </div>
            <div className="search-button">
                <img src={searchIcon} alt="arrow"/>
            </div>
        </>
    )
}

export default Searchbar
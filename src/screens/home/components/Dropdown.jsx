import './dropdown.css';
import {useState} from "react";
import image from "../../../assets/images/ChevronDown.png";

const Dropdown = () => {
    const obj = {
        one: false,
        two: false,
        tree: false,
        four: false,
    }

    const [showDropdown, setShowDropdown] = useState(obj)

    const test = (test) => setShowDropdown((prev) => {
        return {
            ...prev,
            [test]: !prev[`${test}`]
        }
    })
    return (
        <div className={"down"}>
            <div className={"menu-all"}>
                <div className={"menu-item"}>
                    <div>Вторичка (165)</div>

                    <button className={"drop-btn"}>

                        <img onClick={() => test('one')} src={image}/>
                    </button>
                    {showDropdown.one && (
                        <div id="myDropdown">
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                        </div>
                    )}

                </div>
                <div className={"menu-item"}>
                    <div>Новостройка (17)</div>

                    <button className={"drop-btn"}>

                        <img onClick={() => test('two')} src={image}/>
                    </button>
                    {showDropdown.two && (
                        <div id="myDropdown">
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                        </div>
                    )}
                </div>
                <div className={"menu-item"}>
                    <div>Ком. недвижимость (22)</div>

                    <button className={"drop-btn"}>
                        <img onClick={() => test('tree')} src={image}/>
                    </button>
                    {showDropdown.tree && (
                        <div id="myDropdown">
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                        </div>
                    )}
                </div>
                <div className={"menu-item"}>
                    <div>Дома, котеджи, дачи (125)</div>

                    <button onClick={test} className={"drop-btn"}>
                        <img onClick={() => test('four')} src={image}/>
                    </button>
                    {showDropdown.four && (
                        <div id="myDropdown">
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                            <div>Variant</div>
                        </div>
                    )}
                </div>
            </div>
            <div className={"rooms"}>
                1-комнатные 2-комнатные 3-комнатные 4-комнатные Многокомнатные Комнаты Студии
            </div>
        </div>
    )
}

export default Dropdown
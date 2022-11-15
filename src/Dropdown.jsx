import './dropdown.css';
import {useState} from "react";
import image from "./assets/images/ChevronDown.png";

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
            <div>Вторичка (165)</div>
            <div className={"down-one"}>
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
            <div>Новостройка (17)</div>
            <div className={"down-two"}>
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
            <div>Ком. недвижимость (22)</div>
            <div className={"down-three"}>
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
            <div>Дома, котеджи, дачи (125)</div>
            <div className={"down-four"}>
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
    )
}

export default Dropdown
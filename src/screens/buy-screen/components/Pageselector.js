import './pageselector.css'
import Arrow from '../../home/images/dropdown-icon.png'

const Pageselector = () => {
    return (
        <>
            <div className="page-selector-container">
                <div className="page-square"><p>1</p></div>
                <div className="page-square"><p>2</p></div>
                <div className="page-square"><p>3</p></div>
                <div className="page-square"><img src={Arrow} alt="arrow"/></div>
            </div>
        </>
    );
}

export default Pageselector;
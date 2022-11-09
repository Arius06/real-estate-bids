import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";
import Homepage from './screens/home/Homepage'
import DetailsScreen from "./screens/apart-details/DetailsScreen";
import Contact_page from "./components/contact_page/Contact_page";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Homepage/>}/>
                <Route path={"/details"} element={<DetailsScreen/>}/>
                <Route path={"/contact"} element={<Contact_page/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    )
}

export default App;
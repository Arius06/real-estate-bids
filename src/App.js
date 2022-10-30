import Navbar from './components/navbar/Navbar'
import Footer from "./components/footer/Footer";
import Homepage from './screens/home/Homepage'
import DetailsScreen from "./screens/apart-details/DetailsScreen";
import Contact_page from "./components/contact_page/Contact_page";

function App() {
    return (
        <>
            <Navbar/>
            <Homepage/>
            <DetailsScreen/>
            <Contact_page/>
            <Footer/>
        </>
    )
}
export default App;
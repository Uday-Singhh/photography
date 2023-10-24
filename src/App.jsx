import react from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import { Switch, Route, Routes} from 'react-router-dom';
const App=()=>{
    return(
        <>
        <Navbar/>
        <switch>
            <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/about" Component={About}/>
            <Route exact path="/service" Component={Service}/>
            <Route exact path="/contact" Component={Contact}/>
           
            </Routes>
            
        </switch>
             <Footer/> 
        </>
    )
}
export default App;
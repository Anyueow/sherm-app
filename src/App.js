import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';

import {Button, Container} from "react-bootstrap";
import Happy from "./fun/Happy";
import Sad from "./fun/Sad";


const ToggleButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const togglePage = () => {
        if (location.pathname === '/page-one' || location.pathname === '/') {
            navigate('/page-two');
        } else {
            navigate('/page-one');
        }
    };

    return (
        <Container style={{display:"flex",
            justifyContent:"center", alignItems:"center",
        height:"20vh"}}>

        <Button
            className="toggleButton" onClick={togglePage}> Switch The Girl</Button>
        </Container>
    );
};


const App = () => {
    return (
        <Router>
            <ToggleButton />
            <Routes>
                <Route path="/page-one" element={<Happy />} />
                <Route path="/page-two" element={<Sad />} />
            </Routes>
        </Router>
    );
};

export default App;

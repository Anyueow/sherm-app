import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';

import {Button, Container} from "react-bootstrap";
import Happy from "./fun/Happy";
import Sad from "./fun/Sad";


const ToggleButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const togglePage = () => {
        let newPage = '';
        if (location.pathname === '/happy' || location.pathname === '/') {
            newPage = 'BIG MAD';
            navigate('/mad');
        } else {
            newPage = 'HAPPY';
            navigate('/happy');
        }

        sendEmail(newPage);
    };

    const sendEmail = (pageName) => {
        const subject = encodeURIComponent('ALERT!');
        const body = encodeURIComponent(`Praveen has selected ${pageName}`);
        window.location.href = `mailto:anyushah@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", height: "20vh"}}>
            <Button className="toggleButton" onClick={togglePage}>Switch The Girl</Button>
        </Container>
    );
};


const App = () => {
    return (
        <Router>
            <ToggleButton />
            <Routes>
                <Route path="/happy" element={<Happy />} />
                <Route path="/mad" element={<Sad />} />
            </Routes>
        </Router>
    );
};

export default App;

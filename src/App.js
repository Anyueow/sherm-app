import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';

import {Button, Container} from "react-bootstrap";
import Happy from "./fun/Happy";
import Sad from "./fun/Sad";
import OkrVisualization from "./doablesample/OkrVisualization";
import okrProgress from "./doablesample/OkrProgress";
import OkrProgress from "./doablesample/OkrProgress";


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
            <Button className="toggleButton" onClick={togglePage}>See Progress </Button>
        </Container>
    );
};


const App = () => {
    return (
        <Router>
            <ToggleButton />
            <Routes>
                <Route path="/happy" element={<OkrVisualization />} />
                <Route path="/mad" element={<OkrProgress />} />
            </Routes>
        </Router>
    );
};

export default App;

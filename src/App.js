import './App.css';
import {BrowserRouter as Router, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import DoableCreator from "./doablesample/DoableCreator";
import OkrVisualization from "./doablesample/OkrVisualization";
import OkrProgress from "./doablesample/OkrProgress";
import {Button} from "react-bootstrap";

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
        <Button onClick={togglePage}>Toggle Page</Button>
    );
};


const App = () => {
    return (
        <Router>
            <ToggleButton />
            <Routes>
                <Route path="/page-one" element={<OkrVisualization />} />
                <Route path="/page-two" element={<OkrProgress />} />
            </Routes>
        </Router>
    );
};

export default App;

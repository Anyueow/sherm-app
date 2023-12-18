import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const ToggleButton = ({ pageOne, pageTwo }) => {
    const [currentPage, setCurrentPage] = useState(pageOne);

    const togglePage = () => {
        setCurrentPage(currentPage === pageOne ? pageTwo : pageOne);
    };

    return (
        <Button onClick={togglePage}>Toggle Page</Button>
    );
};

export default ToggleButton;

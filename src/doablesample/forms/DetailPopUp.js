// DetailPopUp.js
import React from 'react';
import { Modal, Button } from "react-bootstrap";
import "./floatpopup.css";
import './Fonts/fonts.css';
import { MdClose } from 'react-icons/md';

function NewlineText({ text }) {
    const newText = text.split('\n').map((str, index, array) =>
                                             index === array.length - 1 ? str : <><span>{str}</span><br/></>
    );
    return <>{newText}</>;
}

const DetailPopUp = ({ title, description, goals, show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Button className="custom-close-button" onClick={handleClose}>
                <MdClose className="butt"/>
            </Button>
            <Modal.Header>

                <Modal.Title className="popup-title">{title}</Modal.Title>

            </Modal.Header>
            <Modal.Body>

                <div className="popup-description">
                    <NewlineText text={goals} />
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DetailPopUp;

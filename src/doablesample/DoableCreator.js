import React, { useState } from 'react';
import {Modal, Button, Form, Container, Col, Row} from 'react-bootstrap'; // Assuming you're using react-bootstrap
import "./sherm.css";

const DoableCreator = () => {
    const [showModal, setShowModal] = useState(false);
    const [doableType, setDoableType] = useState('');
    const [doableDetails, setDoableDetails] = useState({});

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process doableDetails here (e.g., send to backend or update state)
        console.log(doableDetails);
        handleClose();
    };

    // Function to update doable details based on form input
    const handleDetailChange = (e) => {
        setDoableDetails({ ...doableDetails, [e.target.name]: e.target.value });

        displayDoable(e);


    };

    const displayDoable = (e) => {
        return (
            <Container className="doableViewCal">
                <h3 className="infoName"> e.target.name </h3>
                <h2 className="bubble"> e.target.value </h2>

            </Container>
        );

    }

    return (
        <Container className="containedcal">
            <Row className="cal">
                <Col className="calObj">

                    <Container className="headTitle">
                        <h3> Day One </h3>
                    </Container>

                    <Button onClick={handleOpen} className={"addButton"}>+</Button>

                    <Container className="doableViewCal">

                        <Row style={{flexDirection:"row", justifyContent:"center",
                            alignContent:"center", alignItems:"center", width:"100%"}}>
                            <Col> <h5 className="infoName"> Task Title</h5>
                                <h5 className="typeBubble"> task </h5></Col>
                            <Col > <p className="timeBubble">60%</p>
                                <p className="deadline">23 Dec</p> </Col>
                       </Row>


                    </Container>

                </Col>
                <Col className="calObj">


                    <Container className="headTitle">
                        <h3> Day Two </h3>
                    </Container>

                    <Button onClick={handleOpen} className={"addButton"}>+</Button>

                    <Container className="doableViewCal">

                        <Row style={{flexDirection:"row", justifyContent:"center",
                            alignContent:"center", alignItems:"center", width:"100%"}}>
                            <Col> <h5 className="infoName"> Goal Title</h5>
                                <h5 className="typeBubble"> goal </h5></Col>
                            <Col > <p className="timeBubble">80%</p>
                                <p className="deadline">23 Dec</p> </Col>
                        </Row>


                    </Container>

                </Col>
                <Col className="calObj">


                    <Container className="headTitle">
                        <h3> Day Three </h3>
                    </Container>

                    <Button onClick={handleOpen} className={"addButton"}>+</Button>

                    <Container className="doableViewCal">

                        <Row style={{flexDirection:"row", justifyContent:"center",
                            alignContent:"center", alignItems:"center", width:"100%"}}>
                            <Col> <h5 className="infoName"> Meeting Title</h5>
                                <h5 className="typeBubble"> meeting </h5></Col>
                            <Col > <p className="timeBubble"> w/ Ananya  </p>
                                <p className="deadline">25 Dec</p> </Col>
                        </Row>


                    </Container>

                </Col>
                <Col className="calObj">


                    <Container className="headTitle">
                        <h3> Day Four </h3>
                    </Container>

                    <Button onClick={handleOpen} className={"addButton"}>+</Button>

                    <Container className="doableViewCal">

                        <Row style={{flexDirection:"row", justifyContent:"center",
                            alignContent:"center", alignItems:"center", width:"100%"}}>
                            <Col> <h5 className="infoName"> Goal Title</h5>
                                <h5 className="typeBubble"> goal </h5></Col>
                            <Col > <p className="timeBubble">80%</p>
                                <p className="deadline">23 Dec</p> </Col>
                        </Row>


                    </Container>

                </Col>
                <Col className="calObj">


                    <Container className="headTitle">
                        <h3> Day Five </h3>
                    </Container>

                    <Button onClick={handleOpen} className={"addButton"}>+</Button>

                    <Container className="doableViewCal">

                        <Row style={{flexDirection:"row", justifyContent:"center",
                            alignContent:"center", alignItems:"center", width:"100%"}}>
                            <Col> <h5 className="infoName"> Goal Title</h5>
                                <h5 className="typeBubble"> goal </h5></Col>
                            <Col > <p className="timeBubble">80%</p>
                                <p className="deadline">23 Dec</p> </Col>
                        </Row>


                    </Container>

                </Col>

            </Row>


            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Doable</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Type of Doable</Form.Label>
                            <Form.Control
                                as="select"
                                name="type"
                                onChange={(e) => setDoableType(e.target.value)}
                            >
                                <option value="">Select Type</option>
                                <option value="meeting">Meeting</option>
                                <option value="task">Task</option>
                                <option value="goal">Goal</option>
                            </Form.Control>
                        </Form.Group>


                        {doableType === 'meeting' && (
                            <div>
                                <Form.Group>
                                    <Form.Label>Meeting Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="meetingName"
                                        onChange={handleDetailChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Time & Day</Form.Label>
                                    <Form.Control
                                        type="datetime-local"
                                        name="meetingTime"
                                        onChange={handleDetailChange}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Person</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="meetingPerson"
                                        onChange={handleDetailChange}
                                    />
                                </Form.Group>
                            </div>
                        )}

                        {doableType === 'task' && (
                            <div>
                                <Form.Group>
                                    <Form.Label>Task</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="taskName"
                                        onChange={(e) => setDoableType(e.target.name)}
                                    />
                                </Form.Group>
                                <Form.Group>

                                    <Form.Label>Task Duration (in days)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="taskDuration"
                                        min="1"
                                        onChange={handleDetailChange}
                                    />
                                </Form.Group>
                            </div>
                        )}

                        {doableType === 'goal' && (
                            <div>
                                <Form.Group>
                                    <Form.Label>Goal</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="goalName"
                                        onChange={(e) => setDoableType(e.target.name)}
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Goal Frequency</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="goalFrequency"
                                        onChange={handleDetailChange}
                                    >
                                        <option value="">Select Frequency</option>
                                        <option value="weekly">Weekly</option>
                                        <option value="monthly">Monthly</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Goal Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="goalDescription"
                                        onChange={handleDetailChange}
                                    />
                                </Form.Group>
                            </div>
                        )}


                        <Button type="submit">Create Doable</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default DoableCreator;

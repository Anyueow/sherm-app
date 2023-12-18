import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "./okrprog.css";
import DetailPopUp from "./forms/DetailPopUp";



const VerticalProgressBar = ({ progress, barColor, percentageColor }) => {
    const height = 100; // Total height of the bar
    const width = 20; // Width of the bar
    const progressHeight = (progress / 100) * height; // Height of the progress part

    return (
        <svg width="120" height="20">
            {/* Background bar */}
            <rect
                x="15"
                y="10"
                width={width}
                height={height}
                fill={barColor}
            />
            {/* Foreground bar (progress) */}
            <rect
                x="15"
                y={10 + height - progressHeight}
                width={width}
                height={progressHeight}
                fill={percentageColor}
            />
            {/* Text */}
            <text x="25" y="115" textAnchor="middle" fontSize="12">
                {`${progress}%`}
            </text>
        </svg>
    );
};

function OkrProgress() {

    const objectives = {
        "Increase User Registration & Engagement": [
            {
                title: "40% Increase in Registrations",
                detail: "Achieve a 40% increase in new user registrations on the FindHer platform by the end of the quarter."
            },
            {
                title: "50% More User Interaction",
                detail: "Increase user interaction with the platform (measured by activities such as completing profiles, posting reviews, and engaging with resources) by 50%."
            },
            {
                title: "Gather User Feedback",
                detail: "Collect and analyze feedback from at least 100 users to redesign website / conversion pipeline"
            },
        ],
        "Expand Social Media Presence": [
            {
                title: "Grow following on Instagram and LinkedIn",
                detail: "Grow Instagram and LinkedIn followers by 30% and achieve an average engagement rate of 5% on posted content"
            },
            {
                title: "Launch a Successful Influencer Campaign",
                detail: "Collaborate with at least 10 influencers in the target demographic, aiming for a total reach of 500,000 impressions and a 10% increase in traffic to the FindHer website from social media channels"
            },
            {
                title: "Build brand awareness",
                detail: "Consistently post 4 times a week, 1 reel per week. Reach 100 people each day through insights."
            },
        ],
        "Strengthen Employer Partnerships": [
            {
                title: "Reach out to 20 people daily",
                detail: "Target people wth HR titles, reach out on LinkedIn, and convert to a sales call"
            },
            {
                title: "Build database of Open Positions",
                detail: "Convert companies to fill out form and build database of open positions at 'partner' companies"
            },
            {
                title: "Build 50 Company pages",
                detail: "get more detailed information from comapnies, send surverys to female employees, build their 'company overview' page on FindHer"
            },
        ],

    };

    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', description: '', goals:''});

    const handleObjClick = (obj) => {
        const formattedGoals = objectives[obj].map(goal => `• ${goal.detail}`).join('\n');
        setModalContent({
                            title: `Objective: ${obj}`,
                            description: `${obj}`,
                            goals: formattedGoals
                        });
        setShowModal(true);
    };

    return (
        <>
            <DetailPopUp
                title={modalContent.title}
                description={modalContent.description}
                goals={modalContent.goals}
                show={showModal}
                handleClose={() => setShowModal(false)}
            />

            <Container className="ContWrap">
                <Row className="centerTree bubble">
                    <h1> Enhance User Engagement and Grow the FindHer Community </h1>
                </Row>

                <div className="line"></div>

                <Row className="centerTree">
                    {Object.keys(objectives).map((obj, index) => (
                        <Col key={index} className="centerTreeCol" onClick={() => handleObjClick(obj)}>
                            <h1 className="titleObj"> {obj} </h1>
                            <VerticalProgressBar progress={95} circleColor ="#CCF8FE" percentageColor="#02A0FC" />

                            <div className="line"></div>
                            {objectives[obj].map((goal, idx) => (
                                <Row key={idx} className="centerTreeRow">

                                    <h3 className="subtitleObj"> {goal.title} </h3>
                                </Row>
                            ))}
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default OkrProgress;

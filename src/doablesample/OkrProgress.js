import React, { useState } from 'react';
import { Col, Container, Row, ProgressBar } from "react-bootstrap";
import "./okrprog.css";
import DetailPopUp from "./forms/DetailPopUp";


const HorizontalProgressBar = ({ progress, barColor, backgroundColor }) => {
    const width = 300; // Total width of the progress bar
    const height = 20; // Height of the progress bar

    const progressWidth = (progress / 100) * width; // Width of the filled part of the bar

    return (
        <svg width={width} height={height}>
            {/* Background rectangle */}
            <rect
                x="0"
                y="0"
                width={width}
                height={height}
                fill={backgroundColor || "#e0e0e0"}
            />
            {/* Foreground rectangle (progress) */}
            <rect
                x="0"
                y="0"
                width={progressWidth}
                height={height}
                fill={barColor || "#4caf50"}
            />
            {/* Text */}
            <text
                x={width / 2}
                y={height / 2}
                textAnchor="middle"
                alignmentBaseline="central"
                fontSize="12"
                fill="white"
            >
                {`${progress}%`}
            </text>
        </svg>
    );
};

const CircularProgressBar = ({ progress, circleColor, percentageColor }) => {
    const radius = 30; // Half of the original radius
    const circumference = 2 * Math.PI * radius;
    const offset = ((progress / 100) * circumference) - circumference;

    return (
        <svg width="70" height="70"> {/* Half of the original width and height */}
            <circle
                cx="35" // Half of the original cx
                cy="35" // Half of the original cy
                r={radius}
                stroke={"#635EE01E"}
                strokeWidth="10" // Half of the original strokeWidth
                fill={circleColor}


            />
            <circle
                cx="35" // Half of the original cx
                cy="35" // Half of the original cy
                r={radius}
                stroke={percentageColor}
                strokeWidth="10" // Half of the original strokeWidth
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
            />
            <text x="35" y="35" textAnchor="middle" dy=".3em" fontSize="14"> {/* Adjusted position and font size */}
                <tspan dy="0.3em">{`${progress}%`}</tspan>
            </text>
        </svg>
    );
};

function OkrProgress() {
    const objectives = {
        "Increase User Registration & Engagement": [
            {
                title: "40% Increase in Registrations",
                detail: "Achieve a 40% increase in new user registrations on the FindHer platform by the end of the quarter.",
                progress: 60
            },
            {
                title: "50% More User Interaction",
                detail: "Increase user interaction with the platform (measured by activities such as completing profiles, posting reviews, and engaging with resources) by 50%.",
                progress: 90

            },
            {
                title: "Gather User Feedback",
                detail: "Collect and analyze feedback from at least 100 users to redesign website / conversion pipeline",
                progress: 20

            },
        ],
        "Expand Social Media Presence": [
            {
                title: "Grow following on Instagram and LinkedIn",
                detail: "Grow Instagram and LinkedIn followers by 30% and achieve an average engagement rate of 5% on posted content",
                progress: 76

            },
            {
                title: "Launch a Successful Influencer Campaign",
                detail: "Collaborate with at least 10 influencers in the target demographic, aiming for a total reach of 500,000 impressions and a 10% increase in traffic to the FindHer website from social media channels",
                progress: 51

            },
            {
                title: "Build brand awareness",
                detail: "Consistently post 4 times a week, 1 reel per week. Reach 100 people each day through insights.",
                progress: 95

            },
        ],
        "Strengthen Employer Partnerships": [
            {
                title: "Reach out to 20 people daily",
                detail: "Target people wth HR titles, reach out on LinkedIn, and convert to a sales call",
                progress: 67

            },
            {
                title: "Build database of Open Positions",
                detail: "Convert companies to fill out form and build database of open positions at 'partner' companies",
                progress: 99

            },
            {
                title: "Build 50 Company pages",
                detail: "get more detailed information from comapnies, send surverys to female employees, build their 'company overview' page on FindHer",
                progress: 5

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

    // Function to calculate average progress
    const calculateAverageProgress = (goals) => {
        const totalProgress = goals.reduce((sum, goal) => sum + goal.progress, 0);
        return goals.length > 0 ? Math.round(totalProgress / goals.length) : 0;
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
                    {Object.keys(objectives).map((obj, index) => {
                        const averageProgress = calculateAverageProgress(objectives[obj]);

                        return (
                            <Col key={index} className="centerTreeCol" onClick={() => handleObjClick(obj)}>
                                <h1 className="titleObj"> {obj} </h1>
                                <HorizontalProgressBar progress={averageProgress} barColor="#5904ff" backgroundColor="#ddd" />
                                <div className="line"></div>
                                {objectives[obj].map((goal, idx) => (
                                    <Row key={idx} className="centerTreeRow">
                                        <Col style={{width: "70%"}}>
                                            <h3 className="subtitleObj"> {goal.title} </h3>
                                        </Col>
                                        <Col className="centeredcont">
                                            <CircularProgressBar
                                                progress={goal.progress}
                                                circleColor={"none"}
                                                percentageColor={"rgba(99,94,224,0.94)"}
                                            />
                                        </Col>
                                    </Row>
                                ))}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}

export default OkrProgress;

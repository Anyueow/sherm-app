import React from 'react';
import './Happy.css'; // Assuming you have a CSS file named Happy.css

const Happy = () => {
    return (
        <div className="container">
            <div className="content">
                <img
                    src="https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif" // Direct link to the GIF
                    alt="Dancing Kermit"
                    className="image"
                />
                <p className="text">Affirmative Anyu :)</p>
            </div>
        </div>
    );
};

export default Happy;

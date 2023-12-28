import React from 'react';
import "./Happy.css";
const Sad = () => {
    return (
        <div className="container"
             style={{backgroundColor:"#ea3a3a"}}>
            <div className="content">
                <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTF1dThwZ2h0YzU3NHRsbmk4dmJ5dXdhOG01NGx2bjAxaHprajhlZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qv7WFppXtkqkM/giphy.gif" // Direct link to the GIF
                    alt="Dancing Kermit"
                    className="image"
                />
                <p className="text"> Mean Girl Anyu #.# </p>
            </div>
        </div>
    );
};

export default Sad;

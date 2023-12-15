import React, { useState } from 'react';
import DoableCreator from './DoableCreator';

const DoableList = () => {
    const [doables, setDoables] = useState([]);

    const addDoable = (newDoable) => {
        setDoables([...doables, newDoable]);
    };

    return (
        <div>
            <DoableCreator addDoable={addDoable} />
            <ul>
                {doables.map((doable, index) => (
                    <li key={index}>{JSON.stringify(doable)}</li>
                ))}
            </ul>
        </div>
    );
};

export default DoableList;

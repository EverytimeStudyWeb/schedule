import React from 'react';

export default function Time({ onHighlight, subject, times }) {
    const handleClick = (time) => {
        const [day, range] = time.split(' - ');
        const [start, end] = range.split('~').map(t => parseInt(t));
        onHighlight(day, start, end, subject);
    };

    return (
        <div>
            <h2>{subject}</h2>
            <ul>
                {times.map((time, index) => (
                    <li key={index}>
                        <button onClick={() => handleClick(time)}>{time}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

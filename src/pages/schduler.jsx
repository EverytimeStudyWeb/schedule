import { useState } from 'react';
import './scheduler.css';
import PlusBtn from '../componenets/plus';

export default function Scheduler() {
    const numbers = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8];
    const headers = ["월", "화", "수", "목", "금"];
    const [highlightedCells, setHighlightedCells] = useState([]);
    const [showPlus, setShowPlus] = useState(false);

    const subjectColors = {
        '거시경제학': 'rgb(136, 136, 209)',
        '미시경제학': 'rgb(209, 136, 136)',
        '노동경제학': 'rgb(136, 209, 136)',
        '환경경제학': 'rgb(209, 209, 136)',
        '게임이론과응용': 'rgb(209, 136, 209)'
    };

    const handleHighlight = (day, start, end, subject) => {
        const colIndex = headers.indexOf(day);
        const newCells = [];
        for (let hour = start; hour <= end; hour++) {
            const rowIndex = numbers.indexOf(hour);
            if (rowIndex !== -1) {
                const cellIndex = highlightedCells.findIndex(
                    ({ colIndex: col, rowIndex: row }) => col === colIndex && row === rowIndex
                );
                if (cellIndex !== -1) {
                    highlightedCells.splice(cellIndex, 1);
                } else {
                    newCells.push({ colIndex, rowIndex, subject });
                }
            }
        }
        setHighlightedCells([...highlightedCells, ...newCells]);
    };

    const handlePlusClick = () => {
        setShowPlus(!showPlus);
    };

    return (
        <div className='table-container'>
            <div className='top-letter'>
                <div>
                    <h3>2024년 2학기</h3>
                    <h1>시간표1</h1>
                </div>
                <button className='plus-btn' onClick={handlePlusClick}>+</button>
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {headers.map((header, index) => (
                            <th key={index}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {numbers.map((number, rowIndex) => (
                        <tr key={number}>
                            <td>{number}</td>
                            {headers.map((header, colIndex) => {
                                const cell = highlightedCells.find(
                                    ({ colIndex: col, rowIndex: row }) => col === colIndex && row === rowIndex
                                );
                                const isFirstCell = cell && rowIndex === highlightedCells.filter(c => c.colIndex === colIndex).map(c => c.rowIndex).sort((a, b) => a - b)[0];
                                return (
                                    <td
                                        key={colIndex}
                                        className={cell ? 'highlight' : ''}
                                        style={cell ? { backgroundColor: subjectColors[cell.subject] } : {}}
                                    >
                                        {cell && isFirstCell ? cell.subject : ''}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPlus && <PlusBtn onHighlight={handleHighlight} />}
        </div>
    );
}

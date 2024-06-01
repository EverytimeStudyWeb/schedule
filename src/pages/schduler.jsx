import './scheduler.css';

export default function Scheduler({ highlightedCells, onPlusClick }) {
    const numbers = [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const headers = ["월", "화", "수", "목", "금"];
    const scheduleData = Array.from({ length: numbers.length }, () => Array(5).fill(''));

    highlightedCells.forEach(({ day, start, end }) => {
        const colIndex = headers.indexOf(day);
        const rowIndex = start;
        scheduleData[rowIndex][colIndex] = '거시경제학(곽철용)';
    });

    highlightedCells.forEach(({ day, start, end }) => {
        const colIndex = headers.indexOf(day);
        const rowIndex = start;
        scheduleData[rowIndex][colIndex] = '미시경제학(제니퍼)';
    });

    return (
        <div className='table-container'>
            <div className='top-letter'>
                <div>
                    <h3>2024년 2학기</h3>
                    <h1>시간표1</h1>
                </div>
                <button className='plus-btn' onClick={onPlusClick}>+</button>
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
                            {scheduleData[rowIndex].map((cell, colIndex) => {
                                const isHighlighted = highlightedCells.some(
                                    ({ day, start, end }) => colIndex === headers.indexOf(day) && rowIndex >= start && rowIndex <= end
                                );

                                return (
                                    <td
                                        key={colIndex}
                                        className={isHighlighted ? 'highlight' : ''}
                                    >
                                        {cell}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

import { useState } from 'react';
import PlusBtn from '../componenets/plus'; // 경로 수정
import './scheduler.css';

export default function Scheduler(props) {
    const [plusBtnShow, setPlusBtnShow] = useState(false);

    const numbers = [
        ...Array.from({ length: 4 }, (_, i) => i + 9), // [9, 10, 11, 12]
        ...Array.from({ length: 10 }, (_, i) => i + 1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ];

    const scheduleData = Array.from({ length: numbers.length }, () => Array(5).fill(''));

    return (
        <div className='table-container'>
            <div className='top-letter'>
                 <h3>2024년 2학기</h3>
                 <h1>시간표1</h1>
            </div>
            <button className='plus-btn' onClick={() => setPlusBtnShow(true)}>+</button>
           
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                    </tr>
                </thead>
                <tbody>
                    {numbers.map((number, rowIndex) => (
                        <tr key={number}>
                            <td>{number}</td>
                            {scheduleData[rowIndex].map((cell, colIndex) => (
                                <td key={colIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {plusBtnShow && <PlusBtn />}
        </div>
    );
}

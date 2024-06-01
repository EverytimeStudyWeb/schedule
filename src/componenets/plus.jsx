import { useState } from 'react';
import './plus.css';
import Time from './time';

export default function PlusBtn({ onTimeClick }) {
    const [showTime, setShowTime] = useState(false);
    const [showMicroeconomicsTime, setShowMicroeconomicsTime] = useState(false);
    let [subject, setSubject] = useState('')

    const handleTimeClick = (subject) => {
        if (subject === '거시경제학') {
            console.log('거시경제')
            setSubject('거시경제학')
            setShowTime(true);
            setShowMicroeconomicsTime(false);
        } else if (subject === '미시경제학') {
            console.log('미시경제')
            setSubject('미시경제학')
            setShowTime(false);
            setShowMicroeconomicsTime(true);
        }
        onTimeClick();
    };

    return (
        <div className='plus-container'>
            <button onClick={() => handleTimeClick('거시경제학')}>
                <h3><nav className='required'>필수</nav> - 거시경제학 (곽철용)</h3>
            </button>
            <button onClick={() => handleTimeClick('미시경제학')}>
                <h3><nav className='required'>필수</nav> - 미시경제학 (제니퍼)</h3>
            </button>
            <br />
            {showTime && <Time subject={subject}/>}
            
        </div>
    );
}

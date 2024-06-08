import { useState } from 'react';
import './plus.css';
import Time from './time';

export default function PlusBtn({ onHighlight }) {
    const [showTime, setShowTime] = useState(false);
    const [subject, setSubject] = useState('');
    const [times, setTimes] = useState([]);

    const handleSubjectClick = (subject, times) => {
        setSubject(subject);
        setTimes(times);
        setShowTime(true);
    };


    return (
        <div className='plus-container'>
            <button onClick={() => handleSubjectClick('거시경제학', ['월 - 3~5시', '화 - 1~3시', '목 - 2~4시'])}>
                <h3><nav className='required'>필수</nav> - 거시경제학 (곽철용)</h3>
            </button>
            <button onClick={() => handleSubjectClick('미시경제학', ['월 - 1~3시', '수 - 9~11시', '목 - 9~11시'])}>
                <h3><nav className='required'>필수</nav> - 미시경제학 (제니퍼)</h3>
            </button>
            <br />
            <button onClick={() => handleSubjectClick('노동경제학', ['수 - 2~3시', '목 - 4~5시', '금 - 10~11시'])}>
                <h3><nav className='elective'>선택</nav> - 노동경제학 (김유신)</h3>
            </button>
            <button onClick={() => handleSubjectClick('환경경제학', ['목 - 11~12시', '금 - 1~2시', '화 - 9~10시'])}>
                <h3><nav className='elective'>선택</nav> - 환경경제학 (이순신)</h3>
            </button>
            <button onClick={() => handleSubjectClick('게임이론과응용', ['금 - 4~6시', '목 - 6~8시', '수 - 4~6시'])}>
                <h3><nav className='elective'>선택</nav> - 게임이론과응용 (신사임당)</h3>
            </button>
            {showTime && <Time onHighlight={onHighlight} subject={subject} times={times} />}
        </div>
    );
}

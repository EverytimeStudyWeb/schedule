import './time.css';

export default function Time({ onHighlight, subject }) {
    
    return (
        
        <div className='time-container'>
            <h3>aa{subject}</h3>
            <button onClick={() => onHighlight('월', 2, 4)}><p>월 - 11~1시</p></button>
            <button onClick={() => onHighlight('수', 0, 2)}><p>수 - 9~11시</p></button>
            <button onClick={() => onHighlight('목', 6, 8)}><p>목 - 3~5시</p></button>
        </div>
    );
}


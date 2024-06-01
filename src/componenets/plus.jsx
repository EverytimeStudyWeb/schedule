import { useState } from 'react'
import './plus.css'
import Time from './time'

export default function PlusBtn(props){
    let [showTime, setShowTime] = useState(false)
    

    return(
        <div className='plus-container'>
            <button onClick={()=>{setShowTime(true)}}><h3><nav className='required'>필수</nav> - 거시경제학 (곽철용) </h3></button>
            <button><h3><nav className='required'>필수</nav> - 미시경제학 (제니퍼)</h3></button>
            <br></br>
            <button><h3><nav className='elective'>선택</nav> - 노동경제학 (김유신)</h3></button>
            <button><h3><nav className='elective'>선택</nav> - 환경경제학 (이순신)</h3></button>
            <button><h3><nav className='elective'>선택</nav> - 게임이론과응용 (신사임당)</h3></button>

            {showTime && <Time />}
        </div>
    )
}
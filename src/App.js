import { useState } from 'react';
import Scheduler from './pages/schduler';
import Time from './componenets/time';
import PlusBtn from './componenets/plus';

function App() {
  const [highlightedCells, setHighlightedCells] = useState([]);
  const [showPlus, setShowPlus] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleHighlight = (day, start, end) => {
      setHighlightedCells([...highlightedCells, { day, start, end }]);
  };

  const handlePlusClick = () => {
      setShowPlus(true);
  };

  const handleTimeClick = () => {
      setShowTime(true);
  };

  return (
      <div>
          <Scheduler highlightedCells={highlightedCells} onPlusClick={handlePlusClick} />
          {showPlus && <PlusBtn onTimeClick={handleTimeClick} />}
          {showTime && <Time onHighlight={handleHighlight} />}
      </div>
  );
}

export default App;

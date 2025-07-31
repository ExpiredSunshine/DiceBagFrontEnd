import './RollHistory.css';
import trashImage from '../../../assets/images/Trash.png';

function RollHistory() {
  return (
    <div className="roll_history__section">
      <div className="roll_history__header">
        <img src={trashImage} alt="clear history" className="history_trash" />
        <h2 className="roll_history__title">Roll History</h2>
      </div>
      <div className="roll_history__entries">
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:45 PM</div>
          <div className="roll_history__details">2D6: 3, 5 (Total: 8)</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:42 PM</div>
          <div className="roll_history__details">1D20: 17</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:38 PM</div>
          <div className="roll_history__details">3D4: 2, 4, 1 (Total: 7)</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:35 PM</div>
          <div className="roll_history__details">1D12: 9</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:30 PM</div>
          <div className="roll_history__details">2D10: 7, 3 (Total: 10)</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:25 PM</div>
          <div className="roll_history__details">1D8: 6</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:20 PM</div>
          <div className="roll_history__details">1D100: 73</div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
        <div className="roll_history__entry">
          <div className="roll_history__timestamp">2:15 PM</div>
          <div className="roll_history__details">
            4D6: 5, 2, 6, 1 (Total: 14)
          </div>
        </div>
      </div>
    </div>
  );
}

export default RollHistory;

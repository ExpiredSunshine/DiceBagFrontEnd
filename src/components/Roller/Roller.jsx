import './Roller.css';

function Roller() {
  return (
    <div className="main">
      <div className="dice_card__section">
        <div className="dice_cards_container">
          <div className="dice_card">
            <h3 className="dice_title">1D4</h3>
          </div>
          <div className="dice_card">
            <h3 className="dice_title">1D6</h3>
          </div>
          <div className="dice_card">
            <h3 className="dice_title">1D8</h3>
          </div>
          <div className="dice_card">
            <h3 className="dice_title">1D10</h3>
          </div>
          <div className="dice_card">
            <h3 className="dice_title">1D12</h3>
          </div>
          <div className="dice_card">
            <h3 className="dice_title">1D20</h3>
          </div>
          <div className="dice_card">
            <h3 className="dice_title">1D100</h3>
          </div>
        </div>
        <button className="roll_button">roll all</button>
      </div>
    </div>
  );
}

export default Roller;

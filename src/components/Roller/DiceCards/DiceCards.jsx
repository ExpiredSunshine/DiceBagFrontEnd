import './DiceCards.css';
import d4Image from '../../../assets/images/d4.png';
import d6Image from '../../../assets/images/d6.png';
import d8Image from '../../../assets/images/d8.png';
import d10Image from '../../../assets/images/d10.png';
import d12Image from '../../../assets/images/d12.png';
import d20Image from '../../../assets/images/d20.png';
import d100Image from '../../../assets/images/d100.png';
import arrowUp from '../../../assets/images/arrow_up.png';
import arrowDown from '../../../assets/images/arrow_down.png';
import trashImage from '../../../assets/images/Trash.png';

function DiceCards() {
  return (
    <div className="dice_card__section">
      <div className="dice_cards_container">
        <div className="dice_card">
          <div className="dice_image">
            <img src={d4Image} alt="D4 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D4</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
        <div className="dice_card">
          <div className="dice_image">
            <img src={d6Image} alt="D6 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D6</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
        <div className="dice_card">
          <div className="dice_image">
            <img src={d8Image} alt="D8 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D8</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
        <div className="dice_card">
          <div className="dice_image">
            <img src={d10Image} alt="D10 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D10</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
        <div className="dice_card">
          <div className="dice_image">
            <img src={d12Image} alt="D12 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D12</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
        <div className="dice_card">
          <div className="dice_image">
            <img src={d20Image} alt="D20 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D20</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
        <div className="dice_card">
          <div className="dice_image">
            <img src={d100Image} alt="D100 dice" />
          </div>
          <div className="dice_label">
            <div className="dice_card__arrows">
              <img src={arrowUp} alt="arrow up" className="up_arrow" />
              <img src={arrowDown} alt="arrow down" className="down_arrow" />
            </div>
            <h3 className="dice_title">1D100</h3>
            <img src={trashImage} alt="delete" className="trash_icon" />
          </div>
        </div>
      </div>
      <button className="roll_button">roll all</button>
    </div>
  );
}

export default DiceCards;

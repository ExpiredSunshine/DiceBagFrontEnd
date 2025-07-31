import './Roller.css';
import d4Image from '../../assets/images/d4.png';
import d6Image from '../../assets/images/d6.png';
import d8Image from '../../assets/images/d8.png';
import d10Image from '../../assets/images/d10.png';
import d12Image from '../../assets/images/d12.png';
import d20Image from '../../assets/images/d20.png';
import d100Image from '../../assets/images/d100.png';
import arrowUp from '../../assets/images/arrow_up.png';
import arrowDown from '../../assets/images/arrow_down.png';
import trashImage from '../../assets/images/Trash.png';

function Roller() {
  return (
    <div className="main">
      <div className="roller_container">
        <div className="dice_card__section">
          <div className="dice_cards_container">
            <div className="dice_card">
              <div className="dice_image">
                <img src={d4Image} alt="D4 dice" />
              </div>
              <div className="dice_label">
                <div className="dice_card__arrows">
                  <img src={arrowUp} alt="arrow up" className="up_arrow" />
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
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
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
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
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
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
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
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
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
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
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
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
                  <img
                    src={arrowDown}
                    alt="arrow down"
                    className="down_arrow"
                  />
                </div>
                <h3 className="dice_title">1D100</h3>
                <img src={trashImage} alt="delete" className="trash_icon" />
              </div>
            </div>
          </div>
          <button className="roll_button">roll all</button>
        </div>

        <div className="roll_history__section">
          <div className="roll_history__header">
            <img
              src={trashImage}
              alt="clear history"
              className="history_trash"
            />
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
              <div className="roll_history__details">
                3D4: 2, 4, 1 (Total: 7)
              </div>
            </div>
            <div className="roll_history__entry">
              <div className="roll_history__timestamp">2:35 PM</div>
              <div className="roll_history__details">1D12: 9</div>
            </div>
            <div className="roll_history__entry">
              <div className="roll_history__timestamp">2:30 PM</div>
              <div className="roll_history__details">
                2D10: 7, 3 (Total: 10)
              </div>
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
            <div className="roll_history__entry">
              <div className="roll_history__timestamp">2:15 PM</div>
              <div className="roll_history__details">
                4D6: 5, 2, 6, 1 (Total: 14)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roller;

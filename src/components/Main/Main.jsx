import './Main.css';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleTryClick = () => {
    navigate('/roller');
  };

  return (
    <main className="main">
      <p className="main__text">
        According to RANDOM.ORG, “most random numbers used in computer programs
        are pseudo-random,” which is good enough for many applications but
        insufficient for tasks demanding true randomness—such as simulating dice
        rolls. Dice Bag solves this problem by leveraging RANDOM.ORG’s number
        generation API, which uses atmospheric noise to produce genuinely random
        numbers. With Dice Bag, you can trust that your dice rolls are as
        authentically random as possible. Learn more about how it works at{' '}
        <a
          href="https://www.random.org"
          target="_blank"
          rel="noopener noreferrer"
          className="main__link"
        >
          random.org
        </a>
        .
      </p>
      <button className="main__button" onClick={handleTryClick}>
        try for free
      </button>
    </main>
  );
}

export default Main;

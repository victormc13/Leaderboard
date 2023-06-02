import './style.css';
import { refreshScores, submitScore } from './modules/fetchingData.js';
// import newGame from './modules/newGame';

// newGame();

const refreshButton = document.querySelector('.refresh-btn');
refreshButton.addEventListener('click', refreshScores);

const submitButton = document.querySelector('.form');
submitButton.addEventListener('submit', async (e) => {
  e.preventDefault();
  await submitScore();
  refreshScores();
});

window.onload = refreshScores;

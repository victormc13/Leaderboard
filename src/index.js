import './style.css';
import { refreshScores, submitScore } from './modules/fetchingData.js';

const refreshButton = document.querySelector('.refresh-btn');
refreshButton.addEventListener('click', async () => {
  await refreshScores();
});

const submitButton = document.querySelector('.form');
submitButton.addEventListener('submit', async (e) => {
  e.preventDefault();
  await submitScore();
  document.getElementById('form-name').value = '';
  document.getElementById('form-score').value = '';
  refreshScores();
});

window.onload = refreshScores;

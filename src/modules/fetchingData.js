const refreshScores = async () => {
  const gameId = 'rwKNjfIvc5tJgiRyxt32';
  const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const scores = data.result;

    const displayScore = () => {
      const scoreList = document.querySelector('.score-list');

      // Clear previous scores
      scoreList.innerHTML = '';

      // Add new scores to the score list
      scores.forEach((score) => {
        const li = document.createElement('li');
        li.classList.add('flex-row');
        const span = document.createElement('span');
        li.textContent = `${score.user}: `;
        span.textContent = `${score.score}`;
        li.appendChild(span);
        scoreList.appendChild(li);
      });
    };
    displayScore();
  } catch (error) {
    throw new Error('Error fetching scores', error);
  }
};

const submitScore = async () => {
  const gameId = 'rwKNjfIvc5tJgiRyxt32';
  const user = document.getElementById('form-name').value;
  const score = document.getElementById('form-score').value;

  const apiUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user, score }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to send the score');
  }
};

export { refreshScores, submitScore };

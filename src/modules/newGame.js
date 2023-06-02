const newGame = async () => {
  const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const gameName = 'Need For Sleep';

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: gameName }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    const gameId = data.result.split(': ')[1];
    return gameId; // to see the ID received, you should use the console.log below
    // console.log(gameName, 'game created with ID:', gameId);
  } catch (error) {
    throw new Error('Failed to cread a new game');
  }
};

export default newGame;

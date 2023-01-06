import pullScore from './pull.js';

const postScore = async (e) => {
  e.preventDefault();

  const name = document.querySelector('#user-name');
  const score = document.querySelector('#user-score');

  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/gameId777/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    },
  );

  name.value = '';
  score.value = '';
  pullScore();
};

export default postScore;

const display = (data) => {
  const Wrapper = document.querySelector('.score-wrap');

  Wrapper.innerHTML = '';

  data.forEach((scoreList) => {
    const { user, score } = scoreList;

    const tr = document.createElement('tr');
    Wrapper.appendChild(tr);

    const td = document.createElement('td');
    td.innerHTML = `${user}`;
    td.classList.add('.td');
    tr.appendChild(td);

    const userScore = document.createElement('td');
    userScore.innerHTML = `${score}`;
    userScore.classList.add('.td');
    tr.appendChild(userScore);
  });
};

export default display;

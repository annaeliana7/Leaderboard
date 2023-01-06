import './style.css';
import pullScore from './module/pull.js';
import postScore from './module/post.js';

const form = document.querySelector('.submit-btn');
const refresh = document.querySelector('.btn-refresh');

form.addEventListener('click', postScore);
refresh.addEventListener('click', pullScore);
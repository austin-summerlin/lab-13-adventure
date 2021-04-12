import { renderUserInfo } from '../userinfo-utils.js'
renderUserInfo();

const restartGame = document.getElementById('startover');


restartGame.addEventListener('click', () => {
    window.location = '../index.html';
});


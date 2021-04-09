import quests from '../data.js';
import { areQuestsCompleted } from '../local-storage-utils.js';


// renderUserInfo();

const user = JSON.parse(localStorage.getItem('USER'));

const dead = user.hp <= 0;

let completedAllQuests = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

if (dead) {
    window.location = '../results/death.html';
}

if (areQuestsCompleted()) {
    window.location = '../results'
}

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;

    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);

}

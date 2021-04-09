import quests from '../data.js';
const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let completedAllQuests = true;

for (let quest of quests) {
    if (!user.completed[quest.id]) {
        completedAllQuests = false;
    }
}

if (user.hp <= 0 || completedAllQuests) {
    window.location = '../results';
}

const section = document.querySelector('section');

for (let quest of quests) {
    const anchorTag = document.createElement('a');

    anchorTag.textContent = quest.title;

    anchorTag.href = `../quest/?id=${quest.id}`;

    section.append(anchorTag);

}

import { findById } from '../utils.js';
import quests from '../data.js';
import { getUser, updateUserChoice } from '../local-storage-utils.js';

const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const image = document.createElement('img');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const resultsSpan = document.querySelector('#results-span');
const backToMap = document.querySelector('#back-to-map');

image.src = `../assets/quests/${quest.image}`;

h2.textContent = quest.title;
p.textContent = quest.description;

const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(span, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose';

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);
    updateUserChoice(questId, choice);

    resultsSpan.textContent = choice.result;
    user.completed[questId] = true;

    alert(JSON.stringify(getUser(), true, 2));

    window.location = '../map';
});

backToMap.addEventListener('click', () => {
    window.location = '../map/index.html';
})

section.append(h2, image, form, p);
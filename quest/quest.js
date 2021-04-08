import { findById } from '../utils.js';
import { quests } from '../data.js';
import { updateUserChoice } from '../local-storage-utils.js';

const section = document.querySelector('section');
const params = new URLSearchParams(window.location.search);

const questId = params.get('id');
const quest = findById(quests, questId);

const image = document.createElement('img');
const h2 = document.createElement('h2');

image.src = `../assets/quests/${quest.image}`;

h2.textContent = quest.title;

const form = docment.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'choice';
    radio.value = choice.id;
    label.append(choice.description, radio);

    form.append(label);
}

const button = document.createElement('button');
button.textContent = 'Choose';

form.append(button);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new formData(form);
    const choiceId = formData.get('choice');

    const choice = findById(quest.choices, choiceId);
    updateUserChoice(questId, choice);

    window.location = '../map';
});

section.append(h2, image, form);
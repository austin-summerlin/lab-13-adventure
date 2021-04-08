import { setUser } from './local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);

    const name = data.get('name');

    const user = {
        hp: 35,
        ammo: 12,
        name: name,
        completed: {}
    };

    setUser(user);

    window.location = './map';
});
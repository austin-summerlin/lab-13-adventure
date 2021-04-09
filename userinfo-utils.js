import { getUser } from './local-storage-utils.js';

export function renderUserInfo() {
    const h1 = document.getElementById("user-info");
    const user = getUser();

    h1.textContent = `HP: ${user.hp} Ammo: ${user.ammo}`;

    h1.append();


}
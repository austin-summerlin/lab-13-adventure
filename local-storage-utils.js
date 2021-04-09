import quests from './data.js';

const USER = 'USER';

export function getUser() {
    const user = localStorage.getItem(USER);

    if (!user) return {};

    return JSON.parse(user);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function updateUserChoice(questId, choice) {
    const user = getUser();

    user.hp += choice.hp;

    user.ammo += choice.ammo;

    user.completed[questId] = true;

    setUser(user);
}

export function areQuestsCompleted() {
    const user = getUser();

    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}
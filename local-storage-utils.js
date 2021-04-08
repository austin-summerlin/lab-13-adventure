const USER = 'USER';

export function getUser() {
    const user = localstorage.getItem(USER);

    if (!user) return {};

    return JSON.parse(user);
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringUser);
}

export function updateUserChoice(questId, choice) {
    const user = getUser();

    user.hp += choice.hp;

    user.ammo += choice.ammo;

    user.completed[questId] = true;

    setUser(user);
}
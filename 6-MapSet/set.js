/*function getAdmins(map) {
    let admins = [];

    for ([key, value] of map) {
        if ( value === 'Admin') {
            admins.push(key);

        }
    }
    return admins;

}

const users = new Map();

users.set('Stepany', 'Admin');
users.set('Diane', 'User');
users.set('Diego', 'Admin');
users.set('Dio', 'Sudo');

console.log(getAdmins(users)); */


// atividade de
const myArray = [50, 50, 40, 50, 365, 2525, 365, 2];

function valueUnicos(arr) {
    const mySet = new Set(arr);

    return[...mySet];
}

console.log(valueUnicos(myArray))
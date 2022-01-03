const getAdmins = (map) => {
    let admins = [];

    for ([key, value] of map) {
         if(value === 'ADMIN') {
             admins.push(key);
        }
    }

    return admins;
};

const users = new Map();

users.set('Diego', 'ADMIN');
users.set('DIO', 'USER');
users.set('ABACAXI', 'USER');
users.set('Diane', 'ADMIN');
users.set('stepany', 'SUDO');

console.log(getAdmins(users));
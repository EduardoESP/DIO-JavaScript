function getAdmins(map){
    let admins = [];
for([key, value] of map){
    if(value === 'Admin'){
        admins.push(key);
    }
}
return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Eduardo','Admin');
usuarios.set('Monique','User');
usuarios.set('Luana','Admin');

console.log(getAdmins(usuarios));
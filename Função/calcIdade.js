function calcIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} 
    anos de idade. `;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,

}

const pessoa2 = {
    nome: 'Carla' ,
    idade: 26,

}

const animal1 = {
    nome: 'Fiona',
    idade: 5,

}

const animal2 = {
    nome: 'Joana' ,
    idade: 9,

}

console.log(calcIdade.call(pessoa2, 30));
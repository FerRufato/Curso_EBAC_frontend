
function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    
    this.emitirSom = function() {
        console.log(`${this.nome}, ${this.idade}`);
    };
}


function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);  
    this.raca = raca;


    this.latir = function() {
        console.log(`${this.nome}, ${this.idade} anos e raça ${this.raca}, está latindo.`);
    };
}

function Gato(nome, idade, cor) {
    Animal.call(this, nome, idade); 
    this.cor = cor;


    this.miar = function() {
        console.log(`${this.nome}, de ${this.idade} anos e cor ${this.cor}, está miando.`);
    };
}

const rex = new Cachorro('Rex', 5, 'Labrador');
const mimi = new Gato('Mimi', 3, 'Branco');
const luna = new Gato('Luna', 2, 'Preto'); 



rex.latir();     

mimi.miar();      

luna.miar();      

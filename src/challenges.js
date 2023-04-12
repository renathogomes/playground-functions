// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => parametro1 && parametro2 ? true : false;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (sentence) => {
  return sentence.split(' ');
};

// Desafio 3 - Crie a função concatName

const concatName = (parametro) => {

  let primeiroNome = [...parametro].shift();
  let ultimoNome = [...parametro].pop();

  return `${ultimoNome}, ${primeiroNome}`;
};

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  return ((wins * 3) + (ties * 1));
};

// Desafio 5 - Crie a função highestCount

const highestCount = (parametro) => {
  let maiorNumero = Math.max(...parametro);
  let contaIndex = 0;
  for (let i = 0; i < parametro.length; i += 1) {
    if (parametro[i] === maiorNumero) {
      contaIndex += 1;
    }
  }
  return contaIndex;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => {
  return (base * height) / 2;
};
const calcRectangleArea = (base, height) => {
  return (base * height);
};
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let distanciaCat1 = (mouse - cat1);
  let distanciaCat2 = (mouse - cat2);

  if (distanciaCat1 < 0) {
    distanciaCat1 = distanciaCat1 * (-1);
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 = distanciaCat2 * (-1);
  }

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (parametro) => {
  let arraymodificado = [];
  for (let index = 0; index < parametro.length; index += 1) {
    if ((parametro[index] % 3 === 0) && parametro[index] % 5 !== 0) {
      parametro[index] = 'fizz';
      arraymodificado.push(parametro[index]);
    } else if ((parametro[index] % 5 === 0) && parametro[index] % 3 !== 0) {
      parametro[index] = 'buzz';
      arraymodificado.push(parametro[index]);
    } else if ((parametro[index] % 3 === 0) && (parametro[index] % 5 === 0)) {
      parametro[index] = 'fizzBuzz';
      arraymodificado.push(parametro[index]);
    } else {
      parametro[index] = 'bug!';
      arraymodificado.push(parametro[index]);
    }
  }
  return arraymodificado;
};

// Desafio 9 - Crie a função encode e a função decode
const frase = 'Hello'
const encode = (string) => {
  let novaString = []
  let split = string.split('');
  for (index = 0; index < split.length; index += 1)
    if (split[index] === 'a') {
      novaString.push(1)
    } else if (split[index] === 'e') {
      novaString.push(2)
    } else if (split[index] === 'i') {
      novaString.push(3)
    } else if (split[index] === 'o') {
      novaString.push(4)
    } else if (split[index] === 'u') {
      novaString.push(5)
    } else {
      novaString.push(split[index])
    }
  return novaString.join('')
};

let fraseCodificada = encode(frase)

const decode = (fraseCodificada) => {
  let novaString = []
  let split = fraseCodificada.split('');
  for (index = 0; index < fraseCodificada.length; index += 1)
    if (fraseCodificada[index] === '1') {
      novaString.push('a')
    } else if (fraseCodificada[index] === '2') {
      novaString.push('e')
    } else if (fraseCodificada[index] === '3') {
      novaString.push('i')
    } else if (fraseCodificada[index] === '4') {
      novaString.push('o')
    } else if (fraseCodificada[index] === '5') {
      novaString.push('u')
    } else {
      novaString.push(split[index])
    }
  return novaString.join('')

};

// Desafio 10 - Crie a função techList;

const techList = (arrayTech, stringNome) => {
  let array = [];
  arrayTech.sort()
  for (let index = 0; index < arrayTech.length; index += 1) {
    array.push({
      tech: arrayTech[index],
      name: stringNome
    })
  }
  return array
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'))


// Não modifique essas linhas;

module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};

// Desafio 11 - Crie a função generatePhoneNumber;
/* 
const generatePhoneNumber = (numeros) => {
    numeros.length === 11 ? `(${numeros[0]})`

}

console.log(generatePhoneNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1)) */






















/* const api = [{
  cor: 'branca',
  marca: 'fiat',
  placa: 23,
  objeto2: {
    nome: 'renatho',
    idade: 31
  }
},
{
  cor: 'branca',
  marca: 'fiat',
  placa: 23,
  objeto2: {
    nome: 'renatho',
    idade: 31
  }
},
{
  cor: 'verde',
  marca: 'fiat',
  placa: 23,
  objeto2: {
    nome: 'renatho',
    idade: 31
  }
}
]

console.log(api[1].objeto2.nome = 'affonso')
console.log(api)
 */
/* 
let myObject = {
  name: "John", 
  skillItem1: 4,
  skillItem2: 7,
  skillItem3: 2,
  skillItem4: 1
}

// Updates `skillItem2` to 15
console.log(myObject['skillItem2'] = 15); */
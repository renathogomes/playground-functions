// Desafio 1 - Crie a função compareTrue

const compareTrue = (parametro1, parametro2) => parametro1 && parametro2 ? true : false;

const girafa = 3;
const elefante = 6;
const macaco = null;

compareTrue(girafa, elefante);
compareTrue(macaco, elefante);

// Desafio 2 - Crie a função splitSentence

const splitSentence = (sentence) => {
  return sentence.split(' ')
};

splitSentence('Go Trybe!');

//! Desafio 3 - Crie a função concatName

const listaDeNomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const temRe = ['foguete', 'não', 'tem', 'ré'];
const capitaoMeuCapitao = ['captain', 'my', 'captain']

const selecionaNomeInicial = (qualquercoisa) => {
  return qualquercoisa[0];
}

const selecionaNomeFinal = (qualquercoisa2) => {
  return qualquercoisa2[qualquercoisa2.length - 1]
}

const concatName = (nome) => {
  return `${selecionaNomeInicial(nome)}, ${selecionaNomeFinal(nome)}`
}

concatName(listaDeNomes);
concatName(temRe);
concatName(capitaoMeuCapitao);


// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => {
  return ((wins * 3) + (ties * 1))
}

footballPoints(14, 8);

//! Desafio 5 - Crie a função highestCount

const dados = [9, 1, 2, 3, 9, 5, 7];

const verificaMaiorNumero = (algumArray) => {
  let armazena = 0;
  for (let index = 0; index < algumArray.length; index += 1)
    if (armazena < algumArray[index]) {
      armazena = algumArray[index]
    }
  return armazena
}

const arrayDoMaior = (algumArray) => {
  let arrayDosIndices = [];

  let valor = verificaMaiorNumero(algumArray);

  let index = algumArray.indexOf(valor)

  while (index != -1) {
    arrayDosIndices.push(index)
    index = algumArray.indexOf(valor, index + 1)
  }
  return arrayDosIndices
}

const highestCount = (algumaCoisaLa) => {
  return arrayDoMaior(algumaCoisaLa).length;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => {
  return (base * height) / 2;
}
const calcRectangleArea = (base, height) => {
  return (base * height);
}
const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`
  } else {
    return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`
  }
}


// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  let distanciaCat1 = (mouse - cat1);
  let distanciaCat2 = (mouse - cat2) ;

  if (distanciaCat1 < 0){
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
  if(distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge'
  }
}

console.log(catAndMouse(1, 0, 2))



// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

// Não modifique essas linhas
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

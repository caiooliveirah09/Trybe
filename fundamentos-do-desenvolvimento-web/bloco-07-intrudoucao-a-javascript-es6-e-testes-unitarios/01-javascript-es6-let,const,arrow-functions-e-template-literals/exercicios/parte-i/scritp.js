const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
const elseScope = 'Não devo ser utilizada fora meu escopo (else)';

function testingScopeA(scope) {
  ;
  if (scope === true) {
    console.log(`${ifScope} ótimo, fui utilizada no escopo!`)
  } else {
    console.log(elseScope)
  }
}

const testingScopeB = scope => (scope === true) ? console.log(`${ifScope} ótimo, fui utilizada no escopo!`) : console.log(elseScope);

testingScopeB(true);
testingScopeB(false);

testingScopeA(true);
testingScopeB(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ascendingOrder = numbers => numbers.sort((a, b) => a-b);

console.log(ascendingOrder(oddsAndEvens));
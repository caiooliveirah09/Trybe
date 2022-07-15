# Parte I

Agora você vai fazer alguns exercícios de fixação.

> 🚀 Se liga nesse foguete!
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

1. 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

* Modifique a estrutura da função para que ela seja uma _arrow function_.

* Modifique as concatenações para _template literals_.

* Copie o código abaixo.

```
      function testingScope(escopo) {
        if (escopo === true) {
          var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
          ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
          console.log(ifScope);
        } else {
          var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
          console.log(elseScope);
        }
        console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
      }

      testingScope(true);
```

2. 🚀 Copie o código abaixo e faça uma função que retorne o array _oddsAndEvens_ em ordem crescente.

* Utilize _template literals_ para que a chamada 
```
console.log(<seu código>oddsAndEvens<seu código>); 
```
retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

* **Bônus (opcional):** tente fazer o mesmo exercício utilizando o método[array.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort). Spoiler: É possível realizar uma função que ordene qualquer array de números.

* Copie o código abaixo 

```
      const oddsAndEvens = [13, 3, 4, 10, 7, 2];

      // Seu código aqui.

      console.log(oddsAndEvens); // será necessário alterar essa linha 😉

```


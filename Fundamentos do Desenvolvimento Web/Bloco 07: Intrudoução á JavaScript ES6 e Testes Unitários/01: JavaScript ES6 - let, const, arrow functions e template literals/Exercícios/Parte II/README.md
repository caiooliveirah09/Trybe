# Parte II 

Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre _let_, _const_, _arrow functions_, _template literals_ e _ternary operator_.

1. Crie uma função que receba um número e retorne seu fatorial.

* Na matemática, o fatorial de um número não negativo N, com a notação _N!_, é o produto de todos os inteiros menores ou iguais a _N_ <br>. 
**Exemplo:** 4! = 4 * 3 * 2 * 1 = 24.

* **Bônus (opcional):** tente fazer o mesmo exercício de [forma recursiva](http://www.devfuria.com.br/logica-de-programacao/recursividade-fatorial/). **Spoiler:** É possível resolver com uma linha usando _ternary operator_.

2. Crie uma função que receba uma frase e retorne qual a maior palavra.

* Exemplo:

```
      longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
```

3. 🚀 Crie uma página que contenha:

* Um botão ao qual será associado um event listener;

* Uma variável _clickCount_ no arquivo **JavaScript** que acumule o número de clicks no botão;

* Um campo no **HTML** que vá atualizando a quantidade de clicks no botão conforme a variável _clickCount_ é atualizada.

4. 🚀 Crie um código JavaScript com a seguinte especificação:

**Não se esqueça de usar** _template literals_

* Função 1: Escreva uma função que vai receber uma _string_ como parâmetro. Sua função deverá procurar pela letra _x_ em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova _string_.

**Exemplo**

* String determinada: "Tryber x aqui!"

* Parâmetro: "Bebeto"

* Retorno: "Tryber Bebeto aqui!"

* Um array com escopo global, que é o escopo do arquivo **JS**, nesse caso, contendo cinco strings com suas principais _skills_.

* Função 2: Escreva uma função que vai receber a _string_ retornada da Função 1 como parâmetro. Essa função deve concatenar as _skills_ do array global à _string_ que foi passada para a Função 2 via parâmetro. Você deve ordenar os _skills_ em ordem alfabética. Sua função deve retornar essa nova _string_.

**Exemplo:**

"Tryber x aqui! <br>

Minhas cinco principais habilidades são:

* JavaScript;

* HTML; ...

#goTrybe".
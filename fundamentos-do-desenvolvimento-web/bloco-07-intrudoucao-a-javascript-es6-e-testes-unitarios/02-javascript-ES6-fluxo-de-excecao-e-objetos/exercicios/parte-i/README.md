# Parte I

Lembra da calculadora que fizemos como exemplo anteriormente? Hora de levá-la para um nível mais avançado!

<br>

Copie e cole o código abaixo no seu editor de texto:

```
<!DOCTYPE html>
<html lang='pt-BR'>
<head>
  <meta charset='UTF-8'>
  <meta http-equiv='X-UA-Compatible' content='IE=edge'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Calculadora</title>
</head>
<body>
  <p>Informe dois números para realizar a soma:</p>
  <label for='value1'>Valor 1:</label>
  <input type='text' id='value1'>
  <label for='value2'>Valor 2:</label>
  <input type='text' id='value2'>
  <button id='button'>Somar</button>
  <p id='result'></p>
  <script>
    function sum() {
      const value1 = document.getElementById('value1').value;
      const value2 = document.getElementById('value2').value;
      const result = parseInt(value1) + parseInt(value2);
      document.getElementById('result').innerHTML = `Resultado: ${result}`;
      document.getElementById('value1').value = '';
      document.getElementById('value2').value = '';
    }
    window.onload = () => {
      const button = document.getElementById('button');
      button.addEventListener('click', sum);
    }
  </script>
</body>
</html>
```

Tire um tempinho para entender o código acima:

* A aplicação pede ao usuário que informe dois números para realizar uma soma. Esses números são inseridos através dos _inputs_;

* Ao clicar o botão, a função _sum_ é chamada, capturando o valor escrito nos _inputs_ e realizando a operação. Antes, é necessária a conversão do valor usando o _parseInt_, pois ele chega à função em forma de _string_;

* Ao final, a função _sum_ imprime o valor em um parágrafo e limpa os _inputs_ para que a pessoa usuária possa inserir novos valores.;

Aparentemente está tudo funcionando, mas a aplicação não possui fluxo de exceção. Ou seja, caso ocorra um erro, eles não serão tratados. Que tal resolver isso?

1. 🚀 - Crie um erro personalizado que será chamado se a pessoa usuária digitar apenas um número.

* Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

Utilize o _throw new Error_ e o bloco _try/catch_.

* Imprima o erro no parágrafo com id _result_, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!

* Evite funções que tenham muitas responsabilidades distintas.

2. 🚀 - Agora adicione uma outra exceção, caso a pessoa usuária digite um valor que não seja numérico.

* Você pode fazer essa verificação utilizando a função [isNan()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN).

3. 🚀 - Você se lembrou de limpar os _inputs_ após o clique do botão? Teve que repetir código para isso? Que tal refatorar sua função utilizando o [finally](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_clause)?
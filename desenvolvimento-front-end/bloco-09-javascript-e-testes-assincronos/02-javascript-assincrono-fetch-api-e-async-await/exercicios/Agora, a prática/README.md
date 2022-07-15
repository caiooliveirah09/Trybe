# Agora, a prática

> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

1. Como primeiro exercício, vamos usar a função _fetch_, que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!. Como? Vamos praticar!

* Primeiro, veja o [manual da API do site icanhazdadjoke.com](https://icanhazdadjoke.com/api). Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa _API_:

* Para começar, vamos fazer uma requisição via browser. Visite o site [icanhazdadjoke.com](https://icanhazdadjoke.com/api), e perceba que ele devolve uma página HTML com uma piada aleatória.

* Em seguida, no terminal, vamos fazer a requisição: _curl -H "Accept: text/html" "https://icanhazdadjoke.com/"_. Perceba que o retorno é um HTML idêntico ao de uma requisição via browser com uma piada aleatória.

* Para a próxima requisição, vamos usar o comando: _curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"_. Veja que agora recebemos apenas a piada aleatória em formato texto.

* Por fim, faça a requisição: _curl -H "Accept: application/json" "https://icanhazdadjoke.com/"_. Agora a API retorna um objeto no formato JSON.

Perceba que, dependendo do que passamos na chave _Accept:_ no header, definido por _-H_ no comando, o serviço nos retorna uma resposta diferente.

* Utilize o _HTML_ e o _js_ a seguir como base: (_não se esqueça de utilizar a extensão **Live Server** e inspecionar o console do navegador para ver os logs_)

```
<!-- jokes.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
    <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

* gora vamos tentar fazer as requisições a _API_ usando _fetch_. Essa função recebe dois parâmetros:

1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.

2. Um objeto contendo as especificações da requisição. Para essa API, atribuiremos a esse objeto as chaves _method_ e _headers_

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke();
```

O segundo parâmetro _myObject_ define o tipo de request: _method: 'GET'_ e o formato da resposta _headers: { 'Accept': 'application/json' }_, como visto nas requisições via _curl_.

* A função _fetch_ **é uma Promise** (você não precisa entender o que é uma Promise agora, considere apenas como sendo algo assíncrono) e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas _.then_(em caso de sucesso) e _.catch_(em caso de falha). A requisição _fetch_ retorna um objeto Response. Utilizando _.then_, verifique a estrutura da resposta usando um _console.log_ na _response_ retornada pelo _fetch_.

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();
```
* Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?

Para isso, usamos o método _.json()_ na resposta da API. Esse método converte o conteúdo do _body_ da Response e retorna uma outra Promise, que, quando bem-sucedida, retorna um JSON contendo as informações da piada.

A partir do _fetch_, troque o _console.log()_ anterior pelo método _.json()_ e imprima os dados da requisição.

```
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
```

* Recebemos um objeto, certo? A partir daí, faça a piada aparecer no DOM da sua página!

2. Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.
A documentação para a API que vamos utilizar esta disponível nesse [link](https://docs.coincap.io/).
Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um array com uma listagem das crypto moedas).
Se ficou na dúvida veja a seguir **(spoiler alert!)**

```
url: `https://api.coincap.io/v2/assets`
```

Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: _FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0_, significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

1. Agora que temos a url vamos criar um arquivo (_api.js_, por exemplo) e dentro dele uma função para pegar o _array_ com as moedas.

2. Crie também um arquivo HTML (_index.html_, por exemplo) que deve conter uma tag para listar as crypto moedas.

3. 🚀 Pronto, temos um _array_ com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: _Nome da moeda (símbolo da moeda): valor em dólares_. Exemplo: _Bitcoin (BTC): 46785.06_.

4. 🚀 Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o _array_ das moedas para mostrar apenas as 10 primeiras?

5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).
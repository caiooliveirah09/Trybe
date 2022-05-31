# Para fixar 

Lembre-se: quando definimos uma função, o parâmetro pode ter qualquer nome, porém, ao fazer a **execução/chamada** dessa função, o parâmetro deve ser um valor definido. No nosso caso, vamos utilizar uma função como parâmetro (_callback_).

Vamos ver um exemplo de como esse processo acontece:

```
// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);
```

Vamos ao passo a passo:

* Definimos a função _userFullName_;

* Definimos a função _getUser_

* Definimos que o parâmetro que a nossa _getUser_ vai receber se chama "param".

* Ao *executar* a função _getUser_, passamos a função _userFullName_ como parâmetro.

Ou seja, o parâmetro "param" de dentro da nossa _getUser_ é igual à função _userFullName_. Isso significa que, ao definirmos nossa função, o parâmetro é dinâmico, ele vai assumir o valor que passarmos no momento em que *executarmos* a nossa função.

Tenha tranquilidade e lembre-se sempre: Nada melhor do que a prática. E falando nisso... vamos praticar? ;)

Agora, faça estes exercícios de fixação:

1. Adicione uma _callback_ como parâmetro da função _getUser_.

No código abaixo você tem a função _getUser_, que define um objeto com os dados de uma pessoa. Complete a função _getUser_ de forma que ela receba uma função _callback_ como parâmetro para realizar as operações abaixo:

* Insira o retorno da função _getUser_;

* Complete a chamada da função _getUser_ de modo que o retorno seja: "Hello! My name is Ivan Ivanovich";

* Complete a chamada da função _getUser_ de modo que o retorno seja: "Ivan is Russian".

```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = () => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Insira o retorno da função `getUser`
};

console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
console.log(getUser()); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
```

2. Passe, como parâmetro e como retorno, uma _callback_ para a função _getUser_.

No código abaixo você tem a função _getUser_ modificada, que agora funciona de modo assíncrono e imprime dados de uma pessoa depois de um certo tempo. Complete a função _getUser_ de forma que ela receba uma _callback_ como parâmetro e a retorne para que possa realizar as operações abaixo sobre a pessoa:

* Insira uma _callback_ como parâmetro da função _getUser_;

* Retorne a _callback_ passada como parâmetro na função _getUser_;

```
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = () => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    console.log(user);
  }, delay());
};

getUser(userFullName); // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
getUser(userNationality); // deve imprimir "Ivan is Russian" depois de um certo tempo
```

**Obs.:** Analise o comportamento assíncrono da função _getUser_ ao chamar _getUser(userFullName)_ seguido de _getUser(userNationality)_. Tem hora que o nome da pessoa é impresso antes e tem hora que a nacionalidade da pessoa é impressa antes!
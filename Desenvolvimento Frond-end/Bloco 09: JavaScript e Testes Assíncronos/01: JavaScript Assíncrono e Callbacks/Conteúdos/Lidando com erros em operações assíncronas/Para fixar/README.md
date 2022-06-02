# Para  fixar 

Vamos botar tudo isso em prática com este exercício de fixação:

1. Adicione uma _callback_ e trate o erro retornado.

A função _getCountry_ abaixo tem aproximadamente 50% de chance em obter, com sucesso, um país. Ela utiliza uma _callback_ para poder realizar qualquer operação sobre o país retornado.

* Adicione um segundo parâmetro, que deve ser uma _callback_, na função _getCountry_;

* Retorne essa _callback_ na função _getCountry_ de forma que trate a mensagem de erro.

```
const countryName = ({ name }) => console.log(`Returned country is ${name}`);
const countryCurrency = ({ name, currency }) => console.log(`${name}'s currency is the ${currency}`);

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const printErrorMessage = (error) => console.log(`Error getting country: ${error}`);

const getCountry = (onSuccess) => {
  setTimeout(() => {
    const didOperationSucceed = Math.random() >= 0.5;
    if(didOperationSucceed) {
      const country = {
        name: "Brazil",
        hdi: 0.759,
        currency: "Real",
      };
      onSuccess(country);
    } else {
      const errorMessage = "Country could not be found";
    }
  }, delay());
};

// Deve imprimir "Returned country is Brazil" no sucesso ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryName, printErrorMessage);

// Deve imprimir "Brazil's currency is the Real" no sucesso, ou "Error getting country: Country could not be found" em caso de falha
getCountry(countryCurrency, printErrorMessage);
```

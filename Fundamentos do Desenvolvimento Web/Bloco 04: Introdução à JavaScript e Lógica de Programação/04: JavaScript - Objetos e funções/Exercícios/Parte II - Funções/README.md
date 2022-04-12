# Parte II - Funções

Agora vamos fazer um exercício que vai deixar nítido como funções com responsabilidades bem definidas deixam o código mais bem escrito.

<br>

A manipulação de arrays pode ser complexa em alguns momentos e por isso o JavaScript conta com diversos métodos para a sua manipulação. A documentação é sempre a nossa maior aliada, se você tiver curiosidade de ler mais sobre esses métodos, [clique aqui](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) para acessar a documentação completa. Não se preocupe em entender todos os métodos, eles serão trabalhados cada vez com mais frequência durante o curso e sempre que um método novo for necessário ele será ensinado a você.

<br>

**_Spoiler-alert_**: para os exercícios do dia, os métodos _split_ , _join_ e _reverse_ podem ser muito úteis.

<br>

**1** - Crie uma função que receba uma _string_ e retorne _true_ se for um [palíndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo) , ou _false_ , se não for.

- Exemplo de palíndromo: arara .
- _verificaPalindrome('arara')_ ;
- Retorno esperado: _true_
- _verificaPalindrome('desenvolvimento')_ ;
- Retorno esperado: _false_

**2** - Crie uma função que receba um _array_ de inteiros e retorne o índice do maior valor.
- Array de teste: _[2, 3, 6, 7, 10, 1]_;_ .
- Valor esperado no retorno da função: _4_ .

**3** - Crie uma função que receba um _array_ de inteiros e retorne o índice do menor valor.
- Array de teste: _[2, 4, 6, 7, 10, 0, -3]_; .
- Valor esperado no retorno da função: _6_ .

**4** - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
- Array de teste: _['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];_ .
- Valor esperado no retorno da função: _Fernanda_ .

**5** - Crie uma função que receba um _array_ de inteiros e retorne o inteiro que mais se repete.
- Array de teste: _[2, 3, 2, 5, 8, 2, 3];_ .
- Valor esperado no retorno da função: _2_ .

**6** - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
- Valor de teste: _N = 5_ .
- Valor esperado no retorno da função: 1+2+3+4+5 = _15_ .

**7** - Crie uma função que receba uma _string word_ e outra _string ending_ . Verifique se a _string ending_ é o final da _string word_ . Considere que a _string ending_ sempre será menor que a _string word_ .
- Valor de teste: _'trybe' e 'be'_
- Valor esperado no retorno da função: _true_
- _verificaFimPalavra('trybe', 'be')_ ;
- Retorno esperado: _true_
- _verificaFimPalavra('joaofernando', 'fernan')_ ;
- Retorno esperado: _false_
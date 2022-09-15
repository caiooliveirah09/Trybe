# Para fixar

**A tabela a seguir é um guia de como a classificação indicativa é usada no banco de dados _sakila_. Consulte-a ao fazer os desafios propostos.**

**G** = permitido para todos

**PG** = permitido para crianças menores de 13 anos

**PG-13** = permitido para pessoas com mais de 13 anos

**R** = permitido para pessoas com mais de 17 anos

**NC-17** = permitido apenas para adultos

Entre no banco de dados _sakila_ e siga as instruções (e guarde as queries para conferir posteriormente):

:heavy_check_mark: 1. Precisamos identificar os dados do cliente com o e-mail LEONARD._SCHOFIELD@sakilacustomer.org_. As informações podem ser encontradas na tabela _customer_

**R:** 
```
USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
```

:heavy_check_mark: 2. Precisamos de um relatório dos nomes dos clientes, em _ordem alfabética_, que não estão mais ativos no nosso sistema e pertencem à loja com o **id = 2**, e não inclua o cliente **KENNETH** no resultado. As informações podem ser encontradas na tabela customer

**R:**
```
USE sakila;
SELECT first_name FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;
```

:heavy_check_mark: 3. O setor financeiro quer saber título, descrição, ano de lançamento e valor do custo de substituição (replacement_cost), dos 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares. Em caso de empate, ordene em _ordem alfabética_ pelo título. As informações podem ser encontradas na tabela _film_

**R:**
```
USE sakila;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17' AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;
```

:heavy_check_mark: 4. Quantos clientes estão _ativos_ e na loja _1_? As informações podem ser encontradas na tabela _customer_

**R:**
```
USE sakila;
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE active = 1 AND store_id = 1;
```

:heavy_check_mark: 5. Mostre todos os detalhes dos clientes que *não* estão ativos na loja *1*. As informações podem ser encontradas na tabela *customer*

**R:**
```
USE sakila;
SELECT * FROM customer
WHERE active = 0 AND store_id = 1;
```

:heavy_check_mark: 6. Precisamos descobrir quais são os 50 filmes feitos apenas para adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes. Em caso de empate, ordene em *ordem alfabética* pelo título. As informações podem ser encontradas na tabela *film*

**R:**
```
USE sakila;
SELECT title FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
```

Você vai se deparar também com casos em que você só tem parte de uma informação, ou em que precisa criar *queries* mais dinâmicas. Para esses casos, temos o *LIKE*. Como assim? É o que veremos a seguir.
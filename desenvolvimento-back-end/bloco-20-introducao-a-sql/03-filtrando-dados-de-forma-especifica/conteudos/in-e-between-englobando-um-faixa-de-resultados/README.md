# Para Fixar

:heavy_check_mark: 1. Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: *hicks, crawford, henry, boyd, mason, morales e kennedy*, ordenados por nome em ordem alfabética.

**R:**
```
USE sakila;
SELECT first_name, last_name, email FROM customer
WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
```

:heavy_check_mark: 2. Mostre o e-mail dos clientes com os *address_id 172, 173, 174, 175 e 176*, ordenados em ordem alfabética.

**R:**
```
USE sakila;
SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email;
```

:heavy_check_mark: 3. Descubra quantos pagamentos foram feitos entre *01/05/2005* e *01/08/2005*. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato *ano/mês/dia*, diferente do formato brasileiro, que é *dia/mês/ano*.

**R:**
```
USE sakila;
SELECT COUNT(*) quantidade_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';
```

:heavy_check_mark: 4. Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de *3 a 6*. Os resultados devem ser classificados em filmes com *maior duração* de empréstimo primeiro. Em caso de empate, ordene em *ordem alfabética* pelo título.

**R:**
```
USE sakila;
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;
```

:heavy_check_mark: 5. Monte um relatório que exiba o título e classificação dos *500* primeiros filmes direcionados para as classificações indicativas *G, PG e PG-13*. Os resultados devem estar *ordenados* por título.

**R:**
```
USE sakila;
SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
```

**P.S.** As classificações podem ser verificadas acima, na seção "Alavancando o poder dos principais comparadores lógicos".
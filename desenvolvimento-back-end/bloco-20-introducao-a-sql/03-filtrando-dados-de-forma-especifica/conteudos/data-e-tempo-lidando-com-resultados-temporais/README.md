# Para Fixar

:heavy_check_mark: 1. Quantos pagamentos temos com a data de retorno *2005-05-25*? Há múltiplas maneiras possíveis de encontrar a resposta.

**R:**
```
USE sakila;
SELECT COUNT(*) pagamentos FROM payment
WHERE DATE(payment_date) = '2005-05-25';
```

:heavy_check_mark: 2. Quantos pagamentos foram feitos entre *01/07/2005* e *22/08/2005*?

**R:**
```
USE sakila;
SELECT COUNT(*) pagamentos FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';
```

:heavy_check_mark: 3. Usando a tabela *rental*, extraia data, ano, mês, dia, hora, minuto e segundo dos registros com *rental_id* = 10330. Utilize a coluna *rental_date* para extrair as informações.

**R:**
```
USE sakila;
SELECT DATE(rental_date) AS data,
YEAR(rental_date) AS ano ,
MONTH(rental_date) AS mes,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM rental
WHERE rental_id = 10330;
```

:heavy_check_mark: 4. Monte uma *query* que retorne todos os dados do pagamento feito no dia *28/07/2005* a partir das *22 horas*.

**R:**
```
USE sakila;
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
```

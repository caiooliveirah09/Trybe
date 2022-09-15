# Para fixar

Para consolidar esse conhecimento, brinque com os resultados que serão encontrados usando os comandos acima e tente criar suas próprias condições. Depois de ter praticado um pouco com eles, tente encontrar as seguintes informações:

:heavy_check_mark: 1. Mostre todos os detalhes dos filmes que contêm a palavra *ace* no nome.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE title LIKE '%ace%';
```

:heavy_check_mark: 2. Mostre todos os detalhes dos filmes cujas descrições finalizam com *china*.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE description LIKE '%china';
```

:heavy_check_mark: 3. Mostre todos os detalhes dos dois filmes cujas descrições contêm a palavra *girl* e o título finaliza com a palavra *lord*.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
```

:heavy_check_mark: 4. Mostre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra *gon*.
*lord*.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%';
```

:heavy_check_mark: 5. Mostre o único caso em que, a partir do 4° caractere no título do filme, tem-se a palavra *gon* e a descrição contém a palavra *Documentary*.
*lord*.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
```

:heavy_check_mark: 6. Mostre os dois filmes cujos títulos ou finalizam com *academy* ou iniciam com *mosquito*.
*lord*.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy' OR title LIKE 'mosquito%';
```

:heavy_check_mark: 7. Mostre os seis filmes que contêm as palavras *monkey* e *sumo *em suas descrições.
*lord*.

**R:**
```
USE sakila;
SELECT * FROM film
WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';
```

A seguir, vamos entender como trazer resultados que englobam uma faixa de valores usando os operadores *IN e BETWEEN*.
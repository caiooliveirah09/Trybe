# Bônus

**Exercício 2**: Usando o banco de dados *Scientists* restaurado no dia anterior, realize os exercícios a seguir. Caso ainda não tenha restaurado o banco, utilize o código abaixo para fazê-lo.

```
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  code CHAR(4),
  name CHAR(50) NOT NULL,
  hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  scientist INT NOT NULL,
  project CHAR(4) NOT NULL,
  PRIMARY KEY (scientist, project),
  FOREIGN KEY (scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (project) REFERENCES Projects (code)
);

INSERT INTO Scientists(SSN, name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (code, name, hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (scientist, project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste [link](https://creativecommons.org/licenses/by-sa/3.0/).

:heavy_check_mark: 1. Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

**R:**
```
USE Scientists;
SELECT * FROM Scientists
WHERE name LIKE "%e%";
```

:heavy_check_mark: 2. Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A. Ordene o resultado em ordem alfabética.

**R:**
```
USE Scientists;
SELECT name FROM Projects
WHERE code LIKE "A%" ORDER BY name;
```

:heavy_check_mark: 3. Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3. Ordene o resultado em ordem alfabética.

**R:**
```
USE Scientists;
SELECT code, name FROM Projects
WHERE code LIKE "%3%" ORDER BY name;
```

:heavy_check_mark: 4. Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3, Ast3 ou Che1.

**R:**
```
USE Scientists;
SELECT scientist FROM AssignedTo
WHERE project IN('AeH3', 'Ast3', 'Che1');
```

:heavy_check_mark: 5. Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.

**R:**
```
USE Scientists;
SELECT * FROM Projects
WHERE hours > 500;
```

:heavy_check_mark: 6. Escreva uma query para exibir todas as informações de todos os projetos cujas horas sejam maiores que 250 e menores 800.

**R:**
```
USE Scientists;
SELECT * FROM Projects WHERE hours > 250 AND hours < 800;
-- ou
SELECT * FROM Projects WHERE hours BETWEEN 250 AND 800;
```

:heavy_check_mark: 7. Escreva uma query para exibir o nome e o código de todos os projetos cujo nome NÃO inicie com a letra A.

**R:**
```
USE Scientists;
SELECT code, name FROM Projects
WHERE name NOT LIKE 'A%';
```

:heavy_check_mark: 8. Escreva uma query para exibir o nome de todos os projetos cujo código contenha a letra H.

**R:**
```
USE Scientists;
SELECT name FROM Projects
WHERE code LIKE '%H%';
```

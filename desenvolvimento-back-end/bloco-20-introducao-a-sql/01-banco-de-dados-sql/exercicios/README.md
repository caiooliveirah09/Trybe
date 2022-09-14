# Agora a prática :heavy_check_mark:

Agora vamos abrir o Workbench e fazer uma análise prática do banco de dados _sakila_, que já deve estar instalado, caso você tenha feito a instalação do **MySql** Workbench de forma padrão. Caso o banco _sakila não esteja disponível, volte até a seção Restaurando o banco de dados de prática sakila_ e siga as instruções listadas. Com esse banco disponível na sua instalação do **Workbench**, sua missão agora é tentar finalizar os exercícios a seguir!

[ :heavy_check_mark: ]**Exercício 1:** Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench.

[ :heavy_check_mark: ]**Exercício 2:** Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench.

[ :heavy_check_mark: ]**Exercício 3:** Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: _filme_

Colunas:

* **filme_id** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;

* **descricao** - não permite nulos, tipo texto (varchar(100));

* **ano_lancamento** - não permite nulos, tipo int;

* **nota** - permite nulos, tipo int;

[ :heavy_check_mark: ]**Exercício 4:** Analise a tabela _city_ e encontre a tabela à qual a coluna country_id faz referência.

[ :heavy_check_mark: ]**Exercício 5:** Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela _city_ faz com a tabela _country_?
**R:** N:1

[ :heavy_check_mark: ]**Exercício 6:** Qual tipo de relacionamento a tabela _country_ faz com a tabela _city_?
**R** 1:N

[ :heavy_check_mark: ]**Exercício 7:** Abra tabela por tabela do banco _sakila_ e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
**R** store > staff, country > city, film > language
# Exercícios de fixação :heavy_check_mark:

Então, tendo esses aprendizados em mente, vamos tentar chegar a algumas conclusões utilizando como exemplo a tabela a seguir:

![table1-a6228d5cf09aea61d1e205b18663d256](https://user-images.githubusercontent.com/97924292/190281342-48fda43c-e11b-4e5d-8df2-9a61b48a4cdc.png)
**Conteúdo da tabela address**

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder as seguintes perguntas:

[ :heavy_check_mark: ]1. Quais constraints a coluna address_id poderia ter? Por quê?

**R:** A coluna address_id possui a constraint _Primary Key_ para que exista um número identificador único. Além disso, a _Primary Key_ não permite que ela seja nula.

[ :heavy_check_mark: ]2. A coluna city_id é um número. Consegue identificar que tipo de constraint foi aplicado a ela?

**R:** A coluna city_id é do tipo _Foreign Key_, e nela foi aplicada a constraint _Foreign Key_.

[ :heavy_check_mark: ]3. A coluna address (endereço) possui uma _constraint_. Qual tipo de _constraint_ seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

**R:** A restrição aplicada na coluna address é a restrição _NOT NULL_. Dessa maneira, é interessante que a coluna address sempre esteja preenchida em função de ser uma informação crucial para essa tabela, além de a tabela não fazer sentido sem essa informação preenchida.

Temos aqui uma outra tabela: 

![table2-bc817500d0add9d388501e776cdd26d6](https://user-images.githubusercontent.com/97924292/190281493-49051de5-8933-4279-92ae-f8c72991640f.png)

**Conteúdo da tabela city**

[ :heavy_check_mark: ]1. Que tipo de constraint a coluna city_id possui?

**R:** A coluna cityid possui o tipo _Primary Key.

[ :heavy_check_mark: ]2. Qual é o motivo de a coluna country_id não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?

**R:** Isso acontece porque a coluna country_id é apenas uma referência para a sua tabela original, e o número que é exibido nessa tabela representa uma Foreign Key. Caso você queira ver o nome do país, você deve ir até a tabela na qual o country_id é uma _Primary Key_.

Na tabela a seguir:

![table3-dfbcb99a6654c108ca5f6258e7a3dcd1](https://user-images.githubusercontent.com/97924292/190281548-638fe724-1443-4c37-bba2-98f043d11098.png)

[ :heavy_check_mark: ]1. Qual coluna possui uma **primary key**?

**R:** A coluna film_id possui uma Primary Key.

[ :heavy_check_mark: ]2. Qual coluna possui uma **foreign key**?

**R:** A coluna category_id possui uma Foreign Key.




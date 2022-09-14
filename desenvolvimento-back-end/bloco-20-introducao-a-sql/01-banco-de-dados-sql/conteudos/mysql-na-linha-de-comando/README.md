# Vamos treinar!

Usando os comandos que você acabou de aprender, resolva os seguintes desafios:

[ :heavy_check_mark: ]1. Entre no banco de dados mysql.

**R:**
```
mysql -u root -p
```

[ :heavy_check_mark: ]2. Visualize todas as tabelas desse banco.

**R:**
```
USE nome_do_banco_de_dados_aqui;
SHOW TABLES;
```

[ :heavy_check_mark: ]3. Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.

**R:**
```
DESCRIBE nome_da_tabela;
```

[ :heavy_check_mark: ]4. Crie um novo banco de dados com o seu nome e depois entre nele!

**R:**
```
CREATE DATABASE seu_nome_aqui;
USE seu_nome_aqui;
```

Pronto! Agora você pode executar comandos **SQL** dentro do seu banco de dados sem usar a interface gráfica, o que pode ser útil em alguns cenários em que você não tem acesso ao **MySQL Workbench.**
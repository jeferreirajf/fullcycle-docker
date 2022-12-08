#NGINX->NODEJS->MYSQL APP

<p>Essa aplicação sobe três serviços: **nginx**, **node-app** e **mysql-server**.</p>

O **nginx** funciona como um proxy reverso na **porta 80** e transferindo
as requisições para a aplicação node que por sua vez ouve a **porta 3000**.

A aplicação **node-app** ao receber uma requisição, gera um nome de pessoa
aleatoriamente e então insere o nome gerado no banco de dados do **mysql-server**.
Além disso, após a inserção do novo dado, a aplicação também exibe a lista
de todos os nomes na tela.

#Aplicação Node
A aplicação node foi implementada utilizando Javascript. Para subir
o server e gerenciar as rotas foi utilizado ExpressJS. Para gerenciar
o banco de dados MySQL foi utilizado o Sequelize.

#Rodando os serviços
Basta ter o `#0066FF**docker**` e o `#0066FF**docker-compose**` instalados e então digitar:
`docker-compose up --build`
Os serviços irão subir na ordem correta e então basta ir ao browser e 
acessar a url:
`localhost:8080`

Para acessar mais do meu conteúdo basta ir em: [DoutorWaka](http://doutorwaka.tech/youtube).
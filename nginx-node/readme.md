<h1>NGINX->NODEJS->MYSQL APP</h1>

<p>Essa aplicação sobe três serviços: <b>nginx</b>, <b>node-app</b> e <b>mysql-server</b>.</p>

<p>O <b>nginx</b> funciona como um proxy reverso na <b>porta 80</b> e transferindo
as requisições para a aplicação node que por sua vez ouve a <b>porta 3000</b>.</p>

A aplicação <b>node-app</b> ao receber uma requisição, gera um nome de pessoa
aleatoriamente e então insere o nome gerado no banco de dados do <b>mysql-server</b>.
Além disso, após a inserção do novo dado, a aplicação também exibe a lista
de todos os nomes na tela.

<h2>Aplicação Node</h2>
A aplicação node foi implementada utilizando Javascript. Para subir
o server e gerenciar as rotas foi utilizado ExpressJS. Para gerenciar
o banco de dados MySQL foi utilizado o Sequelize.

<h2>Rodando os serviços</h2>
Basta ter o <b>`docker`</b> e o <b>`docker-compose`</b> instalados e então digitar:
`docker-compose up --build`
Os serviços irão subir na ordem correta e então basta ir ao browser e 
acessar a url:
<p>`localhost:8080`</p>

Para acessar mais do meu conteúdo basta ir em: [DoutorWaka](http://doutorwaka.tech/youtube).
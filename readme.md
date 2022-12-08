# Desafio Docker Full Cycle

Neste repositório encontram-se os códigos relativos ao desafio do módulo de docker
do curso full cycle.

No desafio, uma aplicação go **go-app** e uma aplicação **nginx-node** foram criadas.

## Aplicação go-app

Esta aplicação encontra-se no diretório **`go-app`** e refere-se a um desafio onde foi
necessário criar um **`hello world`** em **go** e rodar utilizando um **container docker**.

Após isso, foi necessário criar uma **imagem docker** com tamanho em disco 
**menor que 2Mb** e então disponibilizar essa imagem no docker hub. Para mais 
informações, basta acessar o diretório **`go-app`**.

## Aplicação nginx-node

Esta aplicação faz uso do **nginx** como proxy reverso que escuta a **porta 80**. 
Ao acessá-la via browser, o **nginx** redireciona a requisição para uma aplicação
**node**. A aplicação **node** gera um nome aleatório, insere em no **banco de dados**
e então mostra na tela todos os nomes que já foram inseridos. É importante dizer
que a **porta 80** do **nginx** foi remapeada para a **porta 8080** do usuário.

Ademais, o **nginx**, o **node** e o **banco de dados** rodam em _containers_
separados. Além disso, a aplicação também divide as redes. Quer dizer,
o **nginx** compartilha uma rede com a aplicação **node** que por sua vez compartilha
uma rede diferente com o **banco de dados**.

Para mais informações, basta acessar o diretório **`nginx-node`**.

## Quem sou eu

Para acessar mais do meu conteúdo basta ir em: [DoutorWaka](http://doutorwaka.tech/youtube).
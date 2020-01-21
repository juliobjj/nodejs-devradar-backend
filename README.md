# Apresentação

Esta api foi desenvolvida em Node.js com MongoDB. A mesma faz o cadastro do desenvolver pelo nome, tecnologias e a localização atual. Também é possível editar, excluir e listar o desenvolvedor cadastrado. 

A aplicação tem como regra de negócio, encontrar desenvolvedores próximos com a tecnologia desejada. O sistema é dividido em 3 partes: API, Web e mobile. Para o funcionamento correto deve-se ter instalado os três módulos.

API - Responsável por gerenciar os dados enviados pelo [front-end](https://github.com/juliobjj/reactjs-devradar-frontend).

Web - Toda a parte visível ao usuário do sistema.

Mobile - Filtra os desenvolvedores cadastrado na aplicação web.

A API foi criada para rodar ao lado do front-end DevRadar em [ReactJS](https://github.com/juliobjj/reactjs-devradar-frontend) e no mobile [React Native](https://github.com/juliobjj/reactnative-devradar-mobile).

# Instalação

1. Ter o pacote do Node.js intalado de forma global em seu ambiente;
2. Baixar ou clonar o repositório git clone https://github.com/juliobjj/nodejs-devradar-backend.git;
3. Instalar as dependências do projeto com yarn install ou se preferir usar o npm;
4. Para executar o projeto yarn run dev. 

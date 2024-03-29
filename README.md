<h1 align="center"> 
  Ignite Lab #01 - Microsserviços
</h1>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/last-commit/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/issues/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/issues-closed/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/license/marcel099/rs-ignite-lab-01-microservices.svg">
  <img src="https://img.shields.io/github/stars/marcel099/rs-ignite-lab-01-microservices.svg?style=social">
</div>

## Índice

* [Índice](#índice)
* [Sobre](#sobre)
  * [Arquitetura](#arquitetura)
  * [Tecnologias](#principais-tecnologias-utilizadas)
* [Instalação local](#instalação-local)
* [Licença](#licença)

## Sobre

O projeto foi desenvolvido na primeira edição do evento Ignite Lab proporcionado pela empresa [Rocketseat](https://rocketseat.com.br/) aos alunos do programa [Ignite](https://www.rocketseat.com.br/ignite).

O propósito do projeto foi desenvolver um sistema baseado na [arquitetura de microsserviços](https://cloud.google.com/learn/what-is-microservices-architecture?hl=pt-br).

### Arquitetura

O sistema, desenvolvido em TypeScript, é composto de um site em React e um Back-End GraphQL Node em arquitetura de microsserviços.

<div align="center">
  <img title="Diagrama dos componentes do sistema" alt="Diagrama dos componentes do sistema. São eles: uma aplicação web, um microsserviço dedicados a compras e seu respectivo banco de dados, um microsserviço dedicado a salas de aula e seu respectivo banco de dados, um microsserviço gateway." src="./assets/diagrams/microservices-architecture-diagram.png" width="90%" />
</div>

Cada um dos microsserviços se conecta ao seu próprio banco de dados.

<div align="center">
  <img title="Modelo Entidade-Relacionamento Purchases" alt="Modelo Entidade-Relacionamento do banco de dados do microsserviço dedicado a compras." src="./assets/diagrams/purchases-db-erm.png" style="margin-bottom: 1.5rem" />
  <img title="Modelo Entidade-Relacionamento Classrooms" alt="Modelo Entidade-Relacionamento do banco de dados do microsserviço dedicado a salas de aula." src="./assets/diagrams/classrooms-db-erm.png" />
</div>

### Principais tecnologias utilizadas

O sistema foi desenvolvido em TypeScript. É composto de 4 partes:

- Microservices
  - [Node.js](https://nodejs.org/en/)
  - [Nest](https://nestjs.com/)
  - [Express](https://expressjs.com/)
  - [GraphQL](https://graphql.org/)
  - [Apollo Federation](https://www.npmjs.com/package/@apollo/federation)
  - [Apache Kafka](https://www.npmjs.com/package/kafkajs)
  - [Prisma](https://www.prisma.io/)
  - [PostgreSQL](https://www.postgresql.org/)
- API Gateway
  - [Node.js](https://nodejs.org/en/)
  - [Nest](https://nestjs.com/)
  - [Express](https://expressjs.com/)
  - [GraphQL](https://graphql.org/)
  - [Apollo Gateway](https://www.npmjs.com/package/@apollo/gateway)
- Web Application
  - [Next](https://nextjs.org/)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Headless UI](https://headlessui.com/)
  - [GraphQL](https://graphql.org/)
  - [Apollo Client](https://www.npmjs.com/package/@apollo/client)
  - [GraphQL Code Generator](https://the-guild.dev/graphql/codegen)

Alguns pontos a destacar:

- Uso do protocolo [GraphQL](https://graphql.org/) como forma de comunicação entre Front-End e Back-End
- Utilização de Arquitetura de Microsserviços no Back-End através do [Apollo Federation](https://www.npmjs.com/package/@apollo/federation)
- Integração entre microsserviços através do [Apache Kafka](https://www.npmjs.com/package/kafkajs)
- Emprego de um microsserviço gateway através do [Apollo Gateway](https://www.npmjs.com/package/@apollo/gateway) para proporcionar transparência ao Back-End
- Consumo do Back-End através do [Apollo Client](https://www.npmjs.com/package/@apollo/client)

## Instalação local

Passos para atingir isso podem ser conferidos <a href="./INSTALLATION.md">neste arquivo</a>.

## Licença

Este projeto está sob a licença MIT. Para maiores detalhes acesse o <a href="./LICENSE.md">arquivo de licença</a>.

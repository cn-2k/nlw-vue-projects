<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<div align="center">
  <a>
    <img alt="Nuxt 3" src="https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC822"/>
  <a/>
    <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
</div>
</div>


## Sobre o Projeto

Uma aplicação destinada a criar um sistema de ingressos e referrals para um evento fictício.

> `<nlw/> Connect` é um projeto desenvolvido durante o **Next Level Week**, evento online produzido pela [**Rocketseat**](https://www.rocketseat.com.br/).


## Tecnologias

<table>
  <tbody>
    <tr>
    <tr>
      <td>
        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer"><code>TypeScript</code></a>
        <a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer"><code>Nuxt</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Libs

<table>
  <tbody>
    <tr>
    <tr>
      <td>
        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer"><code>TailwindCSS</code></a>
        <a href="https://vee-validate.logaretm.com/v4/" target="_blank" rel="noopener noreferrer"><code>VeeValidate</code></a>
        <a href="https://lucide.dev/guide/" target="_blank" rel="noopener noreferrer"><code>Lucide Icons</code></a>
        <a href="https://zod.dev/" target="_blank" rel="noopener noreferrer"><code>Zod</code></a>
      </td>
    </tr>
  </tbody>
</table>

## Configurações

### Requisitos

Necessário realizar as instalações:

- [`Git`](https://git-scm.com/)
- [`npm`](https://www.npmjs.com/)
- [`Node`](https://nodejs.org/)

Criar conta e configurar os serviços externos:

- [`GitHub`](https://github.com/)


### Clonar repositório e instalar dependências

#### `/nlw-connect/backend/nlw-connect-node` (backend)

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/cn-2k/nlw-vue-projects.git

# Entre na pasta do repositório clonado
$ cd nlw-connect

# Entre na pasta backend da aplicação
$ cd backend && cd nlw-connect-node

# Instale as dependências necessárias
$ npm install

# Rode as migrations do banco
$ npm run db:migrate

# Inicie a aplicação em servidor de desenvolvimento
$ npm run dev
```

#### `/nlw-connect/frontend/nlw-connect-nuxt` (frontend)

```bash
# Execute o comando git clone para realizar o clone do repositório
$ git clone https://github.com/cn-2k/nlw-vue-projects.git

# Entre na pasta do repositório clonado
$ cd nlw-connect

# Entre na pasta do frontend da aplicação
$ cd frontend && cd nlw-connect-nuxt

# Instale as dependências necessárias
$ npm install

# Inicie a aplicação em servidor de desenvolvimento
$ npm run dev
```

Feito isso, acesse `localhost:3000` e comece a utilizar a aplicação.

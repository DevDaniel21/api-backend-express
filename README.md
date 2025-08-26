# Comandos

-   npm init // Cria o package.json para iniciar um projeto node
-   npm i nome_pacote // Instala um pacote específico
-   npm install ou npm i // instala todos os pacotes do package.json
-   npm run nome_do_script // executar um script do package.json

# Comandos Git

// configura usuário e email do git máquina

-   git config --global user.name "Daniel Custódio"
-   git config --global user.email "danielcustodio@gmail.com"

-   git init // inicia o git em uma pasta
-   git remote add origin*url_do_github* // vincula meu projeto local ao repositório do github.

# Tópicos Importantes

-   O que é framework
    É um conjunto de ferramentas para desenvolver uma solução

-   O que é Javascript
    É uma linguaguem de programação

-   O que é NPM (Node Package Manager)
    Gerenciador de pacotes do node

-   O que é node.js
    É um ambiente runtime que roda o javascript, que roda no terminal/ ou servidor

-   O que é o Express
    É um framework para desenvolver o backend de uma aplicação ou desenvolver uma api

-   Protocolo http
    É o protocolo que determina as regras das requisições

-   Métodos http (GET, POST, PUT, PATCH, DELETE)

-   Como mudar o formato de importação/ exportação de require para import
    Adicionar no package.json a propriedade type: "module"

-   --watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

-   Router (Para que separar as rotas?)

-   Parâmetros de rota. Exemplo: /:id

-   O que é Padrâo de Projeto

-   Sigla MVC

-   Para que serve o Padrâo de Projeto MVC?

-   Qual a responsabilidade das camadas de MOdelo, Visão e Controle?

## Sintaxe básica de uma rota no express

Sintaxe básica de uma rota da API

app.post('/produto', (req, res) => {
res.json({message: 'Criado com sucesso!})
})

-   método criar/ inserir: post
-   Rota ou endereço: /produto
-   tipo de resposta: json

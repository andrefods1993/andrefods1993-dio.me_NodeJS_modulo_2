<h1 align="center">Carrinho de Compras da Shopee com Node.js</h1>

![image](https://github.com/andrefods1993/andrefods1993-dio.me_NodeJS_modulo_2/assets/132412680/882c50a9-8eed-4225-83c9-bb4926e214c0)

## 📎 Sumário

-   [✨ Features](#features)
-   [🗂️ Temas abordados](#topics)
-   [💡 Desafio](#challenges)
-   [🚀 Demonstração](#demo)
-   [🧑🏾‍💻 Autor](#author)

<h2 id="features">✨ Features</h2>

-   Adicionar item ao carrinho
-   Remover item do carrinho
-   Atualizar quantidade de itens no carrinho
-   Calcular total do carrinho
-   Visualizar conteúdo do carrinho

<h2 id="topics">🗂️ Temas abordados</h2>

-   Node.js: utilização do runtime para execução do JavaScript no servidor.
-   Módulos ES6: importação e exportação de funções entre arquivos utilizando a sintaxe moderna de módulos.
-   Funções assíncronas: utilização de `async` e `await` para operações assíncronas.
-   Manipulação de Arrays: métodos como `push`, `splice`, `indexOf` e `forEach`.
-   Programação Orientada a Objetos: utilização de getters para cálculos dinâmicos em objetos.
-   Boas práticas de organização de código: separação de responsabilidades em diferentes arquivos e funções.

<h2 id="challenges">💡 Desafio</h2>

O desafio deste projeto foi implementar um sistema de carrinho de compras eficiente e fácil de usar, inspirado na interface da Shopee. O sistema deve permitir aos usuários adicionar, remover e modificar produtos no carrinho, com atualizações instantâneas e cálculo automático dos totais, proporcionando uma experiência de compra fluida e interativa.

<h2 id="demo">🚀 Demonstração</h2>

Para visualizar a demonstração do projeto, siga os passos abaixo:

1. Baixe o projeto do GitHub.
2. Certifique-se de ter o Node.js instalado em sua máquina.
3. Navegue até o diretório do projeto no terminal.
4. Execute o arquivo JavaScript com o seguinte comando:

```bash
node src/main.js
```

### 📁 Estrutura do Projeto

```
shopee-cart
│   package.json
│   README.md
└───src
    ├───services
    │    ├───cart.mjs
    │    └───item.mjs
    └───main.js
```

#### Organização do Projeto

A estrutura do projeto foi organizada para separar claramente as responsabilidades de cada componente:

-   **services**: contém os módulos `cart.mjs` e `item.mjs`, que encapsulam a lógica de manipulação do carrinho e criação de itens, respectivamente. Essa separação facilita a manutenção e a escalabilidade do código.
-   **main.js**: o ponto de entrada do projeto, onde a execução das funções principais ocorre.

Essa organização modular permite que cada parte do código seja facilmente gerenciada e entendida, promovendo a reutilização e a clareza do projeto. A separação em diferentes arquivos e pastas torna o código mais legível e facilita a colaboração em equipe.

<h2 id="author">🧑🏾‍💻 Autor</h2>

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/132412680?v=4"/>
    <p>&nbsp&nbsp&nbspEste projeto foi desenvolvido por André Filipe Oliveira, como parte do curso de "Formação Node.js Fundamentals" na DIO.<br>
</p>

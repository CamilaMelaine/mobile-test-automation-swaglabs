# Mobile Test Automation - Swag Labs App

Projeto de automação de testes mobile utilizando **Appium** e **WebdriverIO**, desenvolvido como evolução prática de portfólio em QA, simulando cenários mais próximos de um app real de e-commerce.

## Objetivo

Automatizar fluxos funcionais no app **Swag Labs** (Sauce Labs Sample App), incluindo autenticação e interação com o carrinho de compras.

## Tecnologias utilizadas

- **Appium** – automação de aplicativos mobile nativos
- **WebdriverIO** – framework de testes E2E
- **TypeScript** – linguagem dos testes
- **Mocha** – framework de execução dos testes
- **UiAutomator2** – driver de automação para Android
- **Appium Inspector** – ferramenta para inspeção de elementos da interface

## Cenários de teste automatizados

**1. Login com usuário válido**
- Preencher usuário (`standard_user`)
- Preencher senha (`secret_sauce`)
- Clicar em "LOGIN"
- Validar que a tela de produtos é exibida

**2. Adicionar produto ao carrinho**
- Clicar em "ADD TO CART" no primeiro produto da lista
- Acessar o carrinho
- Validar que a tela do carrinho é exibida
- Validar que o produto adicionado aparece corretamente

## Pré-requisitos

- Node.js
- Java JDK
- Android Studio (com um emulador Android configurado)
- Appium e driver UiAutomator2 instalados
- APK do Swag Labs App instalado no emulador ([Sauce Labs Sample App](https://github.com/saucelabs/sample-app-mobile))

## Como executar

git clone https://github.com/CamilaMelaine/mobile-test-automation-swaglabs.git
cd mobile-test-automation-swaglabs


2. Instale as dependências:

npm install


3. Abra um emulador Android (ex: Pixel 5) com o app Swag Labs instalado.

4. Execute os testes:

npm run wdio


## Sobre o projeto

Este projeto dá continuidade a uma trilha de estudos em automação de testes mobile, evoluindo de um cenário simples (app nativo de calculadora) para um app de e-commerce mais realista, com autenticação e fluxos de compra — refletindo desafios mais próximos do dia a dia de QA em produtos reais.

Novos cenários serão adicionados progressivamente (ex: login com credenciais inválidas, checkout, remoção de itens do carrinho).

---

Desenvolvido por **Camila Melaine** como parte de estudos práticos em Automação de Testes.

# 🧮 Calculadora de IMC

Projeto de uma **Calculadora de IMC (Índice de Massa Corporal)** desenvolvida com **HTML, CSS e JavaScript**, que permite ao usuário informar peso e altura, calcular o IMC e exibir a classificação correspondente.

Além disso, o projeto utiliza **Web Storage** para armazenar os dados informados pelo usuário durante a sessão.

---

## 📌 Funcionalidades

- Inserção de peso e altura
- Cálculo automático do IMC
- Exibição da classificação do IMC:
  - Abaixo do peso
  - Peso normal
  - Sobrepeso
  - Obesidade grau I
  - Obesidade grau II
  - Obesidade grau III
- Armazenamento dos dados utilizando `sessionStorage`
- Recuperação dos valores ao recarregar a página durante a sessão

---

## 🛠️ Tecnologias utilizadas

- **HTML5** – Estrutura da aplicação  
- **CSS3** – Estilização da interface  
- **JavaScript (ES6)** – Lógica de cálculo, manipulação do DOM e Web Storage  

---

## 📐 Cálculo do IMC

A fórmula utilizada é:
IMC = peso / (altura * altura)

Onde:
- Peso é informado em **quilogramas (kg)**
- Altura é informada em **metros (m)**

---

## 🧠 Conceitos aplicados

- Manipulação do DOM
- Eventos JavaScript
- Funções e condicionais
- Conversão de tipos (`parseFloat`)
- Uso de `sessionStorage`
- Organização de código
- Boas práticas de JavaScript

---

## ▶️ Como executar o projeto

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Preencha os campos de peso e altura
4. Clique no botão **Calcular**
5. Veja o resultado do IMC e sua classificação

---

## 📂 Estrutura de arquivos
📁 projeto-imc
┣ 📄 index.html
┣ 📄 style.css
┗ 📄 script.js

---

## 🚀 Melhorias futuras

- Validação de campos vazios ou inválidos
- Limitar valores irreais de peso e altura
- Melhorar acessibilidade
- Responsividade para dispositivos móveis
- Opção de limpar dados armazenados

---

## 👨‍💻 Autor

Projeto desenvolvido como parte dos estudos em **Desenvolvimento Web Front-end**.


# HotelVibe 🏨

**Site de hospedagem desenvolvido com Vue.js 3 e Vue Router**

## 📌 Sobre o projeto

O HotelVibe é um site de hospedagem desenvolvido como projeto acadêmico, com o objetivo de aplicar conceitos fundamentais do desenvolvimento front-end utilizando Vue.js.

A aplicação apresenta opções de quartos, avaliações de hóspedes e um formulário interativo de reserva. O usuário pode selecionar uma acomodação, informar os dados da hospedagem e visualizar o valor total da estadia.

O projeto também foi evoluído para uma **Single Page Application (SPA)**, utilizando Vue Router para organizar a navegação entre diferentes páginas sem a necessidade de recarregar o site.

## ✨ Funcionalidades

- Apresentação do hotel e de seus diferenciais.
- Exibição de quartos com imagens, descrições, capacidade e preços.
- Seleção de quarto para realizar uma reserva.
- Formulário com validação de informações.
- Cálculo do valor total conforme a quantidade de diárias.
- Exibição da confirmação da reserva.
- Seção de avaliações de hóspedes.
- Navegação entre páginas utilizando Vue Router.
- Atualização do conteúdo sem recarregamento completo da página.
- Página de erro 404 para rotas não encontradas.
- Layout responsivo para diferentes tamanhos de tela.

## 🛠️ Tecnologias utilizadas

- Vue.js 3
- Vue Router 4
- JavaScript
- HTML5
- CSS3
- Bootstrap 5
- Vite
- StackBlitz
- GitHub

## 🧩 Organização dos componentes

O projeto foi dividido em componentes reutilizáveis e páginas independentes, facilitando a organização, a manutenção e a evolução do código.

### Componentes

| Componente | Responsabilidade |
|---|---|
| `Header.vue` | Exibe o cabeçalho e o menu de navegação. |
| `QuartoCard.vue` | Apresenta as informações de cada quarto. |
| `ReservaForm.vue` | Recebe e valida os dados da reserva. |
| `ReservaConfirmacao.vue` | Exibe os dados e o valor da reserva confirmada. |
| `AvaliacaoCard.vue` | Apresenta as avaliações dos hóspedes. |
| `App.vue` | Integra os componentes, controla os dados principais e exibe as páginas. |

### Páginas (Views)

| Página | Rota | Responsabilidade |
|---|---|---|
| `HomeView.vue` | `/` | Apresenta o hotel, seus diferenciais e avaliações. |
| `QuartosView.vue` | `/quartos` | Exibe os quartos disponíveis. |
| `ReservasView.vue` | `/reservas` | Apresenta o formulário e a confirmação da reserva. |
| `SobreView.vue` | `/sobre` | Apresenta informações sobre o projeto HotelVibe. |
| `NotFoundView.vue` | Rota não encontrada | Exibe uma página de erro 404. |

### Organização das pastas

```text
src/
├── components/
│   ├── Header.vue
│   ├── QuartoCard.vue
│   ├── ReservaForm.vue
│   ├── ReservaConfirmacao.vue
│   └── AvaliacaoCard.vue
│
├── router/
│   └── index.js
│
├── views/
│   ├── HomeView.vue
│   ├── QuartosView.vue
│   ├── ReservasView.vue
│   ├── SobreView.vue
│   └── NotFoundView.vue
│
├── App.vue
├── main.js
└── style.css
```

## 📚 Conceitos de Vue.js aplicados

- **Componentes:** divisão da interface em partes independentes e reutilizáveis.
- **`<script setup>`:** sintaxe utilizada para organizar a lógica dos componentes.
- **`ref()`:** criação de dados reativos.
- **`v-for`:** renderização de listas de quartos e avaliações.
- **`v-if`:** exibição condicional de elementos.
- **`v-model`:** ligação entre os campos do formulário e os dados.
- **Props:** passagem de informações entre componentes.
- **Eventos:** comunicação entre componentes e execução de funções.
- **CSS e Bootstrap:** estilização e organização visual da aplicação.

## 🧭 Vue Router e navegação SPA

Na evolução do projeto, foi implementado o Vue Router 4 para transformar o site em uma Single Page Application (SPA).

Com essa implementação, cada seção principal passou a possuir sua própria rota, permitindo navegar entre as páginas sem recarregar completamente a aplicação.

Os principais recursos utilizados foram:

- **`createRouter()`:** criação e configuração do roteador.
- **`createWebHistory()`:** utilização do histórico do navegador para navegação.
- **`RouterLink`:** criação de links para navegar entre as rotas.
- **`RouterView`:** definição do local onde as páginas são exibidas.
- **Rotas:** associação de caminhos às respectivas páginas.
- **Rota 404:** tratamento de endereços não encontrados.

As rotas implementadas são:

- `/` — Início.
- `/quartos` — Quartos.
- `/reservas` — Reservas.
- `/sobre` — Sobre nós.
- `/:pathMatch(.*)*` — Página não encontrada.

## 🤖 Uso de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio ao desenvolvimento, auxiliando no planejamento da estrutura, na criação inicial dos componentes, na integração da aplicação, na estilização, na implementação do Vue Router e na organização da documentação.

Os integrantes devem revisar os códigos e compreender as funcionalidades antes da apresentação.

### Registro dos prompts utilizados

Os itens abaixo resumem as solicitações feitas durante o desenvolvimento. Eles devem ser ajustados para corresponder às solicitações realmente utilizadas pela equipe.

| Etapa | Resumo da solicitação à IA |
|---|---|
| 1. Planejamento | Ajuda para planejar a estrutura de um site de hotel. |
| 2. Estrutura do projeto | Definição da organização dos componentes e criação do projeto no StackBlitz. |
| 3. Cabeçalho e quartos | Desenvolvimento do cabeçalho e do componente reutilizável de apresentação dos quartos. |
| 4. Reservas | Criação dos componentes de formulário, confirmação e avaliação. |
| 5. Integração | Integração dos componentes no `App.vue` e criação do CSS geral. |
| 6. Evolução com SPA | Orientação para implementar Vue Router, configurar as rotas e separar o conteúdo em páginas. |
| 7. Testes e documentação | Apoio na verificação das funcionalidades e na atualização da documentação. |

**Importante:** a equipe deve conferir o histórico de conversas e adaptar esse registro, acrescentando ou corrigindo os prompts conforme necessário. A IA foi utilizada como apoio, e o funcionamento do projeto deve ser verificado pelos integrantes.

## ▶️ Como executar o projeto

1. Abra o projeto no StackBlitz ou clone o repositório do GitHub.
2. Caso esteja executando localmente, instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Acesse o endereço disponibilizado pelo Vite.
5. Teste a navegação entre as páginas, a seleção de quartos e o processo de reserva.

Para verificar a compilação de produção, utilize:

```bash
npm run build
```

## 👥 Integrantes

- Arthur Gabriel — 04209021
- Letícia Alves — 04207296
- Pedro Maia — 04212837
- Kaio Ruan Felipe Lisboa — 04209555
- Juliana de Souza Barros — 04209576
- Vitor Angelo — 04211319

## 🎓 Objetivo acadêmico

Aplicar e aprofundar conceitos fundamentais de desenvolvimento front-end utilizando Vue.js, incluindo componentes, re

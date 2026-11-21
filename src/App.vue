
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Header from './components/Header.vue'

const router = useRouter()

const quartoSelecionado = ref(null)
const reserva = ref(null)

const quartos = [
  {
    id: 1,
    nome: 'Quarto Standard',
    categoria: 'Conforto essencial',
    descricao: 'Um ambiente aconchegante para descansar e aproveitar sua viagem.',
    preco: 180,
    hospedes: 2,
    imagem: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    nome: 'Quarto Deluxe',
    categoria: 'Mais conforto',
    descricao: 'Mais espaço, elegância e conforto para uma estadia especial.',
    preco: 280,
    hospedes: 3,
    imagem: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    nome: 'Suíte Premium',
    categoria: 'Experiência exclusiva',
    descricao: 'Uma suíte sofisticada para quem deseja uma experiência diferenciada.',
    preco: 450,
    hospedes: 4,
    imagem: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
  }
]

const avaliacoes = [
  {
    id: 1,
    nome: 'Mariana Costa',
    comentario: 'Ambiente maravilhoso, quarto confortável e atendimento excelente!'
  },
  {
    id: 2,
    nome: 'Pedro Almeida',
    comentario: 'Tudo muito organizado. Foi uma experiência tranquila e especial.'
  },
  {
    id: 3,
    nome: 'Camila Santos',
    comentario: 'Adorei o conforto e a decoração. Voltaria com certeza!'
  }
]

function selecionarQuarto(quarto) {
  quartoSelecionado.value = quarto
  reserva.value = null

  router.push('/reservas')
}

function confirmarReserva(dados) {
  reserva.value = dados
}
</script>

<template>
  <Header />

  <main>
    <RouterView
      v-slot="{ Component }"
    >
      <component
        :is="Component"
        :quartos="quartos"
        :avaliacoes="avaliacoes"
        :quartoSelecionado="quartoSelecionado"
        :reserva="reserva"
        @selecionar-quarto="selecionarQuarto"
        @confirmar="confirmarReserva"
      />
    </RouterView>
  </main>

  <footer class="footer">
    <a href="/" class="logo-footer">
      Hotel<span>Vibe</span>
    </a>

    <p>Conforto, elegância e boas experiências.</p>

    <small>Projeto acadêmico desenvolvido em Vue.js.</small>
  </footer>
</template>

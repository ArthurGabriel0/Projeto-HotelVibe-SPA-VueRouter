
<script setup>
import ReservaForm from '../components/ReservaForm.vue'
import ReservaConfirmacao from '../components/ReservaConfirmacao.vue'

defineProps({
  quartoSelecionado: Object,
  reserva: Object
})

defineEmits(['confirmar'])
</script>

<template>
  <section class="secao secao-reserva container-fluid">
    <div class="titulo-secao">
      <span class="subtitulo">FAÇA SUA ESCOLHA</span>
      <h1>Reserve sua estadia</h1>
      <p>Preencha seus dados para simular uma reserva.</p>
    </div>

    <div class="reserva-layout">
      <div class="reserva-info">
        <h3>Sua próxima experiência está mais perto.</h3>

        <p>
          Escolha seu quarto, informe as datas e veja o resumo
          da sua hospedagem.
        </p>

        <div
          v-if="quartoSelecionado"
          class="quarto-escolhido shadow-sm"
        >
          <span>QUARTO SELECIONADO</span>

          <h3>{{ quartoSelecionado.nome }}</h3>

          <p>
            R$ {{ quartoSelecionado.preco.toFixed(2).replace('.', ',') }}
            por diária
          </p>
        </div>

        <div v-else class="aviso-quarto shadow-sm">
          Selecione um dos quartos para começar sua reserva.
          <RouterLink to="/quartos" class="d-block mt-2">
            Ver quartos disponíveis
          </RouterLink>
        </div>
      </div>

      <div>
        <ReservaForm
          :quartoSelecionado="quartoSelecionado"
          @confirmar="$emit('confirmar', $event)"
        />

        <ReservaConfirmacao :reserva="reserva" />
      </div>
    </div>
  </section>
</template>

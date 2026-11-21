
<script setup>
import QuartoCard from '../components/QuartoCard.vue'

defineProps({
  quartos: Array
})

defineEmits(['selecionar-quarto'])
</script>

<template>
  <section class="secao container-fluid">
    <div class="titulo-secao">
      <span class="subtitulo">ENCONTRE SEU ESPAÇO</span>
      <h1>Quartos pensados para você</h1>
      <p>Escolha a acomodação ideal para sua próxima experiência.</p>
    </div>

    <div class="row g-4">
      <div
        v-for="quarto in quartos"
        :key="quarto.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <QuartoCard
          :quarto="quarto"
          @reservar="$emit('selecionar-quarto', $event)"
        />
      </div>
    </div>
  </section>
</template>

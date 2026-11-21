
<script setup>
import AvaliacaoCard from '../components/AvaliacaoCard.vue'

defineProps({
  avaliacoes: Array
})
</script>

<template>
  <section class="hero">
    <div class="hero-conteudo">
      <span class="subtitulo">SUA ESTADIA, NOSSO CUIDADO</span>

      <h1>Momentos especiais começam com uma boa estadia.</h1>

      <p>
        Conforto, elegância e hospitalidade em um só lugar.
        Encontre o quarto ideal para sua próxima viagem.
      </p>

      <RouterLink to="/quartos" class="botao-principal btn btn-dark shadow-sm">
        Explorar quartos →
      </RouterLink>

      <div class="destaques">
        <span>✓ Conforto e qualidade</span>
        <span>✓ Atendimento especial</span>
      </div>
    </div>

    <div class="hero-imagem rounded-4 shadow-sm">
      <img
        class="img-fluid"
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85"
        alt="Hotel elegante com piscina"
      >

      <div class="selo shadow-sm">
        <strong>HotelVibe</strong>
        <span>Sua experiência começa aqui</span>
      </div>
    </div>
  </section>

  <section class="beneficios container-fluid">
    <div>
      <span class="beneficio-icone">✧</span>
      <div>
        <strong>Conforto garantido</strong>
        <p>Ambientes pensados para você.</p>
      </div>
    </div>

    <div>
      <span class="beneficio-icone">⌂</span>
      <div>
        <strong>Espaços acolhedores</strong>
        <p>Seu descanso é nossa prioridade.</p>
      </div>
    </div>

    <div>
      <span class="beneficio-icone">♡</span>
      <div>
        <strong>Atendimento especial</strong>
        <p>Cuidado em cada detalhe.</p>
      </div>
    </div>
  </section>

  <section class="secao avaliacoes-secao container-fluid">
    <div class="titulo-secao">
      <span class="subtitulo">EXPERIÊNCIAS QUE INSPIRAM</span>
      <h2>O que dizem nossos hóspedes</h2>
      <p>Avaliações demonstrativas da experiência HotelVibe.</p>
    </div>

    <div class="row g-4">
      <div
        v-for="avaliacao in avaliacoes"
        :key="avaliacao.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <AvaliacaoCard :avaliacao="avaliacao" />
      </div>
    </div>
  </section>
</template>


<template>
<section class="secao container">
  <div class="titulo-secao">
    <span class="subtitulo">CONHEÇA O HOTELVIBE</span>
    <h1>Sobre nós</h1>
    <p>Hospitalidade, conforto e experiências especiais.</p>
  </div>

  <div class="row align-items-center g-5">
    <div class="col-md-6">
      <img
        class="img-fluid rounded-4 shadow"
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80"
        alt="Estrutura do hotel"
      >
    </div>

    <div class="col-md-6">
      <h2>Mais do que uma hospedagem.</h2>

      <p>
        O HotelVibe é um projeto acadêmico desenvolvido
        para apresentar uma experiência de hospedagem
        confortável, moderna e acessível.
      </p>

      <p>
        Nosso objetivo é oferecer uma plataforma simples
        para conhecer acomodações e simular reservas.
      </p>

      <RouterLink to="/quartos" class="btn btn-dark mt-3">
        Conhecer nossos quartos
      </RouterLink>
    </div>
  </div>
</section>
</template>

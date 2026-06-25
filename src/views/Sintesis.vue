<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p El presente componente formativo da a conocer las principales herramientas informáticas que se requieren actualmente para el óptimo funcionamiento de una organización, pues es innegable que las tecnologías de la información han cambiado la forma de hacer las cosas, por ende, es necesario adquirir los conocimientos necesarios para poder aplicarlas de manera eficaz en cualquier contexto del ser humano. 
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="A través de esta síntesis se resume los temas abordados en el presente componente formativo como es la definición y sus principales características del: Software, Hardware, Computación en la nube y Búsqueda de información.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

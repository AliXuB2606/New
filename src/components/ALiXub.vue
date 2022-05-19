<template>
  <q-page>
    <q-card elevated class="my-card  justify-center items-center" style="height:300px" v-for="card in cards" :key="card">
      <q-card-section class="column justify-center items-center">
        <img class="img-wrap q-mt-xl" :src="card.src" alt="">
        <span>{{card.alt}}</span>
        <span class="q-mt-md">Bring to the table win-win survival strategies to ensure proactive domination.</span>
      </q-card-section>
    </q-card>



  </q-page>
</template>
<script>
export default {
  setup () {
    return {
      cards:[
        {src:'https://xtrm.foxthemes.me/wp-content/uploads/2019/01/if-yumminky-mountain-bike-26-1924637.png', alt:' Mountain Bike'},
        {src:'https://xtrm.foxthemes.me/wp-content/uploads/2019/01/if-bicycle-icon-35-901034.png', alt:'Skate Boarding'},
        {src:'https://xtrm.foxthemes.me/wp-content/uploads/2019/01/if-47-running-fast-1175438.png', alt:'Trail Running'},
        {src:'https://xtrm.foxthemes.me/wp-content/uploads/2019/01/icon.png', alt:'Paintball'},
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>

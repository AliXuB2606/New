<template>
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="500px"
    >
      <q-carousel-slide name="first" img-src="http://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-38.png?id=3393">
        <div class="absolute-full flex flex-center column custom-caption">
          <div class="text-h6">Testimonials</div>
          <div class="text-h4 q-mt-sm">Our Riders Said About Us</div>
          <div class="q-mt-xl">
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
          </div>
          <div class="text-h6 q-mt-md">
            “It was an awesome experience! Exhausting though, but super fun and <br> definitely worth it. Very beautiful piece of nature! I highly recommend it :)”
          </div>
          <div class="q-mt-lg row items-center">
            <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="s-img-switch">
           <div class="colun">
           <span class="q-ml-sm">Andrew Gosha <br> pro rider</span><br>

           </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="http://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-38.png?id=3393">
        <div class="absolute-full flex flex-center column custom-caption">
          <div class="text-h6">Testimonials</div>
          <div class="text-h4 q-mt-sm">Our Riders Said About Us</div>
          <div class="q-mt-xl">
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
          </div>
          <div class="text-h6 q-mt-md">
            “It was an awesome experience! Exhausting though, but super fun and <br> definitely worth it. Very beautiful piece of nature! I highly recommend it :)”
          </div>
          <div class="q-mt-lg row items-center">
            <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="s-img-switch">
           <div class="colun">
           <span class="q-ml-sm">Andrew Gosha <br> pro rider</span><br>

           </div>
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="http://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-38.png?id=3393">
        <div class="absolute-full flex flex-center column custom-caption">
          <div class="text-h6">Testimonials</div>
          <div class="text-h4 q-mt-sm">Our Riders Said About Us</div>
          <div class="q-mt-xl">
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
            <q-icon name="star" color="yellow" />
          </div>
          <div class="text-h6 q-mt-md">
            “It was an awesome experience! Exhausting though, but super fun and <br> definitely worth it. Very beautiful piece of nature! I highly recommend it :)”
          </div>
          <div class="q-mt-lg row items-center">
            <img src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/Group-13.png" alt="" class="s-img-switch">
           <div class="colun">
           <span class="q-ml-sm">Andrew Gosha <br> pro rider</span><br>

           </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {

  setup () {
    return {
      slide: ref('first')
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>

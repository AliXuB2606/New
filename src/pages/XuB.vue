<template>
  <q-page>
          <!-- navbar -->
        <q-img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/01/group-2-1.jpg">
          <div class="absolute-full text-subtitle2  flex " style="margin-top:250px; margin-left:150px">
              <div class="text-h2 text-weight-bold">
                <span> Get the Best </span>
                <span class="bg-orange-10" >Services</span>
              </div>
          </div>
        </q-img>
        <div class="fit row wrap justify-around items-center q-mt-xl">
          <div class="text-h4 text-weight-bold q-mb-xl" >
            <span>You Won’t Get <br> Bored <span class="bg-dark text-white"> With Us </span> </span>
            <div class="q-mt-xl">
              <q-btn color="white" text-color="black" label="ORDER NOW" style="border: 2px solid black"/>
            </div>
          </div>
          <div>
            <div class="column q-mt-xl">
              <span class="text-weight-bold">XTRM`LY GREAT SERVICES</span>
            </div>
            <div class="q-mt-lg">
              <span class="text-weight-bold">
                Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque <br> volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi <br> sollicitudin porttitor id sit amet risus.
              </span>
            </div>
            <div class="q-mt-lg">
              <span class="text-grey">
                In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpat aliquam. Integer <br> et elit eget elit facilisis tristique. Nam vel iaculis mauris. Sed ullamcorper tellus erat, non ultrices <br> sem tincidunt euismod. Fusce rhoncus porttitor velit, eu bibendum nibh aliquet vel. Fusce lorem <br> leo, vehicula at nibh quis, facilisis accumsan turpis.

              </span>
            </div>
          </div>
        </div>
        <ALiXub class="card fit row no-wrap justify-around items-center"/>

        <div>
          <q-img src="http://xtrm.foxthemes.me/wp-content/uploads/2019/02/wer.png?id=4983">
            <div class="absolute-full flex flex-center">
              <div class="ali column justify-center items-center">
                <span class="text-grey ">features</span>
                <span class="text-dark text-h4">Why You Shoud <span class="bg-dark text-white">Choose Us?</span></span>
              </div>

            </div>
            <div class="row">
              <div class=" raqam row flex flex-center justify-around content-around ">
                  <div class="q-mt-xl ">
                    <div class="row raqam1  ">
                      <div  class="column text-dark justify-center items-center q-mt-xl" >
                          <span class="text-h3 text-red q-ml-md" >2</span>
                          <span class="text-h6 text-weight-bolder q-mb-sm" >Unique Coast</span>
                          <span class="text-right"> Vestibulum rutrum quam vitae fringilla tincidunt. <br> Suspendisse nec tortor urna. Ut laoreet sodales nisi, <br> quis iaculis</span>
                      </div>
                    </div>

                  </div>

              </div>
            </div>


              <div class="row">
                <div class="ssoz column">
                  <span class=" text-h6">
                    Testimonials
                  </span>
                  <span class="text-weight-bolder text-h4">
                    Our Customers Said About
                    <span class="bg-dark ">
                      XTRM
                    </span>
                  </span>
                </div>

              </div>
              <div class=" div  text-h6 no-wrap justify-center items-center content-center"   style="border-radius:100%; border:1px solid white; width:100px; height:100px; margin-top:">

                   <span class=" span"> ,,</span>

              </div>

          </q-img>



        </div> <Morgen/>




      <Pasgi/>

  </q-page>
</template>
<script>
import Morgen from 'src/components/Morgen.vue'
import Pasgi from '../components/Pasgi.vue'
import ALiXub from '../components/ALiXub.vue'


export default {
    data() {
        return {
            cards: [
                { raqam: "1", class: "text-right"},
                { raqam: "5", class: "text-left ", style:'margin-right:100px;' },
                { raqam: "2", class: "text-right" },
                { raqam: "4", class: "text-left" },
                { raqam: "3", class: "text-right" },
                { raqam: "6", class: "text-left" },
            ]
        };
    },
    components: { Morgen, Pasgi, ALiXub }
}
</script>
<style scoped>

.q-img__content > div{
  background: transparent;
}
.ali{
  margin-bottom:1050px ;
}






.ssoz{
  margin-top: 850px;
  margin-left: 200px;
}
.div{
  margin-top: 850px;
  margin-left: 1050px;
}
.span{
  font-size: 100px;
  margin-left: 10px;
  margin-bottom: 1000px;


}
.div1{
  margin-bottom: 200px;
}





</style>















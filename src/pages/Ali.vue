<template>
  <q-page>
  <q-img src="https://xtrm.foxthemes.me/wp-content/uploads/2019/01/group-2-1-1.jpg">
          <div class="absolute-full q-mt-xl class ">
            <span class="text-h2 text-weight-bold"> Get the Best </span>
            <span class="text-h2   text-weight-bold q-ma-md bg-orange-8" >Pricing</span>
          </div>
        </q-img>
        <div>
          <Davron/>
        </div>
        <div>

          <q-img src="  http://xtrm.foxthemes.me/wp-content/uploads/2019/01/group-10-1.jpg?id=4449">
            <div class="absolute-full flex flex-center column ">
              <div class="row" >
                <span class="text-h4">Join Our </span>
                <span class="bg-dark text-h4 q-ml-sm">Newsletter</span>
             </div>
             <div class="q-mt-xl row">
                <q-input outlined label="Entet Your Email" style="width:300px" />
                   <q-btn color="white" text-color="black" label="Subscribe" />
             </div>

            </div>
          </q-img>
        </div>
        <div style="width:100%;  height:100%; ">
          <div class="bg-dark " style="width:100%; height:300px;" >
            <div style="width:100%; height:100%;" class="flex-center " >
                <div class="column text-white content">
                  <span class="container text-h5"> newsletter</span>
                  <span class="text-h6">
			            A well-executed brand strategy affects all aspects of a business and is <br> connected to consumer needs & emotions.                    </span>
                </div>
                 <div class="q-mt-xl row q-mb-xl bg-dark content">
                <q-input outlined class="bg-white" label="Entet Your Email" style="width:300px; " />
                   <q-btn color="orange" text-color="white" icon="arrow_upward" style="height:55px" />
             </div>
            </div>
          </div>
        </div>

  </q-page>
</template>
<script>
import Davron from '../components/Davron.vue'

export default {
  data(){
    return{

    }

  },
  components:{
    Davron,

}

}
</script>
<style scoped>
.q-img__content > div{
  background: transparent;
}
.class{
  margin-top:250px;
  margin-left: 100px;
}
.container{
  margin-top: 50px;
margin-left: 2px;
}
.content{
  margin-left: 350px;
}
</style>


<template>
<!-- this is layout -->
  <q-layout view="hHh lpR fff">

    <q-header bordered class="bg-transparent  text-white justify-center items-cetner ">
        <q-tabs class="" style="position: absolute; left:0%; margin-left:50px">
                <img  src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/white.png" alt="Xtrm" class="main-logo q-mr-xl">
              <div class="q-pa-md justify-center items-center content-center " v-for="Button in Buttonlar" :key="Button">
                <q-tab>
                  <q-btn-dropdown dropdown-icon="none" ripple="none"  unelevated :label="Button.label">
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick" >
                        <q-item-section >
                          <router-link to="/xub">
                            <q-item-label >Photos</q-item-label>
                          </router-link>
                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <router-link to="/xub">
                              <q-item-label>Videos</q-item-label>
                          </router-link>

                        </q-item-section>
                      </q-item>

                      <q-item clickable v-close-popup @click="onItemClick">
                        <q-item-section>
                          <router-link to="/chooseus">
                            <q-item-label>Articles</q-item-label>
                          </router-link>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </q-tab>
              </div>
                <q-icon class="q-ml-lg" name="search" style="width:100px; font-size:30px; cursor:pointer " ></q-icon>
                <q-icon name="shopping_bag" style=" font-size:30px; cursor:pointer " ></q-icon><p><sup>0</sup></p>

        </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-white text-black">
      <q-toolbar class="fit row wrap justify-evenly items-center content-center " >
        <q-toolbar-title class=" tolobar q-ml-xl text-h6">
        	   <span class="text-h6"> © XTRM</span>

            <span class="text-h6" >. AliXuB 2022.</span>



        </q-toolbar-title>
        <q-toolbar-title>
          <q-icon name="twitter" />
          <q-icon name="facebook" />
          <q-icon name="telegram" />
          <q-icon name="" />
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>

</template>
<script>
export default {
  data(){
    return{
      Buttonlar:[
        {label:"Home",Data:'Snowborading'},
        {label:"Pages", to: '/xub'},
        {label:"Showcases"},
        {label:"Blog"},
        {label:"Shop"},
        {label:"Pricing"},
        {label:"Contact us"},
      ],
    }
  }
}
</script>
<style scoped>
.tolobar{
  margin-left: 200px;
}
</style>




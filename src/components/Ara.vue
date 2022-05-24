<template>
  <!-- navbar n9 -->
  <div class="bg-grey-6 q-mt-xl">
    <nav class="jusify-center items-center q-pa-md">

      <div class="row q-ml-xl">
        <div class="">
          <span class="text-h3 q-pa-xl">Logo</span>
        </div>
        <div class="row " v-for="bot in botlar" unelevated  :key="bot">
            <q-btn-dropdown class="q-ma-md" color="transparent"  :label="bot.label">
              <q-list>
                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup @click="onItemClick">
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="jusrify-center items-center row">
             <q-input Outlined class=" bg-grey-2 q-mx-xl" height="50px" style="width:300px; border-radius:10px" label="Search" >
               <q-icon name="search" class="text-h3 text-primary q-mb-sm q-ml-md" />
            </q-input>
            <q-btn flat label="Register" class="q-mr-xl text-white bg-dark " />
          </div>

      </div>
    </nav>
  </div>
  <!-- navbar n9 -->
  <!-- footer n9 -->
    <div class="bg-grey-6 ">
      <footer class="q-mt-xl ">
        <div class="row justify-center items-center q-mx-md">
            <div class="column">
              <div class="q-pa-sm">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Quisquam beatae animi saepe reprehenderit explicabo porro quae eveniet, <br> voluptatum et aspernatur ut itaque ad quam <br> laboriosam fuga officia at ea quod.</span>
              </div>
                <div>
                  <span class="text-grey-8 q-mt-md" >
                    Copyright © 2022 Creative Agency WordPress Theme by <a href="#"> Axilthemes</a> . All rights reserved
                  </span>
                </div>
            </div>
            <q-space />
            <div class="column justifc-center items-center ">
              <div class="text-h6 q-mb-md">
                <i class="fab fa-google "></i>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-telegram"></i>
                <i class="fab fa-instagram"></i>
              </div>
              <div>
                <a class="q-ma-md" href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
              </div>
            </div>
        </div>
      </footer>
    </div>
  <!-- footer n9 -->
</template>
<script>
export default {
  botlar:[
        {label:'home'},
        {label:'About'},
        {label:'Pages'},
        {label:'Blog'},
        {label:'Showcases'},
        {label:'Shop'},

      ]
}
</script>

<template>
    <!-- navbar N4 -->
  <div class=" outlined bg-grey-5     clas">
    <nav style="height:100px" class=" row justify-between  items-center ">
        <div style="" class=" fit  row justify-around items-center">

                <q-tabs class="" style="position: absolute; left:0%; margin-left:50px">
                <img  src="https://xtrm.foxthemes.me/wp-content/uploads/2018/09/white.png" alt="Xtrm" class="main-logo q-mr-xl">
              <div class="q-pa-md justify-center items-center content-center " v-for="Button in Buttonlar" :key="Button">
                <q-tab>
                  <q-btn-dropdown dropdown-icon="none" ripple="none"  unelevated :label="Button.label">
                    <q-list>
                      <q-item clickable v-close-popup @click="onItemClick" >
                        <q-item-section >

                            <q-item-label >Photos</q-item-label>

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
                </q-tab>
              </div>
                <q-icon class="q-ml-lg" name="search" style="width:100px; font-size:30px; cursor:pointer " ></q-icon>
                <q-icon name="shopping_bag" style=" font-size:30px; cursor:pointer " ></q-icon><p><sup>0</sup></p>

        </q-tabs>



            <div  class="items-center" >

             </div>

        </div>

      </nav>
  </div>
  <!-- navbar N4 -->
  <!-- footer N4 -->
      <div class="fit row justify-center items-center q-mt-xl bg-grey-5 q-pa-sm ">
    <footer class=" fit row justify-around items-center">
        <div style=""  class=" fit row justify-around items-center">

               <span class="text-h6"> © XTRM . AliXuB 2022.</span>

            <div>
              <i class="fab fa-google "></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-telegram"></i>
              <i class="fab fa-instagram"></i>
            </div>
        </div>
        <div>

        </div>
    </footer>
  </div>
  <!-- footer N4 -->
</template>
<script>
export default {
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
</script>

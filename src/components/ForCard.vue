<template>
  <div>
    <!-- navbar N1 -->
    <nav style="margin-top:200px"  class=" q-pa-sm q-mt-xl bg-grey-5 row justify-center items-center content-center">
      <div style="width:80%" class="row  justify-between items-center">
        <div>
          <q-img width="250px" src="https://new.axilthemes.com/themes/keystroke/wp-content/themes/keystroke/assets/images/logo/logo.png" >

          </q-img>
        </div>
        <div>
          <select class="q-ma-sm" name="" id="">
            <option value="">
              Digital Agency
            </option>
          </select>
          <select class="q-ma-sm" name="" id="">
            <option value="">
             Services
            </option>
          </select>
          <select class="q-ma-sm" name="" id="">
            <option value="">
              Portfolio
            </option>
          </select>
          <select class="q-ma-sm" name="" id="">
            <option value="">
              Pages
            </option>
          </select>
          <select class="q-ma-sm" name="" id="">
            <option value="">
              Blog
            </option>
          </select>
          <a class="q-ma-md" href="#">Contact</a>
          <q-icon class="q-mr-lg icon " name="shopping_cart" size="28px" />
        </div>

      </div>
    </nav>
  </div>
  <!-- navbar N1 -->
  <!-- footer N1 -->
  <div class="fit row justify-center items-center q-mt-xl bg-grey-5 q-pa-sm ">
    <footer class=" fit row justify-around items-center">
        <div style="" >
          <span class="text-grey-8" >
            Copyright © 2022 Creative Agency WordPress Theme by <a href="#"> Axilthemes</a> . All rights reserved
          </span>
        </div>
        <div>
          <a class="q-ma-md" href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
    </footer>

  </div>
  <!-- footer N1 -->
  <!-- navbar N2 -->
  <div class=" outlined bg-grey-5     clas">
    <nav style="height:100px" class=" row justify-between  items-center ">
        <div style="" class=" fit  row justify-around items-center">
          <div>
            <span class="text-Dark text-h4">
            Panda
          </span>
          <a class="q-ma-sm q-ml-xl text-h6" href="#">Home</a>
          <a class="q-ma-sm text-h6" href="#">Pages</a>
          <a  class="q-ma-sm text-h6" href="#">Portfolio</a>
          <a  class="q-ma-sm text-h6" href="#">Blog</a>
          <a  class="q-ma-sm text-h6" href="#">Contact</a>

          </div>
            <div  class="items-center" >
               <q-input Outlined class=" bg-grey-2 " height="50px" style="width:300px; border-radius:10px" label="Search" >
                <q-icon name="search" class="text-h3 text-accent q-mb-sm q-ml-md" />
               </q-input>
             </div>

        </div>

      </nav>
  </div>
  <!-- navbar N2 -->
  <!-- Footer N2 -->
  <div class="fit row justify-center items-center q-mt-xl bg-grey-5 q-pa-sm ">
    <footer class=" fit row justify-around items-center">
        <div style="" >
          <span class="text-grey-8" >
          AxiomThemes © 2022. All Rights Reserved.
          </span>
        </div>
        <div>
          <a class="q-ma-md" href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
    </footer>

  </div>
  <!-- footer N2 -->
    <!-- navbar N3 -->
  <div class=" outlined bg-grey-5     clas">
    <nav style="height:100px" class=" row justify-between  items-center ">
        <div style="" class=" fit  row justify-around items-center">
          <div>

              <q-img width="250px" src="https://rstheme.com/products/wordpress/konstruk/wp-content/uploads/2022/03/logo_2.png" >

               </q-img>
              <a class="q-ma-sm q-ml-xl text-h6" href="#">Home+</a>
              <a class="q-ma-sm text-h6" href="#">About</a>
              <a class="q-ma-sm text-h6" href="#">Pages+</a>
              <a  class="q-ma-sm text-h6" href="#">Services+</a>
              <a  class="q-ma-sm text-h6" href="#">Blog</a>
              <a  class="q-ma-sm text-h6" href="#">Contact</a>
          </div>

            <div  class="items-center" >
               <q-input Outlined class=" bg-grey-2 " height="50px" style="width:300px; border-radius:10px" label="Search" >
                <q-icon name="search" class="text-h3 text-primary q-mb-sm q-ml-md" />
               </q-input>
             </div>

        </div>

      </nav>
  </div>
  <!-- navbar N3 -->
  <!-- footer N3 -->
    <div class="fit row justify-center items-center q-mt-xl bg-grey-5 q-pa-sm ">
    <footer class=" fit row justify-around items-center">
        <div style="" >
          <span class="text-grey-8" >
         © 2022 Konstruk. Designed By RSTheme.
          </span>
        </div>
        <div>
         <a class="q-ma-sm q-ml-xl text-h6" href="#">Home</a>
              <a class="q-ma-sm text-h6" href="#">About</a>
              <a class="q-ma-sm text-h6" href="#">Pages</a>
              <a  class="q-ma-sm text-h6" href="#">Services</a>
              <a  class="q-ma-sm text-h6" href="#">Blog</a>
              <a  class="q-ma-sm text-h6" href="#">Contact</a>
        </div>
    </footer>

  </div>
    <!-- footer N3 -->
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
  <!-- navbar N5 -->
  <div class="bg-grey-6 q-mt-xl row justify-center items-center">
         <div >
          <span class="text-h2">
            XuB
          </span>
        </div>
      <nav class="row justify-center items-center q-ma-md">

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
          <q-btn class="q-ml-xl" color="dark" text-color="white" label="Contact" />
          <q-btn class="q-ml-xl" color="dark" text-color="white" label="Register" />
      </nav>
    </div>
    <!-- navbar N5 -->
    <!-- footer N5 -->
     <div class="fit row justify-center items-center q-mt-xl bg-grey-5 q-pa-sm ">
    <footer class=" fit row justify-around items-center">
      <div class="row justify-around items-center">
        <div class="q-mr-xl">
           <span>«KUN.UZ» сайтида эълон қилинган материаллардан нусха кўчириш, тарқатиш ва бошқа шаклларда фойдаланиш фақат таҳририят ёзма <br> розилиги билан амалга оширилиши мумкин. <br>
              Гувоҳнома: №0987. Берилган санаси: 22.06.2015 йил. Муассис: «WEB EXPERT» МЧЖ. Таҳририят манзили: 100043, Тошкент шаҳри, К. Ёрматов <br> кўчаси, 12-уй. Электрон манзил: info@kun.uz. <br>
              Сайтда эълон қилинаётган муаллифлик мақолаларида келтирилган фикрлар муаллифга тегишли ва улар Kun.uz таҳририяти нуқтаи назарини <br> ифода этмаслиги мумкин. <br>
              Ⓣ  - мақола ва материалларда қўйилган мазкур белги уларнинг тижорат ва реклама ҳуқуқлари асосида эълон қилинганлигини билдиради.
           </span>
        </div>
            <div class="text-h5 q-ml-xl">
              <i class="fab fa-google "></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-telegram"></i>
              <i class="fab fa-instagram"></i>
            </div>
      </div>


        <div style=""  class=" q-mt-xl fit row justify-around items-center">
            <span class="text-h6"> © XTRM . AliXuB 2022.</span>


        </div>

    </footer>
  </div>
  <!-- footer N5 -->
  <!-- navbar N6 -->
  <div class="q-mt-xl">
    <nav>
      <div class="container">

        <div>
          <q-toolbar class="bg-grey-6 text-dark shadow-2 rounded-borders">
                <q-btn flat label="Homepage" class="q-ml-xl" />
                <q-space />

            <!--
              notice shrink property since we are placing it
              as child of QToolbar
            -->
            <q-tabs class="q-mr-xl"  shrink stretch>
              <q-tab name="tab1" label="Home" />
              <q-tab name="tab2" label="About" />
              <q-tab name="tab3" label="Pages" />
              <q-tab name="tab4" label="Blog" />
              <q-tab name="tab5" label="Shocases" />
            </q-tabs>

          </q-toolbar>
        </div>
      </div>
    </nav>
  </div>
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
      botlar:[
        {label:'home'},
        {label:'About'},
        {label:'Pages'},
        {label:'Blog'},
        {label:'Showcases'},
        {label:'Shop'},

      ]

    }
  }
}
</script>
<style scoped>
i{
  margin: 5px;
}
.clas{
  margin-top: 200px;

}
  a{
    text-decoration: none;
    color: black;
    transition: 0.2s ease;
  }
  select{transition: 0.2s ease;
    border: none;
    background: transparent;
    transition: 0.2s ease;
  }
  select:hover{
    color: rgb(145, 54, 237);
    transition: 0.2s ease;
  }
  a:hover{
     color: rgb(145, 54, 237);
    transition: 0.2s ease;
  }
  .icon{
    cursor: pointer;
  }
   .icon:hover{
     color: rgb(145, 54, 237);
    transition: 0.2s ease;
  }
</style>

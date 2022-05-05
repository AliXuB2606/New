<template>
  <div>
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
               <q-input Outlined class=" bg-grey-2 " height="50px" style="width:300px; border-radius:10px" label="Outlined" >
                <q-icon name="search" class="text-h3 text-accent q-mb-sm q-ml-md" />
               </q-input>
             </div>

        </div>

      </nav>
  </div>
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

</template>
<script>
export default {
  data(){
    return{


    }
  }
}
</script>
<style scoped>
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

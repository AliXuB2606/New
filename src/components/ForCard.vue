<template>
  <div>
    <nav style="margin-top:200px"  class=" q-pa-sm q-mt-xl bg-grey-5 row justify-center items-center content-center">
      <div style="width:80%" class="row  justify-between items-center">
        <div>
          <q-img width="250px" src="https://new.axilthemes.com/themes/keystroke/wp-content/themes/keystroke/assets/images/logo/logo.png" >

          </q-img>
        </div>
        <div>
          <select class="q-mr-lg " v-for="select in selects" :key="select" name="" id="">
            <option value="">
             {{select.option1}}
            </option>
            <option value="">
             {{select.option2}}
            </option>
          </select>
          <a class="q-mr-lg " href="#">Contact</a>

          <q-icon class="q-mr-lg " name="shopping_cart" size="28px" />
        </div>

      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data(){
    return{
      selects:[
        {option1:'Digital Agency', option2:'creative  Agency'},
        {option1:'Services',option2:'sercice two'},
        {option1:'Portfolio', option2:'creative  Agency'},
        {option1:'Pages', option2:'creative  Agency'},
        {option1:'Blog', option2:'creative  Agency'} ,
      ]
    }
  }
}
</script>
<style scoped>
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
</style>

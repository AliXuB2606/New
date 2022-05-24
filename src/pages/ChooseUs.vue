<template>
  <q-page>
  <ForCard/>
  <Caard/>
  <Vard/>
  <Fivecard/>
  <Fb/>
  </q-page>
</template>
<script>
import ForCard from "src/components/ForCard.vue";
import Caard from "src/components/Caard.vue";
import Vard from "src/components/Vard.vue";
import Fivecard from "../components/Fivecard.vue";
import Fb from "../components/Fb.vue";

export default {
    components: { ForCard, Caard, Vard, Fivecard, Fb }
}
</script>

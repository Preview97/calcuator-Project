<template>
  <div>
    <b-container class="bv-example-row mb-3">
  <b-row cols="12" >
    <b-col lg="3"> <calcuator ref="calcuator" modeFlag="calcuator1" /></b-col>
    <b-col lg="3"><calcuator ref="calcuator" modeFlag="calcuator2"/></b-col>
   <b-col lg="3"><showSearch ref="showSearch"/> <div v-for="dataArr in dataArr" v-bind:key="dataArr">{{ dataArr.result }}{{ dataArr.mode}}</div></b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
import "vue";
import calcuator from "./calcuator/calcuator";
import showSearch from "./showSearch/showSearch";
export default {
  components: {
    calcuator,
    showSearch
  },
  computed: {
    dataArr(){
      return this.$store.state.Datacal;
    }
  },
  methos:{
  }
};
</script>

<style></style>

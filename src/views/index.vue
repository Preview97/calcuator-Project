<template>
  <div>
    <b-container class="bv-example-row mb-3">
  <b-row cols="12" >
    <b-col lg="3"> <calcuator ref="calcuator" modeFlag="calcuator1" /></b-col>
    <b-col lg="3"><calcuator ref="calcuator" modeFlag="calcuator2"/></b-col>
    {{dataArr}}
  </b-row>
</b-container>
  </div>
</template>

<script>
import calcuator from "./calcuator/calcuator";
export default {
  components: {
    calcuator,
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

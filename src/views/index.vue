<template>
  <div>
    <b-container class="bv-example-row mb-3">
  <b-row cols="3">
    <b-col><calcuator ref="calcuator" /></b-col>
    <b-col><calcuator ref="calcuator" /></b-col>
    <b-col><calcuator ref="calcuator" /></b-col>
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
};
</script>

<style></style>

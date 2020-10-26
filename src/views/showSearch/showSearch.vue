<template>
  <b-card>
      {{dataArr}}
  </b-card>
</template>

<script>
export default {
 computed: {
    dataArr(){
      return this.$store.state.Datacal;
    }
  },
}
</script>

<style>

</style>
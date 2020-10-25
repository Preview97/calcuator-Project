<template>
  <b-card >
    <b-row cols="1">
      <b-input v-model="email" class="inputbox"></b-input>
      <b-input v-model="email" class="inputbox"></b-input>
    </b-row>
    <b-row cols="2">
      <b-col lg="9">
        <b-row cols="3">
          <b-button class="styleButton" type="submit" variant="outline-primary"
            >C</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('*')"
            >X</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('-')"
            >-</b-button
          >

          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(7)"
            >7</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(8)"
            >8</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(9)"
            >9</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(4)"
            >4</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(5)"
            >5</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary"  @click="clickNum(6)"
            >6</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(1)"
            >1</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(2)"
            >2</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum(3)"
            >3</b-button
          >
        </b-row>
        <b-row cols="2">
          <b-col lg="8">
            <b-row>
              <b-button
                class="styleButton"
                type="submit"
                variant="outline-primary"
                >0</b-button
              >
            </b-row>
          </b-col>

          <b-col lg="4">
            <b-row
              ><b-button
                class="styleButton"
                type="submit"
                variant="outline-primary"
                
                >.</b-button
              ></b-row
            >
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="3">
        <b-row cols="1">
          <b-button class="styleButton1" type="submit" variant="outline-primary"
            >+</b-button
          >
          <b-button class="styleButton2" type="submit" variant="outline-primary" @click="pdkpp"
            >=</b-button
          >
        </b-row>
      </b-col>
    </b-row>
    {{ dateToday }}
  </b-card>
</template>

<script>
import {  sync  } from "vuex-pathify";
var apiURL =
        "http://api.mathjs.org/v4/?expr=";
export default {
   computed: {
     ...sync("calcuator_calcuator/*"),
  },
  components: {},
  data() {
    return {
      dateToday: new Date().toLocaleString(),
      email: "",
    };
  },
  methods: {
    clickNum(e) {
      console.log("dedPI",e);
    },
    
    pdkpp(){
      
    }
  },
   mounted () {

  }
};
</script>

<style>
.inputBox {
  width: 200px;
  height: 50px;
}
.styleButton {
  width: 100%;
  height: 50px;
  margin: 0px;
  padding: 0px;
}
.styleButton1 {
  width: 100%;
  height: 100px;
  margin: 0px;
  padding: 0px;
}
.styleButton2 {
  width: 100%;
  height: 150px;
  margin: 0px;
  padding: 0px;
}
</style>

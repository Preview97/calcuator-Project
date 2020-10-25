<template>
  <b-card  style="margin-top: 20px;">
    <b-row cols="1">
      <h2>{{modeFlag}}</h2>
      <b-input v-model="formulaShow" class="inputbox"></b-input>
      <b-input v-model="result" class="inputbox"></b-input>
    </b-row>
    <b-row cols="2">
      <b-col lg="9">
        <b-row cols="3">
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="onReset"
            >C</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('*')"
            >X</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('-')"
            >-</b-button
          >

          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('7')"
            >7</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('8')"
            >8</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('9')"
            >9</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('4')"
            >4</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('5')"
            >5</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary"  @click="clickNum('6')"
            >6</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('1')"
            >1</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('2')"
            >2</b-button
          >
          <b-button class="styleButton" type="submit" variant="outline-primary" @click="clickNum('3')"
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
                @click="clickNum('0')"
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
                @click="clickNum('.')"
                >.</b-button
              ></b-row
            >
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="3">
        <b-row cols="1">
          <b-button class="styleButton1" type="submit" variant="outline-primary" @click="clickPositive"
            >+</b-button
          >
          <b-button class="styleButton2" type="submit" variant="outline-primary" @click="clickCal"
            >=</b-button
          >
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
var apiURL =
        "http://api.mathjs.org/v4/?expr=";
import Axios from "axios";
export default {
props: {
    modeFlag: {
      type: String,
      default() {
        return "";
      }
    }
  },
  computed: {
    dataArr(){
      return this.$store.state.Datacal;
    }
  },
  data() {
    let defaultArrData={
      date:null,
      result:"",
      mode:"",
      formula:""
    }
    return {
      numData:"",
      dateToday: new Date().toLocaleString(),
      DataApi:"",
      formulaCal:"",
      formulaShow:"",
      Num:"",
      i:0,
      arrData:{...defaultArrData}
    };
  },
  methods: {
    clickNum(e) {
        this.numData+=e;      
        this.formulaShow+=e;
        this.formulaCal+=e;
    },
    clickPositive(){
      this.formulaShow = this.formulaShow + '+';
      this.formulaCal = this.formulaCal + '%2b';
    },
    clickCal(){
      Axios
      .get(apiURL+this.formulaCal)
      .then(response => {
       this.result = response.data;
      this.arrData={
        date : new Date().toLocaleString(),
        result : this.result,
        mode: this.modeFlag,
        formula:this.formulaShow
      }
       this.$store.state.Datacal.push(this.arrData)
       })
    },
    onReset(){
      this.numData="";      
        this.formulaShow=""; 
        this.formulaCal=""; 
        this.DataApi=""; 
    }
  },
   mounted () {
 this.$store.dispatch("loadDropdownRecSts");
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

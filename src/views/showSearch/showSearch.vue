<template>
  <div style="margin-top: 20px">
    <b-row cols="4">
      <b-col lg="2">
        <h3>Result</h3>
      </b-col>
      <b-col lg="5">
        <b-input class="colinput" v-model="searchData"></b-input>
      </b-col>
      <b-col lg="3">
        <b-form-select
          class="colinput"
          @change="changeItem"
          :options="dropdownData"
        ></b-form-select>
      </b-col>
      <b-col lg="2">
        <b-button
          type="submit"
          class="colinput"
          variant="outline-primary"
          @click="onSearch"
          >Search</b-button
        >
      </b-col>
    </b-row>
    <b-card
      class="overflow-auto colinput"
      style="margin-top: 5px; height: 332.8px"
    >
      <b-card-body>
        <div v-for="(data, i) in dataArr" :key="i">
          <b-card>
            <b-row cols="2">
              <label class="alertstyle">{{ data.mode }} </label>
              <label class="alertstyle">{{ data.date }}-{{data.time}} </label>
            </b-row>
            <b-row>
              <label class="alertstyleResult" lg="12">{{ data.result }} </label>
            </b-row>
            <hr style="width: 100%; margin: 0px" />
            <b-row>
              <label class="alertstyle">{{ data.formula }} </label>
            </b-row></b-card
          >
        </div>
      </b-card-body>
    </b-card>
    <b-row>
      <b-col
        class="d-flex flex-row-reverse bd-highlight"
        style="margin-top: 5px"
      >
        <b-button type="submit" variant="danger" @click="onReset"
          >Claer</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  computed: {
    dataArr() {
      return this.$store.state.Datacal;
    },
    dropdownData() {
      return this.$store.state.dropdownData;
    },
  },
  data() {
    return {
      dropdownItem: "",
      searchData: "",
      searchResult: "",
      searchDate: "",
    };
  },

  methods: {
    onSearch() {
      this.searchResult = 0;
      this.searchDate = "";
      var newArr=[];
      this.dataArr.forEach((dataitem) => {
        if (this.dropdownItem == "R") {
          this.searchResult = parseFloat(this.searchData);
          if (this.searchResult == dataitem.result) {
            newArr.push(dataitem);
          }
        } else if (this.dropdownItem == "D") {
          this.searchDate = this.searchData;
          if (this.searchDate == dataitem.date) {
            newArr.push(dataitem);
          }
        } else {
          this.searchResult = parseFloat(this.searchData);
          this.searchDate = this.searchData;
          if (
            this.searchDate == dataitem.date ||
            this.searchResult == dataitem.result
          ) {
            newArr.push(dataitem);
          }
        }
         
      });
      this.dataArr.splice(0);
      this.dataArr.push(...newArr);
    },
    changeItem(e) {
      this.dropdownItem = e;
    },
    onReset() {
      this.$store.state.Datacal = [];
    },
  },
};
</script>

<style>
.alertstyle {
  padding-left: 7px;
  font-size: 15px;
  margin-bottom: 0px;
}
.alertstyleResult {
  padding-left: 7px;
  font-size: 20px;
}
.alertstyleFormula {
  padding: 5px;
  font-size: 25px;
}
.colinput {
  margin-left: 0px;
  margin-right: 0px;
}
</style>
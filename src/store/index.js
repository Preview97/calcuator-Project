import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";
let apiURL="http://api.mathjs.org/v4/";
Vue.use(Vuex)


export default new Vuex.Store({
  
  state: {
    data:"",
    con:"",
    dropdownData:[],
    Datacal:[]

  },
  mutations: {
    setDataRecStsItems(state, data) {
      state.dropdownData = data;
    },
    setDate(state,data){
      state.Datacal.push(data);
    }
  },
  actions: {
    async  loadAPI({commit},filter){
      await Axios.get(apiURL,{filter})
      .then(response => commit("Datacal",response.data))
    },
    loadDropdownRecSts({ commit }) {
      return new Promise(resolve => {
        let data = [
          {
            value: "R",
            text: "Result"
          },
          {
            value: "D",
            text: "Date"
          }
        ];
        commit("setDataRecStsItems", data);
        resolve(true);
      });
    },
  },
  modules: {
  },
  getters: {
    Datacal: state => state.Datacal

  }
})

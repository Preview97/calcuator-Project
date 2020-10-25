import Vue from 'vue';
import Vuex from 'vuex';
import Axios from "axios";
let apiURL="http://api.mathjs.org/v4/";
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    data:"",
    con:"",
    Datacal:[],
    dataRecStsItems:[]
  },
  mutations: {
    setDataRecStsItems(state, data) {
      state.dataRecStsItems = data;
    },
    setDate(state,data){
      state.Datacal.push(data);
      console.log(data);
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
            recordStatus: "A",
            DataString: "Active"
          },
          {
            recordStatus: "N",
            DataString: "Inactive"
          }
        ];
        commit("setDataRecStsItems", data);
        console.log("dataRecStsItems", data);
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

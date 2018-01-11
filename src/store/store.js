import Vue from 'vue'
import Vuex from 'vuex'
import $ from "jquery";

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    selectedDataSource: {},
    dataSources: [
      {
        id: "0",
        type: "api",
        name: "Yes No",
        url: "https://yesno.wtf/api",
        view:{
          highlighted: false
        }
      },
      {
        id: "1",
        type: "api",
        name: "Book",
        url: "https://api.ipify.org?format=json",
        view:{
          highlighted: false
        }
      }
    ]
  },
  getters: {
    dataSources: (state) => {
      return state.dataSources;
    },
    selectedDataSource: (state) => {
      return state.selectedDataSource;
    }
  },
  mutations: {
    highlightDataSource: (state, payload) => {
      state.dataSources.forEach( dataSource => {

        dataSource.view.highlighted = false

        if(dataSource.id == payload){
          dataSource.view.highlighted = true
        }
      });
    },
    editDataSource: (state, payload) => {
      state.dataSources.forEach( dataSource => {
        if(dataSource.id == payload){
          state.selectedDataSource = $.extend(true, {}, dataSource)
        }
      });
    }
  },
  actions: {
    highlightDataSource: (context, payload) => {
        context.commit('highlightDataSource', payload)
    },
    editDataSource: (context, payload) => {
        context.commit('editDataSource', payload)
    }
  }
});

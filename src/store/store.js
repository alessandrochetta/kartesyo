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
        id: '0',
        type: 'api',
        name: 'Yes No',
        url: 'https://yesno.wtf/api',
        method: {
          id: 0,
          label: "GET",
          description: "Get request method",
          value: "get"
        },
        pollingInterval: {
          id: 1,
          label: "1 s",
          value: 1000
        },
        view:{
          highlighted: false
        }
      },
      {
        id: '1',
        type: 'api',
        name: 'My IP',
        url: 'https://api.ipify.org?format=json',
        method: {
          id: 0,
          label: "GET",
          description: "Get request method",
          value: "get"
        },
        pollingInterval: {
          id: 1,
          label: "1 s",
          value: 1000
        },
        view:{
          highlighted: false
        }
      },
      {
        id: '2',
        type: 'api',
        name: 'Weather',
        url: 'http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22',
        method: {
          id: 0,
          label: "GET",
          description: "Get request method",
          value: "get"
        },
        pollingInterval: {
          id: 1,
          label: "1 s",
          value: 1000
        },
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
      return state.selectedDataSource
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
    editSelectedDataSource: (state, payload) => {
      state.dataSources.forEach( dataSource => {
        if(dataSource.id == payload){

          state.selectedDataSource = JSON.parse(JSON.stringify(dataSource))
        }
      });
    }
  },
  actions: {
    highlightDataSource: (context, payload) => {
        context.commit('highlightDataSource', payload)
    },
    editSelectedDataSource: (context, payload) => {
        context.commit('editSelectedDataSource', payload)
    }
  }
});

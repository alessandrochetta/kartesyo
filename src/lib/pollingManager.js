import axios from 'axios'
import {constants} from 'config/constants'

export var pollingManager = {
  activePollings: [],
  pollingObjectPrototype: constants.dataSources.pollingObject,

  startPolling: function(dataSource, resultCallback){

    if(this.isDataSourceinBeingPolled(dataSource)){
      return resultCallback(undefined,"Datasource already being polled")
    }

    var httpRequest = undefined

    if(dataSource.method.value == 'get'){
      httpRequest = () => axios.get(dataSource.url)
      .then(function (response) {
        resultCallback(response)
      })
      .catch(function (e) {
        resultCallback(undefined, e)
      })
    }

    if(dataSource.method.value == 'post'){
      httpRequest = () => axios.post(dataSource.url, dataSource.postData)
      .then(function (response) {
        resultCallback(response)
      })
      .catch(function (e) {
        resultCallback(undefined, e)
      })
    }
    // First polling
    httpRequest()
    // Start interval
    var intervalId = setInterval(httpRequest, dataSource.pollingInterval.value);
    // Store interval data
    var newPollingObject = JSON.parse(JSON.stringify(this.pollingObjectPrototype))
    newPollingObject.dataSourceId = dataSource.id
    newPollingObject.intervalId = intervalId
    this.activePollings.push(newPollingObject)

  },

  stopPolling: function(dataSource){
    var pollingObjectIndex = undefined
    this.activePollings.forEach(function(d, i){
      if(d.dataSourceId == dataSource.id){
        clearInterval(d.intervalId)
        pollingObjectIndex = i
      }
    })
    if(pollingObjectIndex != undefined){
      this.activePollings.splice(pollingObjectIndex, 1);
    }
  },

  isDataSourceinBeingPolled: function(dataSource){
    var result = false
    this.activePollings.forEach(function(d){
      if(d.dataSourceId == dataSource.id){
        result = true
      }
    })
    return result;
  }
}

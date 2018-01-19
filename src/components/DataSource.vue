<template>
  <div class="">

    <div class="selected-datasource-header gray-background-3 " v-if="localSelectedDataSource.id">
      <sui-input transparent placeholder="Datasource Name" :error="formError.nameApplyClass" :value="localSelectedDataSource.name" v-on:input="changeApiName" icon="pencil" icon-position="left"/>
    </div>
    <div class="form-error white-background gray-color-2" v-if="localSelectedDataSource.id" :class="{errorBackground: formError.urlMessage || formError.nameMessage}">
      &nbsp; {{formError.urlMessage}}{{formError.nameApplyClass && formError.urlApplyClass ? ", " : ""}}
      {{formError.nameMessage}}
    </div>
    <div class="selected-datasource-body white-background gray-color-2" v-if="localSelectedDataSource.id">

        <div class="col-method padding-10 align-center" >
          <sui-dropdown :text="localSelectedDataSource.method.label" class="input-padding">
            <sui-dropdown-menu>
                  <sui-dropdown-item v-for="apiMethods in getConstants.dataSources.apiMethods" v-on:click.native="changeApiMethods(apiMethods)">
                    <span>{{apiMethods.label}}</span> <br>
                    <span class="font-small gray-color-1">{{apiMethods.description}}</span>
                  </sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </div>
        <div class="col-url padding-10"><sui-input class="full-width" placeholder="Url" :error="formError.urlApplyClass" v-on:input="changeApiUrl" :value="localSelectedDataSource.url"/></div>
        <div class="col-polling-interval padding-10 align-center">
          <sui-dropdown :text=" 'poll every ' + localSelectedDataSource.pollingInterval.label" class="input-padding">
            <sui-dropdown-menu>
                  <sui-dropdown-item v-for="pollingInterval in getConstants.dataSources.pollingIntervals" v-on:click.native="changePollingInterval(pollingInterval)"><span class="font-small gray-color-1">poll every </span> {{pollingInterval.label}}</sui-dropdown-item>
            </sui-dropdown-menu>
          </sui-dropdown>
        </div>
        <div class="clear-both">
        </div>
      </div>

      <div>
        <div class="selected-datasource-header-nomargintop gray-background-3 " v-if="this.latestApiResult.status">
          <div class="col-2">
            <span class="input-padding display-inline-block gray-color-1">status {{this.latestApiResult.status}} &nbsp;</span>
          </div>
          <div class="col-2 align-right">
            <sui-button>Stop Polling</sui-button>
          </div>
          <div class="clear-both">
          </div>
        </div>
        <div class="selected-datasource-body-fullpadding white-background gray-color-2" v-if="this.latestApiResult.status">
          {{this.latestApiResult.data}}&nbsp;
        </div>
      </div>

    <div class="datasource-list">
      <div class="datasource-item pointer"
      v-bind:class="{ highlightdatasource: dataSource.view.highlighted }"
      v-for="dataSource in dataSources"
      v-on:mouseover="highlightDataSource(dataSource.id)"
      v-on:mouseout="highlightDataSource(-1)"
      v-on:click="editSelectedDataSourceLocal(dataSource.id)"
      >
        {{dataSource.name}}
        <span class="font-small gray-color-1">• {{dataSource.method.label}} • {{dataSource.url}} • poll every {{dataSource.pollingInterval.label}} </span>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

import {pollingManager} from 'lib/pollingManager'
import {constants} from 'config/constants'
import $ from "jquery"
import _ from "lodash"
import validate from "validate.js"

export default {
  name: 'DataSourceList',
  data(){
        return{
          localSelectedDataSource: {},
          formError: {},
          latestApiResult: {}
        }
    },
  computed: {
        ...mapGetters([
            'dataSources',
            'selectedDataSource'
        ]),
        getConstants: function(){
          return constants
        }
    },
  methods: {
      ...mapActions([
          'highlightDataSource',
          'editSelectedDataSource'
      ]),
      editSelectedDataSourceLocal: function(id){
        pollingManager.stopPolling(this.localSelectedDataSource)
        this.editSelectedDataSource(id)
        if(this.localSelectedDataSource.id != this.selectedDataSource.id){
          this.localSelectedDataSource = JSON.parse(JSON.stringify(this.selectedDataSource))
          this.formError = {}
          pollingManager.startPolling(this.localSelectedDataSource, this.handlePollingResult)
          this.latestApiResult = {}
        }
      },
      changeApiMethods: function(apiMethod){
        this.localSelectedDataSource.method = JSON.parse(JSON.stringify(apiMethod))
        pollingManager.stopPolling(this.localSelectedDataSource)
        pollingManager.startPolling(this.localSelectedDataSource, this.handlePollingResult)
      },
      changePollingInterval: function(pollingInterval){
        this.localSelectedDataSource.pollingInterval = JSON.parse(JSON.stringify(pollingInterval))
        pollingManager.stopPolling(this.localSelectedDataSource)
        pollingManager.startPolling(this.localSelectedDataSource, this.handlePollingResult)
      },
      changeApiUrl: function (input) {
        this.localSelectedDataSource.url = input;
        var validationResult = validate({website: input}, {
          website: {
            url: {
              allowLocal: true
            }
          }
        })
        if(validationResult != undefined){
          this.formError.urlMessage = "Url not valid"
          this.formError.urlApplyClass = true
        }else{
          this.formError.urlMessage = ""
          this.formError.urlApplyClass = false
        }
      },
      changeApiName:function (input) {
        this.localSelectedDataSource.name = input;
        if(this.localSelectedDataSource.name.length == 0){
          this.formError.nameMessage = "Name not valid"
          this.formError.nameApplyClass = true
        }else{
          this.formError.nameMessage = ""
          this.formError.nameApplyClass = false
        }
      },
      handlePollingResult: function(result){
        this.latestApiResult = result
        console.log(result);
      }
  }
}
</script>

<style >
.datasource-list{
  margin: 20px 20px;
}

.datasource-item{
  margin: 5px;
  padding: 5px;
}

.highlightdatasource{
  background-color: #f7f7f7
}

.selected-datasource-header{
  padding: 20px;
  margin: 20px 20px 0px 20px;
}

.selected-datasource-header-nomargintop{
  padding: 10px;
  margin: 0px 20px 0px 20px;
}

.selected-datasource-body{
  padding: 0 20px 20px 20px;
  margin: 0px 20px 0px 20px;
}

.selected-datasource-body-fullpadding{
  padding: 20px 20px 20px 20px;
  margin: 0px 20px 0px 20px;
}

.form-error{
  padding: 5px;
  margin: 0px 20px 0px 20px;
  text-align: center;
}

.col-method{
  float: left;
  width: 15%
}

.col-url{
  float: left;
  width: 70%
}

.col-polling-interval{
  float: left;
  width: 15%
}
</style>

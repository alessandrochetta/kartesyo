<template>
  <div class="">

    <div class="selected-datasource-header gray-background-3" v-if="selectedDataSource.id">
      {{selectedDataSource.name}}
    </div>
    <div class="selected-datasource-body white-background" v-if="selectedDataSource.id">
      {{selectedDataSource.url}}
    </div>

    <div class="datasource-list">
      <div class="datasource-item pointer"
      v-bind:class="{ highlightdatasource: dataSource.view.highlighted }"
      v-for="dataSource in dataSources"
      v-on:mouseover="highlightDataSource(dataSource.id)"
      v-on:mouseout="highlightDataSource(-1)"
      v-on:click="editDataSource(dataSource.id)"
      >
        {{dataSource.name}} - {{dataSource.url}}
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';

export default {
  name: 'DataSourceList',
  data(){
        return{
          mode: 'view'
        }
    },
  computed: {
        ...mapGetters([
            'dataSources',
            'selectedDataSource'
        ])
    },
  methods: {
      ...mapActions([
          'highlightDataSource',
          'editDataSource'
      ])
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

.selected-datasource-body{
  padding: 20px;
  margin: 0px 20px 20px 20px;
}
</style>

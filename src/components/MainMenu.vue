<template>
  <div class="main-menu-container">
    <div class="main-menu-level main-menu-level-1 gray-color-1">
      <span class="menu-button-level-1"><router-link to="/DataSource">DATA SOURCE</router-link></span>
      <span class="menu-button-level-1"><router-link to="/Graph">GRAPH</router-link></span>
      <span class="menu-button-level-1"><router-link to="/Dashboard">DASHBOARD</router-link></span>
    </div>
    <!--div class="main-menu-level main-menu-level-2 gray-color-2">
      <span class="menu-button-level-2"><router-link to="/DataSource/DataSourceList">Data Source List</router-link></span>
      <span class="menu-button-level-2"><router-link to="/DataSource/DataSourceEditorApi">Create Data Source</router-link></span>
    </div-->
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: 'MainMenu'
}
</script>

<style >
.main-menu-level{
  padding: 20px;
}

.main-menu-level .router-link-active{
  color: rgba(39, 174, 96,1.0);
}

.main-menu-level-1{
  background-color: white;
}

.menu-button-level-1{
  display: inline-block;
  margin: 0 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
}

.menu-button-level-2{
  display: inline-block;
  margin: 0 10px;
  font-size: 12px;
  //font-weight: bold;
  //letter-spacing: 2px;
  cursor: pointer;
}
</style>

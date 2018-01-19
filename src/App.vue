<template>
  <div id="app">
    <MainMenu></MainMenu>
    <router-view/>
  </div>
</template>

<script>
import MainMenu from '@/components/MainMenu'
export default {
  name: 'app',
  components: {MainMenu}
}
</script>

<style>
body{
  background-color: #f2f2f2;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  color: #2b2b2b;
  font-size: 11pt;
}

.white-background{
  background-color: white;
}

.white-color{
  color: white;
}

.gray-color-0{
  color: #f2f2f2
}
.gray-background-0{
  background-color: #f2f2f2
}

.gray-color-2{
  color: #656565
}
.gray-background-2{
  background-color: #656565
}

/* ---- Text ----*/
.font-small:{
  font-size: 8pt
}

.align-center{
  text-align: center;
}

.align-left{
  text-align: left;
}

.align-right{
  text-align: right;
}

/* ---- Colors ----*/
.gray-color-1{
  color: #939393
}
.gray-background-1{
  background-color: #666
}

.gray-color-3{
  color: #f9f9f9
}
.gray-background-3{
  background-color: #f9f9f9
}

.gray-color-4{
  color: #f7f7f7
}
.gray-background-4{
  background-color: #f7f7f7
}

.error-color{
  color: rgba(192, 57, 43,1.0)
}

.errorBackground{
  transition: 0.5s;
  background-color: #fff6f6
}
/* unvisited link */
a:link {
    text-decoration: none;
    color: inherit;
}

/* visited link */
a:visited {
    text-decoration: none;
    color: inherit;
}

/* mouse over link */
a:hover {
    text-decoration: none;
    color: inherit;
}

/* selected link */
a:active {
    text-decoration: none;
    color: inherit;
}

.pointer{
  cursor: pointer;
}

/* --- layout ---*/
.display-inline-block{
    display: inline-block;
}

.full-width{
  width: 100%
}

.overflow-hidden{
  overflow: hidden;
}

.col-2-responsive{
  float: left;
  width: 50%
}

.col-2{
  float: left;
  width: 50%;
}

.col-3{
  float: left;
  width: 33%;
}

.col-20{
  float: left;
  width: 20%;
}

.col-80{
  float: left;
  width: 80%;
}

.padding-10{
  padding: 10px
}

.clear-both{
  clear:both;
}

/* ---- Input ----*/
.input-padding{
  padding: .67857143em 1em;
}

/* ---- Effects ----*/


</style>

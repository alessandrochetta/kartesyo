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
  color: #232323
}
.gray-background-2{
  background-color: #232323
}

.gray-color-1{
  color: #666
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
</style>

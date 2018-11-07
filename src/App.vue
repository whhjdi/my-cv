<template>
  <div id="app" class="wrapper" ref="wrapper">
    <nav-bar></nav-bar>
     <router-view/>
    <!--
    <Home></Home>
    <Profile></Profile>
    <Contact></Contact> -->
    <MyFooter></MyFooter>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import MyFooter from "./components/MyFooter";
export default {
  components: {
    NavBar,
    MyFooter
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  display: flex;
  flex-direction: column;
}
.my-footer {
  flex: 1;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
#content {
  padding: 80px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

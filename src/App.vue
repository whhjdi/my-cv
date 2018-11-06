<template>
  <div id="app">
    <nav-bar></nav-bar>
    <Home></Home>
    <Profile></Profile>
    <Contact></Contact>
    <!-- <div id="content">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";
import Profile from "./components/Profile.vue";
import Contact from "./components/Contact";
export default {
  components: {
    NavBar,
    Home,
    Profile,
    Contact
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

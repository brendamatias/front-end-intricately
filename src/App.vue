<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  min-height: 100%;
}

body,
input::placeholder {
  font-family: "Manjari", sans-serif;
  -webkit-font-smoothing: antialiased !important;
}

body,
input,
button {
  color: #222;
  font-size: 14px;
}

button {
  cursor: pointer;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>

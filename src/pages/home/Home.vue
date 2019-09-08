<template>
  <section id="home" :class="{ background: isActive }">
    <div>
      <span>HOME</span>
      <span>/</span>
      <span>COMPANY DATA</span>
    </div>
    <div class="home">
      <nav class="sidenav">
        <ul>
          <li>
            <router-link :to="{name: 'companydata'}">COMPANY DATA</router-link>
          </li>
          <li>
            <router-link :to="{name: 'companytable'}">COMPANY TABLE</router-link>
          </li>
          <li>
            <router-link :to="{name: 'companypage'}" class="border-none">COMPANY PAGE</router-link>
          </li>
        </ul>
      </nav>
      <transition mode="out-in">
        <router-view />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      isActive: false
    };
  },
  methods: {},
  created() {
    document.title = "Home";
  }
};
</script>


<style scoped>
#home {
  display: grid;
  justify-content: center;
  padding-top: 40px;
}
.background {
  background: #e7e9f3;
}
span {
  padding-right: 18px;
  color: #7e7e7e;
}
.home {
  display: grid;
  grid-template-columns: minmax(100px, 300px) 1fr;
  grid-gap: 0px;
  margin-top: 30px;
}
.sidenav ul {
  border: 1px solid #d4d9e3;
  border-radius: 4px;
}
.border-none {
  border-bottom: none !important;
}
.sidenav a {
  padding: 30px;
  display: block;
  border-bottom: 1px solid #d4d9e3;
  color: #5d699a;
  font-weight: bold;
}
.sidenav a.router-link-exact-active,
.sidenav a:hover {
  background: #fafbfc;
  color: #505050;
  border-left: 4px solid #344279;
}
</style>
<template>
  <section id="companypage">
    <div class="microsoft">
      <div class="microsoft-logo">
        <div class="microsoft-content">
          <div class="orange"></div>
          <div class="green"></div>
        </div>
        <div class="microsoft-content">
          <div class="blue"></div>
          <div class="yellow"></div>
        </div>
      </div>
      <div>
        <h1>Microsoft</h1>
        <h4>
          <font-awesome-icon icon="map-marker-alt" class="icon" />Redmond, WA USA
        </h4>
      </div>
    </div>
    <h3>
      At Microsoft, our mission is to empower every person and
      every organization on the planet to achieve more. Our mission is
      grounded in both the world in which we live and the future we strive
      to create.
      <u>View More...</u>
    </h3>
    <div class="grid">
      <Activities />
      <div>
        <CompanyContext v-bind="post" />
        <CompanyContext v-bind="post" />
        <CompanyContext v-bind="post" />
      </div>
    </div>
  </section>
</template>

<script>
import Activities from "../../../components/Activities";
import CompanyContext from "../../../components/CompanyContext";

export default {
  name: "CompanyPage",
  components: {
    Activities,
    CompanyContext
  },
  post: {
    id: 1,
    title: "Minha jornada com Vue"
  },
  created() {
    document.title = "Home | Company Page";
  }
};
</script>

<style scoped>
#companypage {
  background: #e7e9f3;
  padding: 30px;
  margin-left: 30px;
  max-width: 860px;
  color: #505050;
}
.microsoft {
  display: flex;
  align-items: center;
}
.microsoft-logo {
  display: block;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 82px;
  box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.1);
  margin-right: 20px;
}
.microsoft-content {
  display: flex;
}
.microsoft-content div {
  margin: 1px;
}
.orange,
.green,
.blue,
.yellow {
  width: 20px;
  height: 20px;
}
.orange {
  background: #f1511b;
}
.green {
  background: #80cc28;
}
.blue {
  background: #00adef;
}
.yellow {
  background: #fbbc09;
}
.icon {
  color: #999999;
  margin-right: 8px;
}
h1,
h3 {
  color: #333333;
}
h1 {
  font-size: 36px;
}
h4 {
  margin-top: 4px;
  color: #666666;
  font-size: 14px;
}
h3 {
  margin: 40px 0;
  font-size: 15px;
}
u {
  color: #5d699a;
  text-decoration: line;
}
.grid {
  display: flex;
  justify-content: space-between;
}
</style>

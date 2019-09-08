<template>
  <div class="header">
    <ul>
      <img :src="logo" alt="Logo" />
      <li>
        <font-awesome-icon icon="search" class="btn-search" />
        <input type="search" placeholder="Search Companies" />
      </li>
      <li class="or">OR</li>
      <li class="smartlist">
        New SmartList
        <font-awesome-icon icon="chevron-down" class="down" />
      </li>
      <li>
        Prospect
        <font-awesome-icon icon="chevron-down" class="down" />
      </li>
      <li>
        Alert
        <font-awesome-icon icon="chevron-down" class="down" />
      </li>
      <li>
        Learn
        <font-awesome-icon icon="chevron-down" class="down" />
      </li>
    </ul>
    <div class="circles">
      <img :src="chrome" alt="Chrome" class="circle" />
      <img :src="profile" alt="Profile" class="circle" />
      <font-awesome-icon icon="chevron-down" class="down" />
    </div>
  </div>
</template>

<script>
import logo from "../assets/zeplin-assets/Company Page/logo-pink@3x.png";
import chrome from "../assets/zeplin-assets/Company Page/group-10-copy-6@3x.png";
import profile from "../assets/zeplin-assets/Company Page/group-copy@3x.png";

export default {
  name: "Header",
  data: function() {
    return {
      logo: logo,
      chrome: chrome,
      profile: profile
    };
  }
};
</script>

<style scoped>
.header,
.header ul,
.header ul li,
.circles {
  display: flex;
  align-items: center;
}
.header {
  background: #394783;
  flex-wrap: wrap;
  padding: 20px 60px;
  justify-content: space-between;
}
img {
  max-width: 50px;
}
.header ul {
  color: #fff;
  text-transform: uppercase;
}
.header ul li {
  padding: 0px 30px;
  font-size: 12px;
}
.header input {
  background: #1f2b5a;
  border: 0;
  color: #fff;
  padding: 12px 20px;
  padding-left: 45px;
  border-radius: 5px;
  width: 350px;
}
.header input::placeholder {
  color: #fefefe;
  font-size: 12px;
}
.btn-search {
  color: #ced2e0;
  border: 0;
  position: relative;
  max-width: 15px;
  left: 34px;
}
.down {
  color: #5d6899;
  margin-left: 10px;
}
.or {
  padding: 0px !important;
}
.smartlist {
  background: #5d699a;
  margin: 0 30px;
  padding: 15px 30px !important;
  border-radius: 5px;
  width: 100%;
}
.circles {
  justify-content: center;
  flex-wrap: wrap;
}
.circle {
  background: #fff;
  margin: 0px 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 1px;
}
</style>

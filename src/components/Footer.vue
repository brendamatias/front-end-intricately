<template>
  <div class="footer">
    <div class="footer-top">
      <div>
        <ul>
          <li>
            <a>Pricing</a>
            <div class="space" />
          </li>
          <li>
            <a>Blog</a>
            <div class="space" />
          </li>
          <li>
            <a>Webinars</a>
            <div class="space" />
          </li>
          <li>
            <a>Events</a>
            <div class="space" />
          </li>
          <li>
            <a>Help Center</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a>Terms and Conditions</a>
            <div class="space" />
          </li>
          <li>
            <a>Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>
        <span>© Copyright 2017, Intricately, Inc. All Rights Reserved.</span>
      </div>
      <div>
        <div>
          <img :src="linkedin" alt="Twitter" class="circle" />
        </div>
        <div>
          <img :src="facebook" alt="Twitter" class="circle" />
        </div>
        <div>
          <img :src="twitter" alt="Twitter" class="circle" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import linkedin from "../assets/zeplin-assets/Company Page/fill-118.png";
import facebook from "../assets/zeplin-assets/Company Page/fill-92.png";
import twitter from "../assets/zeplin-assets/Company Page/fill-93.png";

export default {
  name: "Footer",
  data: function() {
    return {
      linkedin: linkedin,
      facebook: facebook,
      twitter: twitter
    };
  }
};
</script>

<style scoped>
.footer ul,
.footer ul li,
.footer-bottom,
.footer-bottom div {
  display: flex;
}
.footer-top,
.footer-bottom {
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  margin: 30px auto;
}
.footer {
  margin-top: 80px;
  border-top: 1px solid #d4d9e3;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer ul {
  color: #5d699a;
}
.footer ul li {
  font-size: 14px;
}
.space {
  display: block;
  background: #5d699a;
  width: 1px;
  height: 12px;
  margin: 0 15px;
}
span {
  color: #b7b7b7;
}
img {
  margin-left: 10px;
}
</style>

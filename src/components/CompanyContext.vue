<template>
  <div class="content company">
    <div class="border">
      <span>SIMILAR COMPANIES</span>
    </div>
    <div>
      <div class="description">
        <img :src="aws" alt="Amazon Web Services" class="img-company" />
        <p>Amazon Web Services (AWS)</p>
      </div>
      <div class="description">
        <img :src="oracle" alt="Oracle Corporation" class="img-company" />
        <p>Oracle Corporation</p>
      </div>
    </div>
  </div>
</template>

<script>
import aws from "../assets/zeplin-assets/Company Page/logo.png";
import oracle from "../assets/zeplin-assets/Company Page/logo-copy.png";

export default {
  name: "CompanyContext",
  data: function() {
    return {
      aws: aws,
      oracle: oracle
    };
  }
};
</script>

<style>
.content {
  border: 1px solid #d4d9e3;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
}
.company {
  width: 380px;
}
.border {
  padding: 20px 15px;
  border-bottom: 1px solid #d4d9e3;
}
.description {
  padding: 20px 15px;
}
.content span {
  color: #505050;
  font-weight: bold;
}
.content p {
  color: #5d699a;
  font-size: 16px;
}
.description {
  display: flex;
  align-items: center;
}

.img-company {
  margin-right: 6px;
}
</style>
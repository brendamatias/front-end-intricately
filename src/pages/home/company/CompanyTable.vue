<template>
  <section>
    <div>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam.
      </h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "CompanyTable",
  created() {
    document.title = "Home | Company Table";
  }
};
</script>

<style scoped>
section {
  border: 1px solid #d4d9e3;
  border-radius: 4px;
  padding: 30px;
  margin-left: 30px;
  max-width: 860px;
  color: #505050;
}

form div {
  display: flex;
  flex-direction: column;
}
form div label {
  color: #b1b1b1;
  margin: 35px 0 5px 0;
}
form div input,
form div textarea {
  border: 1px solid #ced2e0;
  border-radius: 4px;
  padding: 10px 20px;
}
form div input::placeholder,
form div textarea::placeholder {
  color: #ced2e0;
}
form div input {
  max-width: 300px;
}
form div textarea {
  resize: none;
  height: 200px;
}
</style>
